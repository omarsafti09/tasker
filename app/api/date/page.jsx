"use client";
import Tasks from "@/components/Tasks";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("date");
  console.log(search);
  return (
    <div>
      <Tasks Categories={[{ id: "Cook", tasks: ["cook", "good"] }]} />
    </div>
  );
};

export default page;
