import './App.css';
import Intro from './components/Intro';
import SideNav from './components/SideNav';
import About from './components/About';
import Experience from './components/Experience';
import SoftwareCreations from './components/SoftwareCreations';
function App() {
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <SoftwareCreations></SoftwareCreations>        
      </div>
      <SideNav />
    </div>
  );
}

export default App;
