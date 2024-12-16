import { Types } from "mongoose";
import { connect } from '@/db/mongo-db-config'
import Event from "@/db/models/event.model";

// Create a new event for a user
export async function createEvent(eventData: any) {
	try {
		await connect();

		// Validate user ID
		if (!eventData.userId || !Types.ObjectId.isValid(eventData.userId)) {
			throw new Error("Invalid User ID");
		}

		const newEvent = await Event.create(eventData);
		return JSON.parse(JSON.stringify(newEvent));
	} catch (error) {
		console.error("Create Event Error: ", error);
		throw error;
	}
}

// Update an existing event
export async function updateEvent(eventId: string, eventData: any) {
	try {
		await connect();

		// Validate IDs
		if (!eventId || !Types.ObjectId.isValid(eventId)) {
			throw new Error("Invalid Event ID");
		}

		const updatedEvent = await Event.findByIdAndUpdate(
			eventId,
			{
				...eventData,
				updatedAt: new Date(),
			},
			{ new: true, runValidators: true },
		);

		if (!updatedEvent) {
			throw new Error("Event not found");
		}

		return JSON.parse(JSON.stringify(updatedEvent));
	} catch (error) {
		console.error("Update Event Error: ", error);
		throw error;
	}
}

// Delete an event
export async function deleteEvent(eventId: string) {
	try {
		await connect();

		// Validate ID
		if (!eventId || !Types.ObjectId.isValid(eventId)) {
			throw new Error("Invalid Event ID");
		}

		const deletedEvent = await Event.findByIdAndDelete(eventId);

		if (!deletedEvent) {
			throw new Error("Event not found");
		}

		return JSON.parse(JSON.stringify(deletedEvent));
	} catch (error) {
		console.error("Delete Event Error: ", error);
		throw error;
	}
}

// Get events for a specific user
export async function getUserEvents(userId: string) {
	try {
		await connect();

		// Validate user ID
		if (!userId || !Types.ObjectId.isValid(userId)) {
			throw new Error("Invalid User ID");
		}

		const events = await Event.find({ userId }).sort({ startDate: 1 });
		return JSON.parse(JSON.stringify(events));
	} catch (error) {
		console.error("Get User Events Error: ", error);
		throw error;
	}
}
