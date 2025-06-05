import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Supaya tidak ketutupan navbar */}
        <Home />
      </div>
    </>
  );
}

export default App;
