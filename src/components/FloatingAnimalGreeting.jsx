import React from "react";
import Lottie from "lottie-react";
import tigerAnimation from "../animations/tigerAnimation.json"

const FloatingAnimalGreeting = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl animate-fadeIn">
        {/* Floating Lottie Animal */}
        <Lottie
          animationData={tigerAnimation}
          loop={true}
          className="w-48 h-48 mb-4"
        />

        {/* Greeting Message */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Hello There! 👋
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          Welcome to your Study Planner! Let's make today productive.
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all"
        >
          Let's Go! 🚀
        </button>
      </div>
    </div>
  );
};

export default FloatingAnimalGreeting;
