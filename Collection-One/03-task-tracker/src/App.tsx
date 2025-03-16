import { useEffect, useRef, useState } from "react";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";
import { useDrop } from "react-dnd";

export interface Task {
  id: number;
  projectName: string;
  taskDescription: string;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [completed, setCompleted] = useState<Task[]>([]);

  const dropRef = useRef<HTMLDivElement | null>(null); // Use useRef

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item: Task) =>
      addToCompleted(item.id, item.projectName, item.taskDescription),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (
    id: number,
    projectName: string,
    taskDescription: string
  ) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [...completed, ...moveTask]);
  };

  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current); // Attach the drop function correctly
    }
  }, [drop]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);

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
        <div className="flex flex-row w-full ">
          <div className="flex-1/2">
            <h2 className="my-6 mx-6 text-xl bg-gray-100 p-4 ">To Do:</h2>
            {taskList.map((task, index) => (
              <ToDo
                key={index}
                index={task.id}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </div>
          <div className="flex-1/2" ref={dropRef}>
            <h2 className="my-6 mx-6 text-xl bg-gray-100 p-4">Completed:</h2>
            {completed.map((task, index) => (
              <ToDo
                key={index}
                index={task.id}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
