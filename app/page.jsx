"use client";
import Tasks from "@/components/Tasks";
import { useState } from "react";

const page = () => {
  const [Categories, setCategories] = useState([]);

  return (
    <div>
      <Tasks Categories={Categories} />
    </div>
  );
};

export default page;
