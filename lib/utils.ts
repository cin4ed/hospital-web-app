import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axiosOriginal from 'axios';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const axios = axiosOriginal.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withXSRFToken: true,
  withCredentials: true,
});

export { axios };
