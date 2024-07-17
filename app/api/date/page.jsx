"use client";
import Tasks from "@/components/Tasks";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [categories, setCategories] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("date");

  return (
    <div>
      <Tasks Categories={[{ id: "Cook", tasks: ["cook", "good"] }]} />
    </div>
  );
};

export default page;
