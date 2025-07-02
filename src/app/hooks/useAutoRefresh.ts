'use client';

// react
import { useEffect } from 'react';
// api
import { refresh } from '@/app/api/auth';

export function useAutoRefresh(intervalMinutes = 10) {
  useEffect(() => {
    const doRefresh = async () => {
      try {
        await refresh();
      } catch {}
    };
    void doRefresh();
    const timer = setInterval(() => void doRefresh(), intervalMinutes * 60 * 1000);
    return () => clearInterval(timer);
  }, [intervalMinutes]);
}