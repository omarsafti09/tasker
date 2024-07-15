import TaskGroup from "./TaskGroup";

const Tasks = ({ Categories }) => {
  return (
    <div className="flex flex-col mt-24 items-center">
      {Categories.map((task) => (
        <TaskGroup Category={task.id} labels={task.tasks} />
      ))}
    </div>
  );
};

export default Tasks;
