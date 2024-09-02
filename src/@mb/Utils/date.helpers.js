import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import calendar from "dayjs/plugin/calendar";
import isBetween from "dayjs/plugin/isBetween";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(calendar);
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

const utils = {
  isEmpty: (value) => {
    if (typeof obj == "number") return false;
    if (value == null || value === undefined) return true;
    if (typeof value === "string" || Array.isArray(value))
      return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
  },
};

const formats = {
  Full: "YYYY-MM-DDTHH:mm:ss.sss",
  FullZ: "YYYY-MM-DDTHH:mm:ss.sss Z",
  DateMonthYear1: "DD/MMM/YY",
  DateMonthYear2: "DD/MM/YY",
  DateMonthYear4: "DD/MM/YYYY",
  YearMonthDateDashed: "YYYY-MM-DD",
  DateMonthYearDashed: "DD-MMM-YYYY",
  MonthDateYear2: "MM/DD/YY",
  MonthDateYear4: "MM/DD/YYYY",
  MonthYear: "MMM-YYYY",
  DateTime: "DD/MM/YY, h:mm A",
  Time: "LT",
  Time24: "HH:mm",
};

const allFormatsList = [...Object.values(formats)];

const dateFormatList = [formats.DateMonthYear4, formats.DateMonthYear2];

const sessionStartEndDates = (date) => {
  const whichHalf = dayjs(date).month() / 6;
  const start = dayjs(date)
    .subtract(whichHalf == 0 ? 1 : 0, "year")
    .startOf("year")
    .add(180, "day")
    .startOf("month");
  const end = dayjs(date)
    .add(whichHalf, "year")
    .startOf("year")
    .add(150, "day")
    .endOf("month");
  return { start, end };
};

const sessionDates = {
  current: sessionStartEndDates(),
  lastSession: sessionStartEndDates(dayjs().startOf("year")),
  beforeLastSession: sessionStartEndDates(
    dayjs().subtract(1, "year").startOf("year")
  ),
};

const toShortDateString = (date = dayjs(), format = formats.DateMonthYear4) => {
  if (utils.isEmpty(date)) return "";
  let d = dayjs(date, allFormatsList);
  return d.format(format);
};

const toShortDateTimeString = (date) => {
  if (utils.isEmpty(date)) return "";
  let d = dayjs(date);
  return d.format(formats.DateTime);
};

const toTimeString = (
  date = dayjs(),
  format = formats.Time,
  nullString = ""
) => {
  if (utils.isEmpty(date)) return nullString;
  return dayjs(`${date}+0500`, [`${formats.Full} Z`, formats.Time24]).format(
    format
  );
};

const toLocal = (date = dayjs()) => dayjs.utc(date).local();

const toMomentDate = (dateString, utc = true, format = "") =>
  utils.isEmpty(dateString)
    ? utc
      ? dayjs.utc()
      : toLocal()
    : utils.isEmpty(format)
    ? utc
      ? dayjs.utc(dateString)
      : toLocal(dateString)
    : utc
    ? dayjs.utc(dateString, format)
    : dayjs(dateString, format);

const toMomentCalendar = (date) => {
  if (utils.isEmpty(date)) return "Never";
  let d = dayjs(date);
  return d.calendar(null, {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] ddd [at] LT",
    sameElse: "DD-MM-YY LT",
  });
};

const toMonthYearString = (date) =>
  utils.isEmpty(date) ? "" : dayjs(date).format(formats.MonthYear);

const isPastUtc = (date, from = dayjs().utc(), granularity = "day") =>
  dayjs.utc(from).isAfter(dayjs.utc(date), granularity);

const isPast = (date, from = dayjs(), granularity = "day", utc = true) =>
  utc ? isPastUtc(date, from, granularity) : from.isAfter(date, granularity);

const isBetweenDates = (date, before, after) =>
  dayjs(date).isBetween(before, after, "minute", "[]");

const toISOString = (date, keepOffset = true) =>
  dayjs(date).toISOString(keepOffset);

const today = () => dayjs().startOf("day");

const yesterday = () => dayjs().subtract(1, "days").startOf("day");

const sort = (array, field) =>
  array.sort((a, b) => new Date(a[field]) - new Date(b[field]));

const isLastSession = (date) =>
  dayjs(date).isBetween(
    sessionDates.lastSession.start,
    sessionDates.lastSession.end
  );

const isBeforeLastSession = (date) =>
  dayjs(date).isBetween(
    sessionDates.beforeLastSession.start,
    sessionDates.beforeLastSession.end
  );

const isCurrentSession = (date) =>
  dayjs(date).isBetween(sessionDates.current.start, sessionDates.current.end);

const getDateRange = (start, end) => {
  const s = dayjs.isDayjs(start) ? start : dayjs(start);
  const e = dayjs.isDayjs(end) ? end : dayjs(end);
  return [...Array(1 + e.diff(s, "days")).keys()].map((n) =>
    dayjs(s).add(n, "days").format(formats.DateMonthYear4)
  );
};

const getShortMonths = () => dayjs.monthsShort();

const schoolSessionRange = (date) => {
  const ld = toLocal(date);
  const ldy = ld.year();

  const year =
    ld.month() < 7
      ? {
          s: ldy - 1,
          e: ldy,
        }
      : {
          s: ldy,
          e: ldy + 1,
        };
  return {
    start: toLocal(dayjs(`01/08/${year.s}`, formats.DateMonthYear4)),
    end: toLocal(dayjs(`31/7/${year.e}`, formats.DateMonthYear4)),
  };
};

const getYear = (date = dayjs()) => {
  if (utils.isEmpty(date)) return "";
  let d = dayjs(date);
  return d.year();
};

const getTimeDifference = (d1, d2) => {
  const date1 = dayjs(d1.dateString, d1.format);
  const date2 = dayjs(d2.dateString, d2.format);
  date1.set("date", 0);
  date2.set("date", 0);
  const diff = dayjs.duration(date1.diff(date2));
  return diff < 0 ? `${diff.humanize()} early` : `${diff.humanize()} late`;
};

const getTimeDifference2 = (d1, d2) => {
  const { hours, minutes, seconds } = dayjs(
    d1.dateString,
    d1.format
  ).toObject();
  const t1 = dayjs({ hour: hours, minute: minutes, seconds: seconds });
  const t2 = dayjs(d2.dateString, d2.format);
  if (!dayjs.isDayjs(t1) || !dayjs.isDayjs(t2)) return "-";
  const diff = t1.diff(t2, "minutes");
  return diff;
};

const toHoursAndMinutes = (totalMinutes) => {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h > 0 ? `${h}h ` : ``}${m > 0 ? `${m}m` : ""}`;
};

export const DateTimeHelper = {
  formats,
  dateFormatList,
  toShortDateString,
  toShortDateTimeString,
  toTimeString,
  toMomentDate,
  toMomentCalendar,
  toMonthYearString,
  isPast,
  isBetween: isBetweenDates,
  toISOString,
  today,
  yesterday,
  sort,
  isLastSession,
  isBeforeLastSession,
  isCurrentSession,
  toLocal,
  getDateRange,
  schoolSessionRange,
  getShortMonths,
  getYear,
  getTimeDifference,
  getTimeDifference2,
  toHoursAndMinutes,
};
