import React from "react";
import EditTask from "./EditTask";

import { Task } from "../App.tsx";

interface Props {
  index: number;
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDo = ({ index, task, taskList, setTaskList }: Props) => {
  const handleDelete = (itemId: number) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => todo.id !== itemId)
    );
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start bg-gray-50 rounded-xl shadow my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
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
