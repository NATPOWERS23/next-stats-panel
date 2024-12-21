import CustomList from '@/components/CustomList/CustomList';
import type { UserEvent } from '@/types/event.interface';

interface EventsListProps {
  events: UserEvent[];
  isLoading: boolean;
  error: string | null;
}

export const EventsList = ({ events, isLoading, error }: EventsListProps) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formattedEvents = events.map(event => ({
    name: event.title,
    ...event
  }));

  return <CustomList items={formattedEvents} gridList={true} />;
};