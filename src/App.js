import Nav from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact"
import './App.css';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div className="App">
       <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='255, 46, 99'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
                />
      <div style={{backgroundColor:"black",fontFamily:"cursive"}}>
      <Nav />
     <Home />
     <About />
     <Projects />
     <Skills />
     <Stats />
     <Contact />
      </div>
    

    </div>
  );
}

export default App;
