import { useState } from "react";
import Input from "./components/Input.tsx";
import Board from "./components/Board.tsx";

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);
  console.log(taskList);
  return (
    <>
      <div className="w-[90%] max-w-[1300px]  flex justify-self-center justify-center items-center flex-col gap-y-16 my-12">
        <h1 className="flex justify-self-center  text-3xl font-semibold">
          02 - To Do Board
        </h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-8 md:px-10 lg:px-10">
          {taskList.map((task, index) => (
            <Board
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
