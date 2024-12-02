import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-primary-light dark:bg-darkBg p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
        Task<span className="text-primary-dark dark:text-primary-light">Manager</span>
      </h1>
      <button
        onClick={toggleDarkMode}
        className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow hover:shadow-lg transition-all focus:outline-none"
      >
        {isDarkMode ? (
          <>
            <FiSun className="mr-2" />
            Light Mode
          </>
        ) : (
          <>
            <FiMoon className="mr-2" />
            Dark Mode
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
