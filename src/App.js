import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Intro from './components/Intro';
import SideNav from './components/SideNav';
import About from './components/About';
// import Experience from './components/Experience';
import NewExperience from './components/NewExperience';


import SoftwareCreations from './components/SoftwareCreations';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <NewExperience />
        {/* <Experience></Experience> */}
        <SoftwareCreations></SoftwareCreations>
        <Footer></Footer>
      </div>
      <SideNav />
    </div>
  );
}

export default App;
