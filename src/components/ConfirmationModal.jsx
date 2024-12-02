const ConfirmationModal = ({ isOpen, onClose, onConfirm, taskName }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg mx-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Are you sure you want to delete the task "{taskName}"?
          </h3>
          <div className="flex justify-center gap-7 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationModal;
  