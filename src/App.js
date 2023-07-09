import './App.css';
import ClassCard from './components/ClassCard';
import FunctionCard from './components/FunctionCard';
import LogoReactJs from './assets/images/reactJs.png';
import LogoNextJs from './assets/images/nextJs.png';

function App() {
  return (
    <div className="App">
      <div className='appCard'>
        <FunctionCard title=" I am card component 1 " description="These data passed from my parent" logo={LogoReactJs} />
        <ClassCard title=" I am class component 1 " description="These data passed from my parent I am class two" logo={LogoNextJs} />
        <FunctionCard title=" I am card component 2 " description="These data passed from my parent" logo={LogoReactJs} />
        <ClassCard title=" I am class component 2 " description="These data passed from my parent I am class two" logo={LogoNextJs} />
      </div>
    </div>
  );
}

export default App;

// I am card component 1
// These data passed from my parent

// 1am class component 2
// These data passed from my parent I
// am class two
