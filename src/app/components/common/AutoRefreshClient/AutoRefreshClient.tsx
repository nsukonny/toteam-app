'use client';

import { useAutoRefresh } from '@/app/hooks/useAutoRefresh';

export default function AutoRefreshClient() {
  useAutoRefresh();
  return null;
} 