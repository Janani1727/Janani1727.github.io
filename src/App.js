import Nav from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import HeroImg from "./Components/Home";
// import Particle from "./Components/Particle";

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
    <div style={{ width: "100%", backgroundColor: "black" }} className="App">
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="0, 185, 232"
        outerAlpha={0.4}
        innerScale={0.6}
        outerScale={0}
      />

      <Box
        backgroundColor={"black"}
        fontFamily={["sans-serif", "sans-serif", "cursive"]}
      >
        
        <Nav />
        <HeroImg />
        <About />
        <Projects />
        <Skills />
        <Stats />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
