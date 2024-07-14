"use client";
import React from "react";
import { useState } from "react";

const AddForm = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [recurrent, setRecurrent] = useState(false);
  const handleChange = () => {
    setRecurrent(!recurrent);
  };
  const log = (event) => {
    event.preventDefault();
    console.log(task, recurrent);
  };

  return (
    <div className="flex w-full justify-center items-center">
      <form className="flex flex-col md:w-1/2">
        <input
          type="text"
          placeholder="Task..."
          className="h-8 mb-4 text-black font-bold pl-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category..."
          className="h-8 mb-4 text-black font-bold pl-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="flex">
          <input
            type="checkbox"
            className="mr-4"
            checked={recurrent}
            onChange={handleChange}
          />
          <h4>Recurrent</h4>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="w-1/2 h-8 flex justify-center items-center bg-red-600"
            onClick={log}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
