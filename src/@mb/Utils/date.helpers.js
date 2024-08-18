// import moment from "moment";
import { utils } from "..";
const moment = {}

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
  const whichHalf = ~~(moment(date).month() / 6);
  const start = moment(date)
    .subtract(whichHalf == 0 ? 1 : 0, "y")
    .startOf("year")
    .add(180, "day")
    .startOf("month");
  const end = moment(date)
    .add(whichHalf, "y")
    .startOf("year")
    .add(150, "day")
    .endOf("month");
  return { start, end };
};
const sessionDates = {
  current: sessionStartEndDates(),
  lastSession: sessionStartEndDates(moment().startOf("year")),
  beforeLastSession: sessionStartEndDates(
    moment().subtract(1, "year").startOf("year")
  ),
};
const toShortDateString = (
  date = moment(),
  format = formats.DateMonthYear4
) => {
  if (utils.isEmpty(date)) return "";
  let d = new moment(date, allFormatsList);
  return d.format(format);
};
const toShortDateTimeString = (date) => {
  if (utils.isEmpty(date)) return "";
  let d = new moment(date);
  return d.format(formats.DateTime);
};
const toTimeString = (
  date = moment(),
  format = formats.Time,
  nullString = ""
) => {
  if (utils.isEmpty(date)) return nullString;
  return new moment(`${date}+0500`, [
    `${formats.Full} Z`,
    formats.Time24,
  ]).format(format);
};

const toLocal = (date = moment()) => moment.utc(date).local();

const toMomentDate = (dateString, utc = true, format = "") =>
  utils.isEmpty(dateString)
    ? utc
      ? moment.utc()
      : toLocal()
    : utils.isEmpty(format)
    ? utc
      ? moment.utc(dateString)
      : toLocal(dateString)
    : utc
    ? moment.utc(dateString, format)
    : moment(dateString, format);

const toMomentCalendar = (date) => {
  if (utils.isEmpty(date)) return "Never";
  let d = new moment(date);
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
  utils.isEmpty(date) ? "" : new moment(date).format(formats.MonthYear);

const isPastUtc = (date, from = moment().utc(), granularity = "day") =>
  moment.utc(from).isAfter(moment.utc(date), granularity);

const isPast = (date, from = moment(), granularity = "day", utc = true) =>
  utc ? isPastUtc(date, from, granularity) : from.isAfter(date, granularity);

const isBetween = (date, before, after) =>
  moment(date).isBetween(before, after, "minute", "[]");

const toISOString = (date, keepOffset = true) =>
  moment(date).toISOString(keepOffset);
const today = () => moment().startOf("day");
const yesterday = () => moment().subtract(1, "days").startOf("day");

const sort = (array, field) =>
  array.sort((a, b) => new Date(a[field]) - new Date(b[field]));

const isLastSession = (date) =>
  moment(date).isBetween(
    sessionDates.lastSession.start,
    sessionDates.lastSession.end
  );

const isBeforeLastSession = (date) =>
  moment(date).isBetween(
    sessionDates.beforeLastSession.start,
    sessionDates.beforeLastSession.end
  );
const isCurrentSession = (date) =>
  moment(date).isBetween(sessionDates.current.start, sessionDates.current.end);

const getDateRange = (start, end) => {
  const s = moment.isMoment(start) ? start : moment(start);
  const e = moment.isMoment(end) ? end : moment(end);
  return [...Array(1 + e.diff(s, "days")).keys()].map((n) =>
    moment(s).add(n, "days").format(formats.DateMonthYear4)
  );
};

const getShortMonths = () => moment.monthsShort();

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
    start: toLocal(new moment(`01/08/${year.s}`, formats.DateMonthYear4)),
    end: toLocal(new moment(`31/7/${year.e}`, formats.DateMonthYear4)),
  };
};

const getYear = (date = moment()) => {
  if (utils.isEmpty(date)) return "";
  let d = new moment(date);
  return d.year();
};

const getTimeDifference = (d1, d2) => {
  const date1 = moment(d1.dateString, d1.format);
  const date2 = moment(d2.dateString, d2.format);
  date1.set("date", 0);
  date2.set("date", 0);
  const diff = moment.duration(date1.diff(date2));
  return diff < 0 ? `${diff.humanize()} early` : `${diff.humanize()} late`;
};

const getTimeDifference2 = (d1, d2) => {
  const { hours, minutes, seconds } = moment(
    d1.dateString,
    d1.format
  ).toObject();
  const t1 = moment({ hour: hours, minute: minutes, seconds: seconds });
  const t2 = moment(d2.dateString, d2.format);
  if (!moment.isMoment(t1) || !moment.isMoment(t2)) return "-";
  const diff = t1.diff(t2, "minutes");
  return diff;
  //return diff < -60 || diff > -60 ? diff / 60 : diff;

  //return diff < 0 ? `${diff.humanize()} early` : `${diff.humanize()} late`;
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
  isBetween,
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
