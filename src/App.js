import { useState } from "react";
import { Sun, Moon, Settings, Menu, X } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-3 shadow-md bg-white dark:bg-gray-800">
        {/* Left: Hamburger Menu */}
        <button
          className="text-gray-800 dark:text-white"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Middle: Heading */}
        <h1 className="text-xl font-bold dark:text-white">Study Planner</h1>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-white"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-gray-800 dark:text-white">
            <Settings size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="mt-4 space-y-4 px-4">
          <li>
            <a
              href="#"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:font-bold"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:font-bold"
            >
              Tasks
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:font-bold"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <h2 className="text-2xl font-semibold">
          Welcome to your Study Planner!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Start planning your study schedule here.
        </p>
      </main>
    </div>
  );
}

export default App;
