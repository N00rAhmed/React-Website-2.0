import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Intro from './components/Intro';
import SideNav from './components/SideNav';
import About from './components/About';
import Experience from './components/Experience';
import Cards from './components/Cards';

import Grid from './components/Grid';

import SoftwareCreations from './components/SoftwareCreations';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <Experience></Experience>

        {/* <Router>
    <Cards />
  </Router> */}

        <SoftwareCreations></SoftwareCreations>

        <Grid></Grid>
        <Footer></Footer>
      </div>
      <SideNav />
    </div>
  );
}

export default App;
