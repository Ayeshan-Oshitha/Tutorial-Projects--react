import React from "react";

interface Props {
  task: string;
  index: number;
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>; // Alternative way --> (update: (currentList: string[]) => string[]) => void
}

const Board = ({ task, index, taskList, setTaskList }: Props) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) => currentTasks.filter((todo) => todo != task));
  };

  return (
    <>
      <div className="border rounded-lg border-gray-400 px-4 py-4 flex flex-col items-center justify-start ">
        <p className="flex-1">{task}</p>
        <button
          className="px-5 py-1 bg-red-500 mt-4 text-white rounded-lg hover:opacity-75 cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
