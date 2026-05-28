import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !description) {
      return toast.error("All fields are required");
    }

    onAdd({ title, description });

    toast.success("Task Added Successfully...!");

    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full md:w-auto bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
