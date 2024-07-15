"use client";
import Calendar from "@/components/Calendar";
import Tasks from "@/components/Tasks";
import { useState } from "react";

const page = () => {
  const [Categories, setCategories] = useState([]);

  return (
    <div>
      <Calendar />
    </div>
  );
};

export default page;
