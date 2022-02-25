import logo from './logo.svg';
import './App.css';
import Home from './Component/Home'
import NavBar from './Component/NavBar/NavBar';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import ErrorComponent from './Component/ErrorComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <header className="App-header"> */}
        {/* <Home name="sakthi" no="234"> */}
          {/* <p> Child Paragraph </p> */}
        {/* </Home> */}
        {/* <ClassComponent/> */}
        {/* <FunctionComponent/> */}
        {/* <ErrorComponent/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
