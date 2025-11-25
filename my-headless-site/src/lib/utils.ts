import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from 'date-fns';
// Tailwind Class Merger (Standard in modern Next.js)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date Formatter (WordPress sends "2025-11-25T10:00:00", we want "Nov 25, 2025")
export function formatDate(dateString: string): string {
  // Parses "2025-11-25T10:00:00" and returns "November 25, 2025"
  return format(parseISO(dateString), 'LLLL d, yyyy');
}

// Absolute URL Helper
// Ensures images always have a full URL if WP sends a relative one
export function absoluteUrl(path: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
}