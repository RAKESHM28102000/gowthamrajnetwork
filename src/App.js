import './App.css';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
// 
// import React, { useState, useEffect } from 'react';
// import Preloader from './components/preloader/Preloader';
import Team from './components/team/Team';
import Sponser from './components/sponser/Sponser';
import SponserPage from './components/sponserPage/SponserPage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    // Simulate a delay, replace this with your actual data fetching or any async operation
    // const delay = setTimeout(() => {
      // setLoading(false);
      // clearTimeout(delay);
    // }, 2000);

    // Clean up the timeout in case the component unmounts before the delay completes
    // return () => clearTimeout(delay);
  // }, []);

  return ( 
   <div>
 <Router>
   <div>
   <Navbar/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/sponsers" element={<Sponser/>} />
       <Route path="/sponserpage" element={<SponserPage/>} />
     </Routes>
   </div>
 </Router>
 </div>)
};



export default App;


{/* <div> */}
{/* {loading ? <Preloader/> :(<div className="App background"> */}
{/* <section> */}
{/* <Navbar/> */}
{/* <Home/> */}
// </section>
{/* <section ><About/></section> */}
{/* <section id='team'><Team/></section> */}
{/* <section><Sponser/></section> */}
{/* <section><SponserPage/></section> */}
// </div>)}
// </div>