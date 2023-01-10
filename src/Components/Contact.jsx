import React from 'react'

import { Image,Text, Button,Heading ,Input} from "@chakra-ui/react"
import Fade from "react-reveal/Fade"
import {FaPhone} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {TbMessages} from "react-icons/tb"

const Contact = () => {
  return (
    <>
    
    <Heading mr={"65%"} fontSize={40}   color={"#fe8a91"}>Contact <TbMessages color="white" className="bounce"/></Heading>
           
    <div className="contact" style={{ border: "0px solid white", height: "600px", fontFamily: "cursive", fontSize: "50px",display:"flex" }}>

       

        <Fade left>
                <div>
            <Image borderRadius={"50%"} width={"600px"} marginLeft={"160px"} mt={"50px"}  src="https://cdn.dribbble.com/users/1163294/screenshots/10966353/media/243c2ccb8d2bb385c030dfcc69e7b5f9.gif"/>
           </div>
           </Fade>

            <Fade right> 
             

            <div style={{height:"400px",border:"0px solid white",width:"600px",marginTop:"40px",marginLeft:"100px",textAlign:"left"}}> 
            
             <Text  color={"white"} fontSize={"32px"}> <FaPhone color='white'/> jayaramanjanani73@gmail.com</Text>
             <Text color={"white"} fontSize={"30px"}> <SiGmail /> +91 9894692123</Text><Input  variant='flushed' border={"1px solid #fe8a91"} h={"50px"} w={"90%"} fontSize={"20px"} backgroundColor={"black"} color={"white"} placeholder='Enter Your Name'/>
         
         
            <Input  variant='flushed'  border={"1px solid #fe8a91"} h={"50px"} w={"90%"} fontSize={"20px"} backgroundColor={"black"}  color={"white"} placeholder='Enter Your Email'/>
            <Input  variant='flushed'mt={"20px"} border={"1px solid #fe8a91"} h={"100px"} w={"90%"}fontSize={"20px"} backgroundColor={"black"} color={"white"} placeholder='Enter Your Message'/>
            <Button 
              backgroundColor={"#ff6188"}
              color={"white"}
              width={"30%"}
              h={"50px"}
              borderRadius={"10px"}
              fontSize={"25px"}
              ml={"180px"}
             >Send</Button>
              </div> 
              
            </Fade>
        
    </div>
           






</>
  )
}

export default Contact


