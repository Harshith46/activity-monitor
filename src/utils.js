import {format} from 'date-fns';

export const getCurrentDate = date => {
  return format(date, 'MMM d yyyy');
};

export const generateMonthWithDate = date => {
  return format(date, 'MMM d');
};
