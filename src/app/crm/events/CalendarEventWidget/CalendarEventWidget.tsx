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
		<div className="p-6 bg-gray min-h-screen">
			<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
				<section style={{ height: "55vh" }}>
					<FullCalendar
						plugins={[dayGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						events={events}
						dateClick={handleDateClick}
						editable={true}
						height="100%"
						className="rounded-lg border"
					/>
				</section>
			</div>
		</div>
	);
};

export default CalendarEventWidget;
