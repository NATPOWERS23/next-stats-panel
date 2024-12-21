import { useState, useCallback } from 'react';
import type { UserEvent } from '@/types/event.interface';

export const useEvents = (userId?: string) => {
  const [eventsList, setEventsList] = useState<UserEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!userId) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/events?userId=${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const events = await response.json();
      setEventsList(events);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "An unknown error occurred on fetching events";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  return {
    events: eventsList,
    isLoading,
    error,
    fetchEvents,
  };
};