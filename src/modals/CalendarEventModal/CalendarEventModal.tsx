"use client";

import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEventManagement } from "@/hooks/useEventManagement";

export default function CalendarEventModal() {
	const { user } = useUser();
	const searchParams = useSearchParams();
	const dateParam = searchParams.get("date");
	const eventDate = dateParam ? new Date(dateParam) : new Date();

	const dbUserId = user?.publicMetadata.userId as string | undefined;

	const { newEvent, isLoading, error, handleEventChange, addEvent } =
		useEventManagement(dbUserId);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await addEvent(eventDate);
		if (!error) closeModal();
	};

	const closeModal = () => {
		// TODO: get rid off hard reload, implement mechanism to refetch data on modal submit action close
		window.location.href = "/crm/events";
	};

	return (
		<>
			<h3 className="modal-title">Create New Event</h3>
			<div className="modal-body">
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="title"
							value={newEvent.title}
							onChange={handleEventChange}
							placeholder="Event Title"
							disabled={isLoading}
						/>
						<section className="event-start">
							<input
								type="date"
								name="startDate"
								value={dateParam ? dateParam : newEvent.startDate}
								onChange={handleEventChange}
								disabled={isLoading}
							/>
							<input
								type="time"
								name="startTime"
								value={newEvent.startTime}
								onChange={handleEventChange}
								disabled={isLoading}
							/>
						</section>
						<section className="event-end">
							<input
								type="date"
								name="endDate"
								value={newEvent.endDate}
								onChange={handleEventChange}
								disabled={isLoading}
							/>
							<input
								type="time"
								name="endTime"
								value={newEvent.endTime}
								onChange={handleEventChange}
								disabled={isLoading}
							/>
						</section>
						<textarea
							name="description"
							value={newEvent.description}
							onChange={handleEventChange}
							placeholder="Event Description"
							disabled={isLoading}
						/>
						{error && <div className="error">{error}</div>}
						<button type="submit" disabled={isLoading}>
							{isLoading ? "Adding..." : "Add Event"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
