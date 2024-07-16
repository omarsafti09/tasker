import "@/components/components.css";

const TaskToDo = ({ label }) => {
  return (
    <div className="flex w-full h-24 items-center pl-8 border-b">
      <input type="checkbox" name="done" className="mr-4 w-8 h-8" />
      <h2>{label}</h2>
    </div>
  );
};

export default TaskToDo;
