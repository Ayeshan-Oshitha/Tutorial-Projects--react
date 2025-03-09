import React, { useState } from "react";

interface Props {
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>; // Alternative way --> (update: (currentList: string[]) => string[]) => void
}

const Input = ({ taskList, setTaskList }: Props) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  //   console.log(input);
  return (
    <>
      <form>
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 items-center">
          <input
            className="border  rounded-lg px-2 h-9 w-64 text-gray-500"
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="px-7 py-1 text-white bg-purple-400 rounded-lg text-lg hover:opacity-75 font-medium cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
