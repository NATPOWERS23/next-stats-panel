"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarEventWidget = ({ events }) => {
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
