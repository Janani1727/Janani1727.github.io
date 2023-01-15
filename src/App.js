import Nav from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact"
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Loader from './Components/Loader';
import { useState,useEffect } from 'react';
import {Box} from "@chakra-ui/react"
function App() {

  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        let timer = setTimeout(() => {
            setIsLoading(false);
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return isLoading ? (
        <Loader />
    ) : (
      <div style={{width:"100%"}} className="App">
                <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='255, 46, 99'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
                />
      
            <Box backgroundColor={"black"} fontFamily={"cursive"}>
            <Nav />
            <Home />
             <About />
            <Projects />
          <Skills />
             <Stats />
             <Contact /> 
            
            </Box>
        </div>
       
    );


}

export default App;
