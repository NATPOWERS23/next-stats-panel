"use client";

import { useCallback, useEffect, useState } from "react";
import { Protect, useUser } from "@clerk/nextjs";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";
import CalendarEventWidget from "@/features/crm/CalendarEventWidget/CalendarEventWidget";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import type { UserEvent } from "@/types/event.interface";

export default function Events() {
	const { user } = useUser();
	const pathname = usePathname();
	const router = useRouter();
	const dbUserId = user?.publicMetadata.userId as string | undefined;
	const [eventsList, setEventsList] = useState<UserEvent[]>([]);
	const [eventsLoading, setEventsLoading] = useState(false);
	const [fetchEventsError, setFetchEventsError] = useState<string | null>(null);

	useEffect(() => {
		fetchUserEvents();
	}, []);

	const fetchUserEvents = useCallback(async () => {
		setEventsLoading(true);
		setFetchEventsError(null);

		try {
			const response = await fetch(`/api/events?userId=${dbUserId}`);

			if (!response.ok) {
				throw new Error("Failed to fetch events");
			}

			const allEvents = await response.json();
			setEventsList(allEvents);
		} catch (err) {
			const errorMessage =
				err instanceof Error
					? err.message
					: "An unknown error occurred on fetching events";
			setFetchEventsError(errorMessage);
		} finally {
			setEventsLoading(false);
		}
	}, [dbUserId]);

	const setComingEvents = (events: UserEvent[]) =>
		events.map((event) => ({ name: event.title, ...event }));

	const ComingSoonBody = eventsLoading ? (
		<div>Loading...</div>
	) : fetchEventsError ? (
		<div>{fetchEventsError}</div>
	) : (
		<CustomList items={setComingEvents(eventsList)} gridList={true} />
	);

	const handleAddEvent = (arg: { dateStr: string }) => {
		router.push(
			`${pathname}?modal=addCalendarEvent&show=true${arg.dateStr ? `&date=${arg.dateStr}` : ""}`,
		);
	};

	const pageContent = (
		<>
			<PageTitle title="Events Calendar" />
			<CalendarEventWidget events={eventsList} />
			<Card title="Coming Soon" body={ComingSoonBody} />
			<Button content="+ Add Event" onClick={handleAddEvent} />
		</>
	);

	return (
		<>
			<Protect
				role={roleList[ROLE.channel_owner]}
				fallback={ERRORS.NO_ACCESS_CRM}
			>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
