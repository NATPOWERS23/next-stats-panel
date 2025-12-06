export interface UserEvent {
  _id?: string;
  userId: string;
  title: string;
  description?: string | null;
  startDate: Date;
  endDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EventTime {
  hours: number;
  minutes: number;
}

export interface NewEventState {
  title: string;
  startDate: string;
  startTime: string;
  endDate?: string;
  endTime?: string;
  description?: string;
}
