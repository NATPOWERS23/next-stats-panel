import type React from "react";
import CalendarEventModal from "@/modals/CalendarEventModal/CalendarEventModal";
import ConnectTwitchModal from "@/modals/ConnectTwitchModal/ConnectTwitchModal";

export const modals: Record<string, React.JSX.Element> = {
	connectTwitch: <ConnectTwitchModal />,
	addCalendarEvent: <CalendarEventModal />,
};
