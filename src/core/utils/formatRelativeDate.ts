import { formatDistanceToNow, format } from "date-fns";

export const formatRelativeDate = (date: string | Date): string => {
  const dateObj = new Date(date);
  const now = new Date();

  // is today
  if (now.toDateString() === dateObj.toDateString()) {
    return formatDistanceToNow(dateObj, { addSuffix: true });
  }

  // is yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  if (yesterday.toDateString() === dateObj.toDateString()) {
    return "Yesterday";
  }

  // within this week
  const weekAgo = new Date();
  weekAgo.setDate(now.getDate() - 7);
  if (dateObj > weekAgo) {
    return format(dateObj, "EEEE"); // Returns day of the week
  }

  // else, formatted date
  return format(dateObj, "MMMM d, yyyy");
};
