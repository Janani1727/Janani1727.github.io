import { Image,Flex} from "@chakra-ui/react"    
import waving from "../Images/waving.gif"
import Fade from "react-reveal/Fade"
export default function Home(){
    return(
        <>
        <div style={{ border:"0px solid white",height:"600px",fontFamily:"cursive",marginTop:"150px",fontSize:"30px"}}>
              
                <Flex>
                <Fade left>
                <div style={{display:"flex",marginLeft:"270px",marginTop:"130px"}}>
                <h2 style={{color:"white"}}>Hi</h2>
                <div style={{display:"flex"}}><Image src={waving} height={"60px"} mt={"32px"} />
                 <h2 style={{color:"white",marginLeft:"10px"}}>I'm Janani</h2></div>
                </div>
                </Fade>
                 
                  <Fade left>
                <div style={{color:"white" ,marginTop:"200px",marginLeft:"-370px"}}> <h2 >Full Stack Web Developer</h2></div> 
                </Fade>

                <Fade right>
                <div>
            <Image borderRadius={"50%"} width={"600px"} marginLeft={"120px"} mb={"50px"}  src="https://cdn.dribbble.com/users/1163294/screenshots/10976010/media/0e33d764bd5c0bf01de99f52de897192.gif"/>
           </div>
           </Fade>
         </Flex>
            </div>
           
          
             
           

        
        </>
    )
}