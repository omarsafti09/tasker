"use client";
import CalendarView from "@/components/CalendarView";
import { useState } from "react";

const page = () => {
  const [date, setDate] = useState();

  return (
    <div>
      <CalendarView />
    </div>
  );
};

export default page;
