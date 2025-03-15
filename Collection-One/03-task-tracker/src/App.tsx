import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

export interface Task {
  id: number;
  projectName: string;
  taskDescription: string;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <>
      <div className="w-[90%] max-w-[1400px]  justify-self-center">
        <h1 className="text-2xl font-semibold py-4 pl-6">
          03 - The Task Tracker{" "}
        </h1>
        <p className="text-lg pl-6">Hi there!</p>
        <div className="flex flex-row pl-6 text-lg mt-2">
          <p className="text-lg ">Click</p>
          <AddTask taskList={taskList} setTaskList={setTaskList} />
          <p>to add a new task</p>
        </div>
        <div>
          <h2 className="my-6 mx-6 text-xl bg-gray-100 p-4 ">To Do:</h2>
          {taskList.map((task, index) => (
            <ToDo
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
