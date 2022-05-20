import './App.css';
import Intro from './components/Intro';
import SideNav from './components/SideNav';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
      </div>

    </div>
  );
}

export default App;
