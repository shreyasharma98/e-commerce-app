import React, { useState,useEffect } from "react";

const Modal = ({ children }) => {
  const [progress, setProgress] = useState(0);

  // Simulate progress completion
  useEffect(() => {
    const timeId = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(timeId);
          return prev;
        }
      });
    }, 20);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80">
        {children}
        <div className="bg-gray-200 mt-4 h-4 rounded-md overflow-hidden">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
