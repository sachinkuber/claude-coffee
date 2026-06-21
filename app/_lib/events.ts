export type WeeklyEvent = {
  name: string;
  weekday: number; // 0 = Sunday ... 6 = Saturday
  hour: number; // 24h
  minute: number;
};

export const WEEKLY_EVENTS: WeeklyEvent[] = [
  { name: "Open Mic Night", weekday: 5, hour: 19, minute: 0 }, // Friday
  { name: "Coffee Tasting", weekday: 6, hour: 10, minute: 0 }, // Saturday
];

export function nextOccurrence(event: WeeklyEvent, from: Date = new Date()): Date {
  const result = new Date(from);
  result.setHours(event.hour, event.minute, 0, 0);

  let dayDiff = event.weekday - from.getDay();
  if (dayDiff < 0 || (dayDiff === 0 && result <= from)) {
    dayDiff += 7;
  }
  result.setDate(from.getDate() + dayDiff);
  return result;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
});

export function formatEventOccurrence(date: Date): string {
  return `${dateFormatter.format(date)} · ${timeFormatter.format(date)}`;
}

export type UpcomingEvent = {
  name: string;
  date: Date;
  label: string;
};

export function getUpcomingEvents(from: Date = new Date()): UpcomingEvent[] {
  return WEEKLY_EVENTS.map((event) => {
    const date = nextOccurrence(event, from);
    return { name: event.name, date, label: formatEventOccurrence(date) };
  }).sort((a, b) => a.date.getTime() - b.date.getTime());
}
