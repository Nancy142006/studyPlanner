import React from "react";
import Lottie from "lottie-react";
import tigerAnimation from "../animations/tigerAnimation.json";

const FloatingAnimalGreeting = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose} // Click anywhere to continue
    >
      <div className="relative flex items-center space-x-6">
        {/* Floating Tiger */}
        <Lottie
          animationData={tigerAnimation}
          loop={true}
          className="w-64 h-64 animate-float"
        />

        {/* Comic Bubble on Right */}
        <div className="relative">
          {/* Speech bubble shape */}
          <div className="relative px-6 py-4 rounded-3xl border-4 border-white dark:border-gray-200">
            {/* Typing text */}
            <p className="typing-text text-white text-lg font-semibold dark:text-gray-200">
              Hello there! 🐯
              <br />
              Welcome to your Study Planner!
            </p>

            {/* Tail of the bubble */}
            <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[20px] border-t-transparent border-b-transparent border-r-white dark:border-r-gray-200"></div>
          </div>
        </div>

        {/* Click to continue message */}
        <div className="absolute bottom-10 text-center w-full">
          <p className="text-sm text-gray-100 dark:text-gray-300 animate-pulse">
            Click anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingAnimalGreeting;
