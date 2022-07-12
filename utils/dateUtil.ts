import { formatRelative, formatDistance, format } from 'date-fns';
import { th, enUS } from 'date-fns/locale';

export const FORMAT_DATE = 'dd/MM/yyyy'; //25/05/2022
export const FORMAT_DATETIME = 'dd/MM/yyyy HH:mm:ss'; //25/05/2022 17:26:31
export const FORMAT_DATE1 = 'dd MMM yyyy'; //25 JAn 2022
export const FORMAT_DATE2 = 'dd MMMM yyyy'; //25 May 2022
export const FORMAT_DATE3 = 'E dd MMMM yyyy'; //Wed 25 May 2022
export const FORMAT_DATE4 = 'EEEE dd MMMM yyyy'; //Wednesday 25 May 2022
export const FORMAT_DATE5 = 'E dd MMM yyyy'; //Wed 25 Jan 2022
export const FORMAT_DATE6 = 'PPP'; //May 25th, 2022
export const FORMAT_DATE7 = 'PPPppp'; //May 25th, 2022 at 5:26:31 PM GMT+7
export const FORMAT_DATE8 = 'E dd MMMM yyyy HH:mm:ss'; //Wed 25 May 2022 17:26:31
export const FORMAT_DATE9 = 'dd MMMM yyyy HH:mm:ss'; //25 May 2022 17:26:31
export const FORMAT_DATE10 = 'yyyy/MM/dd'; //2022/05/25
export const FORMAT_DATE11 = 'PPPp'; //April 28th, 2022 at 11:30 AM
export const FORMAT_DATE12 = 'PPp'; //Apr 28, 2022, 11:30 AM

export const addDateByDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};
export const getDateNow = () => {
  return new Date();
};
export const getYearNow = () => {
  return new Date().getFullYear();
};
export const convertStringToDate = (dateString: string): Date => {
  return new Date(dateString);
};
export const isDate2GreaterThan = (d1: Date, d2: Date) => {
  return d2.getTime() > d1.getTime();
};

/**
 * formatRelativeFromNow('2022-05-25 17:26:31', locale.value)
 * @param dateString
 * @param locale
 * @returns
 */
export const formatRelativeFromNow = (
  dateString: string | undefined,
  locale: string
) => {
  if (!dateString) {
    return;
  }
  return formatRelative(Date.parse(dateString), new Date(), {
    locale: locale == 'th' ? th : enUS,
  });
};
/**
 * formatDistanceFromNow('2022-05-25 17:26:31', locale.value)
 * @param dateString
 * @param locale
 * @returns
 */
export const formatDistanceFromNow = (dateString: string, locale: string) => {
  return formatDistance(Date.parse(dateString), new Date(), {
    locale: locale == 'th' ? th : enUS,
    addSuffix: true,
  });
};
/**
 * formatDate('2022-05-25 17:26:31', 'dd MMMM yyyy', locale.value)
 * @param dateString
 * @param forMatString
 * @param locale
 * @returns
 */
export const formatDate = (
  dateString: string,
  forMatString: string,
  locale: string | unknown
) => {
  return format(convertStringToDate(dateString), forMatString, {
    locale: locale == 'th' ? th : enUS,
  });
};
export const formatDateBy = (d: Date, forMatString: string) => {
  return format(d, forMatString);
};
