"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarEventWidget = ({
	events,
}: { events: { title: string; date: string; id: string } }) => {
	const pathname = usePathname();
	const router = useRouter();

	const handleDateClick = (info: { dateStr: string }) => {
		router.push(
			`${pathname}?modal=addCalendarEvent&show=true&date=${info.dateStr}`,
		);
	};

	return (
		<div className="w-full bg-grey shadow-lg rounded-2large p-6">
			<section style={{ height: "55vh" }}>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={events}
					dateClick={handleDateClick}
					editable={true}
					height="100%"
				/>
			</section>
		</div>
	);
};

export default CalendarEventWidget;
