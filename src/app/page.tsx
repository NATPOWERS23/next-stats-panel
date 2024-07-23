import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/client');
  } else {
    redirect('/crm');
  }
}
