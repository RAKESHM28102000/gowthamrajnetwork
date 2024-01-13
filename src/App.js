import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import React, { useState, useEffect } from 'react';
import Preloader from './components/preloader/Preloader';
import Team from './components/team/Team';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay, replace this with your actual data fetching or any async operation
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 2000);

    // Clean up the timeout in case the component unmounts before the delay completes
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? <Preloader/> :(<div className="App background">
 <section>
 <Navbar/>
 <Home/>
 </section>
 <section id='about'><About/></section>
 <section id='team'><Team/></section>
 </div>)}
    </div>
  );
};



export default App;
