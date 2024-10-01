import React, {useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggleBtn = ({ darkMode, setDarkMode }) => {
    useEffect(() => {
        // Update theme on state change
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save theme preference in localStorage
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save theme preference in localStorage
        }
    }, [darkMode]);

    // Handle toggle switch
    const handleToggle = () => {
        setDarkMode(prevMode => !prevMode); // Toggle state
    };

    return (
        <div className="flex flex-col justify-center ml-3">
            <input
                type="checkbox"
                id="light-switch"
                className="light-switch sr-only"
                checked={darkMode} // Bind to darkMode state
                onChange={handleToggle} // Trigger toggle on change
            />
            <label
                htmlFor="light-switch"
                className="relative inline-flex items-center cursor-pointer"
            >
                <span
                    className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ease-in-out ${darkMode ? 'bg-primaryDark' : 'bg-zinc-500'}`}
                >
                    <span
                        className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-6 bg-white' : 'bg-white'}`}
                    ></span>
                </span>
                <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {darkMode ? (
                        <FaMoon className="text-white transition-colors duration-300 ease-in-out" size={18} />
                    ) : (
                        <FaSun className="text-zinc-900 transition-colors duration-300 ease-in-out" size={18} />
                    )}
                </span>
            </label>
        </div>
    );
}

export default DarkModeToggleBtn;