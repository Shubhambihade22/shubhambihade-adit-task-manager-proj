import { useState, useEffect } from "react";

const EditTaskModal = ({ isOpen, onClose, task, onUpdate }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title,
        description: task.description,
      });
    }
  }, [task]);

  if (!isOpen) return null;

  const submitHandler = (e) => {
    e.preventDefault();

    onUpdate(task._id, form);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>

        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg h-28"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-teal-600 text-white py-3 rounded-lg"
            >
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
