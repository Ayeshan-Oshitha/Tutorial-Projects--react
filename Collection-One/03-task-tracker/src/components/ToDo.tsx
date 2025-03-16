import React, { useEffect, useRef } from "react";
import EditTask from "./EditTask";

import { Task } from "../App.tsx";
import { useDrag } from "react-dnd";

interface Props {
  index: number;
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDo = ({ index, task, taskList, setTaskList }: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: {
      id: task.id,
      projectName: task.projectName,
      taskDescription: task.taskDescription,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      drag(ref.current); // Attach the drag function to the ref
    }
  }, [drag]);

  const handleDelete = (itemId: number) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col items-start justify-start bg-gray-50 rounded-xl shadow my-4 ml-6 py-4 px-6 w-3/4 max-w-lg ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
      >
        <p className="font-semibold text-lg">{task.projectName}</p>
        <p className="text-base py-2">{task.taskDescription}</p>
        <div className=" w-full flex flex-row justify-end gap-x-5">
          <EditTask
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <button
            className="px-4 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:opacity-70"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
