import React from "react";

const TaskCard = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold">{task.title}</h2>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-gray-600 mt-3 text-sm">{task.description}</p>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => onToggle(task)}
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition"
        >
          Toggle
        </button>

        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => {
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this task?"
            );

            if (confirmDelete) {
              onDelete(task._id);
            }
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;