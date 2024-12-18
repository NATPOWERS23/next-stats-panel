"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePathname, useRouter } from "next/navigation";
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
			start: event.startDate,
			end: event.endDate,
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
