import moment from 'moment';
import { generateDatesOfCurrentMonth, timeLabels } from './chartApiDataFormatter';

describe('Chart API utility Functions', () => {

  describe('generateDatesOfCurrentMonth', () => {
    it('should generate dates for the current month (default behavior)', () => {
      const dates = generateDatesOfCurrentMonth();
  
      expect(dates.length).toBeGreaterThan(0);
  
      const today = moment().format('MM-DD');
      expect(dates.some(date => date.format('MM-DD') === today)).toBe(true);
    });
  })

  describe('timeLabels', () => {
    it('should contain 24 hour labels', () => {
      expect(timeLabels.length).toBe(24);
      expect(timeLabels[0]).toBe('00');
      expect(timeLabels[23]).toBe('23');
    });
  });
});