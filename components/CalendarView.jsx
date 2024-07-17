"use client";
import Link from "next/link";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
  );

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <Calendar
        className={"bg-white w-full text-black rounded"}
        onChange={setDate}
        value={date}
      />
      <button
        onClick={() => console.log(formattedDate)}
        className="mt-8 h-10 rounded flex justify-center items-center p-2 bg-teal-600"
      >
        <Link
          href={{
            pathname: "/api/date",
            query: { date: formattedDate },
          }}
        >
          Go To Date
        </Link>
      </button>
    </div>
  );
};

export default CalendarView;
