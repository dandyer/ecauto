'use client';
import { useSearchParams } from 'next/navigation';

export default function FormSuccess() {
  const params = useSearchParams();
  if (params.get('sent') !== '1') return null;
  return (
    <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg px-5 py-4 mb-6 text-sm font-medium">
      ✅ Your booking request was sent! We'll confirm your appointment within a few hours. For immediate help, call (916) 517-3286.
    </div>
  );
}
