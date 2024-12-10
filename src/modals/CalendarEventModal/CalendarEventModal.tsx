"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import { useSearchParams } from "next/navigation";

export default function CalendarEventModal() {
	const searchParams = useSearchParams();
	const eventDate = searchParams.get("date") ?? undefined;

	const [newEvent, setNewEvent] = useState({
		title: "",
		date: eventDate ?? "",
	});

	const handleAddEvent = () => {
		if (newEvent.title && newEvent.date) {
			const eventToAdd = {
				...newEvent,
				id: Math.random().toString(36).substring(2, 9),
			};
			// setEvents([...events, eventToAdd]);
			setNewEvent({ title: "", date: "" });
		}
	};

	return (
		<>
			<h3 className="modal-title">Create New Event</h3>
			<div className="modal-body">
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="title" className="text-right">
							Event Title
						</label>
						<input
							type="text"
							name="event_title"
							placeholder="Event Title"
							value={newEvent.title}
							onChange={(e) =>
								setNewEvent({ ...newEvent, title: e.target.value })
							}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="date" className="text-right">
							Date
						</label>
						<input
							id="date"
							type="date"
							value={newEvent.date}
							onChange={(e) =>
								setNewEvent({ ...newEvent, date: e.target.value })
							}
							className="col-span-3"
						/>
					</div>
				</div>
				<div className="flex justify-end">
					<Button onClick={handleAddEvent} content="Create Event" />
				</div>
			</div>
		</>
	);
}
