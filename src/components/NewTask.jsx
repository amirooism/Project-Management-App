import { useState } from "react";

export default function NewTask({ onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handlChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    //in this function we want to forward the value to the app component Task array and then we want to rest it
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex  items-center gap-4 ">
      <input
        onChange={handlChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
      <h2></h2>
    </div>
  );
}
