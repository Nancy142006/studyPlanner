import { useState } from "react";
import { Sun, Moon, Settings, Menu } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        <button className="text-gray-800 dark:text-white">
          <Menu size={24} />
        </button>

        {/* Middle: Heading */}
        <h1 className="text-xl font-bold dark:text-white">Study Planner</h1>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-white"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Settings Icon */}
          <button className="text-gray-800 dark:text-white">
            <Settings size={24} />
          </button>
        </div>
      </nav>

      {/* Main content */}
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
