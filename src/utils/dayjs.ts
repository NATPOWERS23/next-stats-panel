import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import durationPlugin from 'dayjs/plugin/duration';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(durationPlugin);

// Export dayjs as default to mimic moment's import pattern
export default dayjs;

// Export specific utilities for common patterns
export const utcTime = (date?: string | Date) => dayjs.utc(date);
export const duration = dayjs.duration;
export const formatDate = (date: string | Date, format: string = 'YYYY-MM-DD') => dayjs(date).format(format);
export const formatUtcDate = (date: string | Date, format: string = 'YYYY-MM-DD') => dayjs.utc(date).format(format);