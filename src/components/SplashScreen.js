import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // Import the CSS file for styling

const SplashScreen = ({ onLoadComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide splash screen after 5 seconds
    const timer = setTimeout(() => {
      setShow(false);
      onLoadComplete(); // Notify parent component that splash screen is complete
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    show && (
      <div className="splash-screen">
        <div className="typing-effect">
          <span className="text">jugeWEB</span>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
