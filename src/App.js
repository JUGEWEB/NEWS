import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen' //Import the SplashScreen component
import InfoNews from './components/infoNews';
import BinegeInfo from './components/binegeInfo';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };
  return (
    <div className="app-container">
      {loading ? (
        <SplashScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div>
     < InfoNews />

     <BinegeInfo/>
     </div>

    )}
    </div>
  );
};

export default App;
