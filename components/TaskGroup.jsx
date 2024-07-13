"use client";
import { FaAngleDown } from "react-icons/fa";
import TaskCollapse from "./TaskCollapse";
import TaskToDo from "./TaskToDo";
import { useState } from "react";

const TaskGroup = ({ cat, label }) => {
  const [collapsed, setCollapsed] = useState(1);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  if (collapsed == 1) {
    return (
      <div className="w-full md:w-7/12 flex flex-col">
        <div className="w-full flex">
          <TaskCollapse Category={cat} />
          <span
            className="w-2/12 md:w-1/12 h-24 flex justify-center items-center bg-slate-800 text-4xl text-white"
            onClick={handleCollapsed}
          >
            <button>
              <FaAngleDown />
            </button>
          </span>
        </div>
        <div className="bg-gray-900 text-white flex flex-col text-4xl font-bold">
          <TaskToDo label={label[0]} />
          <TaskToDo label={label[1]} />
          <TaskToDo label={label[2]} />
          <TaskToDo label={label[3]} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full md:w-7/12 flex flex-col">
        <div className="w-full flex">
          <TaskCollapse Category={cat} />
          <span
            className="w-2/12 md:w-1/12 h-24 flex justify-center items-center bg-slate-800 text-4xl text-white"
            onClick={handleCollapsed}
          >
            <button>
              <FaAngleDown />
            </button>
          </span>
        </div>
      </div>
    );
  }
};

export default TaskGroup;
