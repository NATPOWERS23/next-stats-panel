import { Webhook } from "svix"
import { clerkClient } from "@clerk/nextjs/server";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { createUser } from "@/db/actions/user.action";


export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
  const DEFAULT_ORGANIZATION_ID = process.env.CRM_ORGANIZATION_ID as string
  const DEFAULT_ORGANIZATION_ROLE = 'org:member'

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data
  const eventType = evt.type

  // CREATE User in mongodb
  if (eventType === "user.created") {
    const {id, email_addresses, image_url, first_name, last_name, username} = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      photo: image_url,
      firstName: first_name,
      lastName: last_name,
      username: username,
    }

    const newUser = await createUser(user);
    
    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id
        }
      })

      const response = await clerkClient.organizations.createOrganizationMembership({
        organizationId: DEFAULT_ORGANIZATION_ID,
        userId: id,
        role: DEFAULT_ORGANIZATION_ROLE
      })

      console.log(`New user created: ${JSON.stringify(newUser)}. Setted to ${response.organization.name} organization with role: ${DEFAULT_ORGANIZATION_ROLE}`);
    } else {
      console.log(`User already exists - sign in: ${JSON.stringify(user)}`);
    }

    return NextResponse.json({ success: true })
  }


  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)

  return new Response('', { status: 200 })
}