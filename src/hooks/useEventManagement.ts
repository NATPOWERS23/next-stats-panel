import { useState, useCallback } from 'react';
import type { EventTime, NewEventState, UserEvent } from '@/types/event.interface';
import moment from 'moment';

const parseEventTime = (timeString: string): EventTime => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return {
    hours: hours || moment().hour(),
    minutes: minutes || moment().minute()
  };
};

export const useEventManagement = (userId?: string) => {
  const [events, setEvents] = useState<UserEvent[]>([]);
  const [newEvent, setNewEvent] = useState<NewEventState>({
    title: '',
    startDate: '',
    startTime: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEventChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const addEvent = useCallback(async (overrideStartDate?: Date) => {
    if (!newEvent.title || (!newEvent.startDate && !overrideStartDate)) {
      setError('Title and date are required');
      return null;
    }

    if (!userId) {
      setError('User not authenticated');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const startDate = moment(overrideStartDate) || moment();
      const eventStartTime = parseEventTime(newEvent.startTime);
      startDate.hour(eventStartTime.hours).minute(eventStartTime.minutes);
      const endDate = newEvent.endDate ? moment(newEvent.endDate) : moment(startDate).add(1, 'hour');
      if (newEvent.endTime) {
        const eventEndTime = parseEventTime(newEvent.endTime);
        endDate.hour(eventEndTime.hours).minute(eventEndTime.minutes);
      }

      const eventData = {
        userId: userId,
        title: newEvent.title,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        description: newEvent.description || null,
        // type: 'personal',
        // isAllDay: false
      };

      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const createdEvent = await response.json();

      setEvents(prevEvents => [...prevEvents, createdEvent]);
      setNewEvent({ title: '', startDate: '', startTime: '', description: '' });

      return createdEvent;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [newEvent, userId]);

  const deleteEvent = useCallback(async (eventId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      setEvents(prevEvents => prevEvents.filter(event => event._id !== eventId));
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);


  return {
    events,
    newEvent,
    isLoading,
    error,
    handleEventChange,
    addEvent,
    deleteEvent,
    setEvents,
    setNewEvent
  };
};