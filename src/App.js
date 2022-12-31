import Nav from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About"
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:"black"}}>
      <Nav />
     <Home />
     <About />
      </div>
    

    </div>
  );
}

export default App;
