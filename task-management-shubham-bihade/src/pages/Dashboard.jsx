import React from "react";
import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";
import TaskForm from "../components/TaskForm";
import EditTaskModal from "../components/EditTaskModal";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasksPerPage = 6;

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      await API.put(`/tasks/${id}`, updatedTask);

      fetchTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsEditOpen(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  const addTask = async (task) => {
    try {
      await API.post("/tasks", task);
      fetchTasks();
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const toggleStatus = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: task.status === "Pending" ? "Completed" : "Pending",
      });

      fetchTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "All" ? true : task.status === filter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const indexOfLastTask = currentPage * tasksPerPage;

  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {loading ? (
          <Loader />
        ) : (
          <>
            <TaskForm onAdd={addTask} />

            <div className="mb-5">
              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full md:w-96
                  border
                  p-3
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                  "
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {["All", "Pending", "Completed"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-lg transition ${
                    filter === item
                      ? "bg-green-700 text-white font-bold"
                      : "bg-gray-200 font-bold"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={deleteTask}
                  onToggle={toggleStatus}
                  onEdit={openEditModal}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-2 flex-wrap">
              {[...Array(Math.ceil(filteredTasks.length / tasksPerPage))].map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === index + 1
                        ? "bg-teal-700 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ),
              )}
            </div>

            {!loading && filteredTasks.length === 0 && (
              <div className="text-center mt-8">
                <p className="text-gray-500">No Tasks Found</p>
                <p className="text-sm text-gray-400 mt-1">
                  Create your first task to get started
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <EditTaskModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        task={selectedTask}
        onUpdate={editTask}
      />
    </>
  );
};

export default Dashboard;
