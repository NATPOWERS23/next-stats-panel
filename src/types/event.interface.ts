
export interface UserEvent {
	_id?: string;
	userId: string;
	title: string;
	description?: string;
	startDate: Date | string;
	endDate?: Date | string;
	// location?: string | null;
	// type?: 'personal' | 'professional' | 'other';
	// isAllDay?: boolean;
	// tags?: string[];
	createdAt?: Date | string;
	updatedAt?: Date | string;
}

export interface NewEventState {
  title: string;
  startDate: string,
  startTime: string,
  endDate?: string,
  endTime?: string,
  description?: string;
}

export interface EventTime {
  hours: number;
  minutes: number;
}
