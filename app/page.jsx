import TaskGroup from "@/components/TaskGroup";
import React from "react";

const page = () => {
  return (
    <div>
      <TaskGroup cat={"Recurring"} label={["shit", "hello", "a", "b"]} />
    </div>
  );
};

export default page;
