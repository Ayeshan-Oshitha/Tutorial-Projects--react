import React, { useEffect, useState } from "react";

import { Task } from "../App.tsx";

interface Props {
  index: number;
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const EditTask = ({ index, task, taskList, setTaskList }: Props) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "projectName") setProjectName(value);
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    setTaskList([
      ...taskList,
      { id: Date.now(), projectName, taskDescription },
    ]);
    setEditModal(false);
  };

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
  }, [task]);

  useEffect(() => {
    console.log("Task list is", taskList);
  }, [taskList]);
  return (
    <>
      <button
        className="px-4 py-1 bg-sky-400 text-white rounded-lg cursor-pointer hover:opacity-70"
        type="button"
        onClick={() => setEditModal(true)}
      >
        Edit
      </button>

      {editModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-100 flex items-center justify-center">
            <div className="w-[700px] flex flex-col border rounded-lg shadow p-5 bg-white">
              <div className=" flex flex-row justify-between  ">
                <h3 className="text-xl font-semibold">Edit Task</h3>
                <button
                  className="px-1 text-red-400 float-right text-3xl leading-none font-semibold block cursor-pointer"
                  onClick={() => setEditModal(false)}
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
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded text-base py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="project-name"
                    name="projectName"
                    value={projectName}
                    onChange={handleInput}
                    type="text"
                    placeholder="Project name"
                    required
                  />
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
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70 mt-8 cursor-pointer"
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditTask;
