import { useState } from "react"; 
import { Sun, Moon, Settings, Menu, X } from "lucide-react"; //icon library
import Lottie from "lottie-react"; //component to render .json animation files
import wavingHand from "../animations/wavingHand.json"
import tigerAnimation from "../animations/tigerAnimation.json"
import FloatingAnimalGreeting from "../components/FloatingAnimalGreeting";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const affirmations = [
  "You are capable of amazing things! 🌟",
  "Believe in yourself, you've got this! 💪",
  "Every step counts, keep going! 🐾",
  "You're smarter than you think! 🧠",
  "Stay positive, work hard, make it happen! ✨",
];
const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];


  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Show Greeting Modal */}
      {showGreeting && (
        <FloatingAnimalGreeting onClose={() => setShowGreeting(false)} />
      )}
      <div className={showGreeting ? "blur-sm pointer-events-none" : ""}>
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
          <main
            className={`flex-1 transition-all duration-300 ease-in-out ${
              sidebarOpen ? "ml-64" : "ml-16"
            } p-6`}
          >
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              <Lottie
               animationData={wavingHand}
                loop={true}
                className="w-12 h-12" // size of the hand animation
              />
              <span>Welcome to your Study Planner!</span>
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300 ml-20">
              Start planning your study schedule here.
            </p>
            {/* Tiger Animation Below the Paragraph */}
            {/* <div className="mt-10 flex flex-col items-center">
              <Lottie
                animationData={tigerAnimation}
                loop={true}
                className="w-64 h-64"
              /> */}

              {/* Random Affirmation Text */}
              {/* <p className="text-xl font-semibold text-center mt-4 animate-fadeIn">
                {randomAffirmation}
              </p>
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
