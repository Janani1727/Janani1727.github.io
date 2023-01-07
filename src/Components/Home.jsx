import { Image,Flex} from "@chakra-ui/react"    
import waving from "../Images/waving.gif"
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect";
export default function Home(){
    return(
        <>
        <div style={{ border:"0px solid white",height:"700px",fontFamily:"cursive",fontSize:"30px",display:"flex", zIndex:"99"}}>
              
                {/* <Flex> */}
                <div style={{ border:"0px solid green",width:"50%",marginTop:"200px",}}>
                <Fade left>
                <div style={{ border:"0px solid red",height:"70px",display:"flex",width:"55%",marginLeft:"150px",marginTop:"130px"}}>
                <h2 style={{color:"white"}}>Hi</h2>
                <div style={{display:"flex"}}><Image src={waving} height={"60px"} mt={"32px"} />
                 <h2 style={{color:"white",marginLeft:"10px"}}>I'm Janani</h2></div>
                 </div>
            
                 <div style={{ border:"0px solid red",height:"70px",display:"flex",width:"80%",marginLeft:"130px",marginTop:"30px",color:"white",fontSize:"45px",fontWeight:"bold"}}>
                 {/* <h2 style={{color:"white"}}>Full Stack Web Developer</h2> */}
                
                 <Typewriter 
                 
                options={{
                strings: [
                  "Full Stack Web Developer",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
              
            />
                
                 </div>
                  
               
              
                </Fade>
                </div>
                <div style={{ border:"0px solid green",width:"50%",marginTop:"200px",}}>
                <Fade right>
                <div>
            <Image borderRadius={"50%"} width={"600px"} marginLeft={"20px"} mb={"50px"}  src="https://cdn.dribbble.com/users/1163294/screenshots/10976010/media/0e33d764bd5c0bf01de99f52de897192.gif"/>
           </div>
           </Fade>
           </div>
         {/* </Flex> */}
            </div>
           
          
             
           

        
        </>
    )
}