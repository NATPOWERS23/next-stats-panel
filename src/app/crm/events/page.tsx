"use client";

import { useState } from "react";
import { Protect } from "@clerk/nextjs";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";
import CalendarEventWidget from "./CalendarEventWidget/CalendarEventWidget";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

export default function Events() {
	const pathname = usePathname();
	const router = useRouter();

	const [events, setEvents] = useState([
		{ title: "Team Meeting", date: "2024-02-15", id: "1" },
		{ title: "Product Launch", date: "2024-03-01", id: "2" },
	]);

	const ComingSoonBody = (
		<CustomList
			items={events.map((event) => ({ name: event.title, ...event }))}
		/>
	);

	const handleAddEvent = (arg: { dateStr: string }) => {
		router.push(
			`${pathname}?modal=addCalendarEvent&show=true&date=${arg.dateStr}`,
		);
	};

	const pageContent = (
		<>
			<PageTitle title="Events Calendar" />
			<CalendarEventWidget events={events} />
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
