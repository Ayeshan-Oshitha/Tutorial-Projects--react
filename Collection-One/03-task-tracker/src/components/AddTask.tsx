import React, { useEffect, useState } from "react";

import { Task } from "../App.tsx";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask = ({ taskList, setTaskList }: Props) => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "projectName") {
      setErrorMessage("");
      setProjectName(value);
    }
    if (name === "projectName" && value === "") {
      setErrorMessage("Enter project name to continue");
    }
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName) {
      setErrorMessage("Enter project name to continue");
      return;
    }
    setTaskList([
      ...taskList,
      { id: Date.now(), projectName, taskDescription },
    ]);
    setProjectName("");
    setTaskDescription("");
    setAddModal(false);
  };

  useEffect(() => {
    console.log("Task list is", taskList);
  }, [taskList]);

  return (
    <div>
      <button
        className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70 cursor-pointer"
        type="button"
        onClick={() => setAddModal(true)}
      >
        +New
      </button>

      {addModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-100 flex items-center justify-center">
            <div className="w-[700px] flex flex-col border rounded-lg shadow p-5 bg-white">
              <div className=" flex flex-row justify-between  ">
                <h3 className="text-xl font-semibold">Add New Task</h3>
                <button
                  className="px-1 text-red-400 float-right text-3xl leading-none font-semibold block cursor-pointer"
                  onClick={() => setAddModal(false)}
                >
                  X
                </button>
              </div>
              <form className="mt-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="project-name"
                    className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2"
                  >
                    Project Name
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded text-base py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                    id="project-name"
                    name="projectName"
                    value={projectName}
                    onChange={handleInput}
                    type="text"
                    placeholder="Project name"
                    required
                  />
                  <p className="text-red-500 text-sm mb-5">{errorMessage}</p>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="task-description"
                    className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2"
                  >
                    Task Description
                  </label>
                  <textarea
                    id="task-description"
                    name="taskDescription"
                    value={taskDescription}
                    onChange={handleInput}
                    rows={5}
                    placeholder="Enter Task Description Here"
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded text-base py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                  ></textarea>
                </div>
              </form>
              <div className="flex justify-end  ">
                <button
                  onClick={handleAdd}
                  className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70 mt-8 cursor-pointer"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddTask;
