import CalendarEventModal from "@/modals/CalendarEventModal/CalendarEventModal";
import ConnectTwitchModal from "@/modals/ConnectTwitchModal/ConnectTwitchModal";

export const modals: Record<string, JSX.Element> = {
	connectTwitch: <ConnectTwitchModal />,
	addCalendarEvent: <CalendarEventModal />,
};
