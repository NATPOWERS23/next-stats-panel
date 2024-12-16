"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { UserEvent } from "@/types/event.interface";

export interface fullcalendarEvent {
	title: string;
	start: Date;
	end?: Date;
	description?: string;
}

const CalendarEventWidget = ({ events }: { events: UserEvent[] }) => {
	const pathname = usePathname();
	const router = useRouter();

	const handleDateClick = (info: { dateStr: string }) => {
		router.push(
			`${pathname}?modal=addCalendarEvent&show=true&date=${info.dateStr}`,
		);
	};

	const dataFormatter = (events: UserEvent[]): fullcalendarEvent[] => {
		return events.map((event: UserEvent) => ({
			title: event.title,
			start: new Date(event.startDate),
			end: event.endDate ? new Date(event.endDate) : undefined,
			description: event.description,
		}));
	};

	return (
		<div>
			<section style={{ height: "55vh" }}>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={dataFormatter(events)}
					dateClick={handleDateClick}
					editable={true}
					height="100%"
				/>
			</section>
		</div>
	);
};

export default CalendarEventWidget;
