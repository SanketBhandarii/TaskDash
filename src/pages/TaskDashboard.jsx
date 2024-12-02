import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  selectAllTasks,
  selectCompletedTasks,
  selectPendingTasks,
  selectOverdueTasks,
} from '../features/tasks/tasksSlice';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import ConfirmationModal from '../components/ConfirmationModal';

const TasksDashboard = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const tasks = useSelector((state) => {
    if (filter === 'All') return selectAllTasks(state);
    if (filter === 'Completed') return selectCompletedTasks(state);
    if (filter === 'Pending') return selectPendingTasks(state);
    if (filter === 'Overdue') return selectOverdueTasks(state);
    return selectAllTasks(state);
  });

  const handleAddTask = (task) => {
    dispatch(addTask(task));
    setShowForm(false);
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete));
      setIsModalOpen(false); // Close the modal
      setTaskToDelete(null); // Clear task to delete
    }
  };

  const handleOpenModal = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg text-gray-800 dark:text-gray-200">
      <Header />
      <main className="p-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 bg-primary text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-800 transition-all duration-200"
        >
          {showForm ? 'Close Form' : 'Add Task'}
        </button>
        {showForm && <TaskForm onSubmit={handleAddTask} />}

        <FilterBar currentFilter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tasks.length === 0 ? (
            <p className="text-center col-span-full text-xl text-gray-500">No tasks available</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{task.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{task.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Due: {task.dueDate}</p>

                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => dispatch(toggleTaskCompletion(task.id))}
                    className={`px-5 py-2 rounded-md text-white focus:outline-none ${
                      task.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    {task.completed ? 'Completed' : 'Mark as Completed'}
                  </button>

                  <button
                    onClick={() => handleOpenModal(task.id)}
                    className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Modal for Confirmation */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteTask}
        taskName={tasks.find((task) => task.id === taskToDelete)?.title || ''}
      />
    </div>
  );
};

export default TasksDashboard;
