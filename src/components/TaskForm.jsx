import { useState } from 'react';

const TaskForm = ({ onSubmit, task = {} }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: task.id || Date.now(),
      title,
      description,
      dueDate,
      completed: task.completed || false,
    });
  };

  return (
    <form
      className="p-6 bg-lightBg dark:bg-darkBg rounded-lg shadow-lg max-w-3xl w-full mx-auto overflow-hidden"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {task.id ? 'Edit Task' : 'Create New Task'}
      </h2>

      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200 mb-2 text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600"
          placeholder="Task Title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200 mb-2 text-sm font-medium">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600"
          placeholder="Task Description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200 mb-2 text-sm font-medium">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-primary text-white py-3 rounded-md shadow-lg hover:bg-primary-dark transition-all focus:outline-none"
      >
        {task.id ? 'Update Task' : 'Save Task'}
      </button>
    </form>
  );
};

export default TaskForm;
