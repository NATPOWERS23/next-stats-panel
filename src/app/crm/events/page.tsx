"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Protect, useUser } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";
import { EventsList } from "@/features/crm/EventsList/EventsList";
import { useEvents } from "@/hooks/useEvents";
import CalendarEventWidget from "@/features/crm/CalendarEventWidget/CalendarEventWidget";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";


export default function Events() {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const dbUserId = user?.publicMetadata.userId as string | undefined;

  const {
    events,
    isLoading,
    error,
    fetchEvents
  } = useEvents(dbUserId);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleAddEvent = (info: { dateStr: string }) => {
    router.push(
      `${pathname}?modal=addCalendarEvent&show=true${info.dateStr ? `&date=${info.dateStr}` : ""
      }`
    );
  };

  const pageContent = (
    <>
      <PageTitle title="Events Calendar" />
      <CalendarEventWidget events={events} />
      <Card
        title="Coming Soon"
        body={
          <EventsList
            events={events}
            isLoading={isLoading}
            error={error}
          />
        }
      />
      <Button content="+ Add Event" onClick={handleAddEvent} />
    </>
  );

  return (
    <Protect
      role={roleList[ROLE.channel_owner]}
      fallback={ERRORS.NO_ACCESS_CRM}
    >
      <PageWrapper content={pageContent} />
    </Protect>
  );
}
