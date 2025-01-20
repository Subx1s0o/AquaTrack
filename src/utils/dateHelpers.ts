export const dateHelpers = {
  getMonthDays: (dateString: string): number => {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  },

  formatDateString: (dateString: string, day: number): string => {
    const date = dateString.slice(0, 7);
    return `${date}-${String(day).padStart(2, '0')}`;
  },

  getMonthName: (dateString: string): string => {
    return new Date(dateString).toLocaleString('en-US', { month: 'long' });
  },

  getYearShort: (dateString: string): string => {
    return dateString.slice(0, 3);
  },
};

export const today = new Date();
export const todayDay: number = today.getDate();
export const currentYear: number = today.getFullYear();
export const currentMonth: number = today.getMonth();
