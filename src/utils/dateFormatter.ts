import moment from 'moment';

export function formatEventDate(dateString: string) {
  try {
    const dateTime = moment(dateString);
    if (dateTime.isValid()) {
      return dateTime.format('DD/MM [at] HH:mm');
    }
      return "Invalid Date";
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid Date";
  }
}

export function calculateDuration(startDateString: string, endDateString: string) {
  try {
    const startDate = moment(startDateString);
    const endDate = moment(endDateString);

    if (startDate.isValid() && endDate.isValid()) {
      const duration = moment.duration(endDate.diff(startDate));

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();

      let durationString = "";
      if (days > 0) {
        durationString += `${days}d `;
      }
      if (hours > 0) {
        durationString += `${hours}h `;
      }
      durationString += `${minutes}m`;

      return durationString;
    }
      return "Invalid Start or End Date";
  } catch (error) {
    console.error("Error calculating duration:", error);
    return "Error calculating duration";
  }
}