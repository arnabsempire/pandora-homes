"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DateRangePicker } from "@/components/date-range-picker";
import { loadStayDates, saveStayDates, type StayDates } from "@/lib/stay-dates";

/** Check-in / check-out search bar. On the home page it goes to the rooms list. */
export function StaySearch({ goToRooms = true }: { goToRooms?: boolean }) {
  const router = useRouter();
  const [dates, setDates] = useState<StayDates>({});

  useEffect(() => setDates(loadStayDates()), []);

  const change = (v: StayDates) => {
    setDates(v);
    saveStayDates(v);
  };

  return (
    <DateRangePicker
      value={dates}
      onChange={change}
      onSearch={() => {
        saveStayDates(dates);
        if (goToRooms) router.push("/rooms");
      }}
    />
  );
}
