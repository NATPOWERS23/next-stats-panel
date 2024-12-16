import type { UserEvent } from "@/types/event.interface";

function calculateEndDate(startDate: Date): Date {
	const endDate = new Date(startDate);
	endDate.setDate(startDate.getDate() + 1);
	return endDate;
}

export const mockNewEvent: UserEvent = {
	userId: "123abc",
	title: "Team Meeting",
	description: "Weekly sync",
	startDate: new Date(),
	endDate: calculateEndDate(new Date()),
};