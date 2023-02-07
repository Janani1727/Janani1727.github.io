import React from 'react'

import { Image, Text, Button, Heading, Box, Input,Center } from "@chakra-ui/react"
import Fade from "react-reveal/Fade"
import { FaPhone } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { TbMessages } from "react-icons/tb"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
const Contact = () => {


  return (
    <>

      <Heading mr={["0%", "54%", "65%"]} fontSize={["30px", "40px", "40px"]} mt={["50px", "150px", "150px"]} color={"#fe8a91"}>Contact
        <Text mt={["-35px","-44px","-42px"]} fontSize={["30px", "40px", "40px"]} marginLeft={["250px", "250px", "350px"]}>
          <TbMessages color="white" className="bounce" />
        </Text>
      </Heading>

      <Box className="contact" border={"0px solid white"} height={["400px", "600px", "600px"]} fontFamily={"cursive"} fontSize={"50px"} display={"flex"}>
        <Fade left>
          <div>
            <Image borderRadius={"50%"} width={["0px", "0px", "500px"]} marginLeft={"160px"} mt={["40px", "40px", "150px"]} src="https://cdn.dribbble.com/users/1163294/screenshots/10966353/media/243c2ccb8d2bb385c030dfcc69e7b5f9.gif" />
          </div>
        </Fade>

        <Fade right>


          <Box height={"400px"} border={"0px solid white"} width={["200px", "400px", "600px"]} marginTop={["40px", "40px", "80px"]} marginLeft={["-130px", "-70px", "100px"]} textAlign={"left"}>

            <Box display={"flex"} gap={["10px", "20px", "10px"]} color={"white"} fontSize={["20px", "32px", "32px"]}>
              <Text mt={"10px"}><FaPhone color='white' /></Text>
              <Text > +91 9894692123</Text>
            </Box>
            <Box display={"flex"} gap={["10px", "20px", "10px"]} color={"white"} fontSize={["20px", "32px", "32px"]}>
              <Text mt={"10px"}><SiGmail color='white' /></Text>
              <Text> jayaramanjanani73@gmail.com</Text>
            </Box>

            <Box ml={["6px", "8px", "8px"]} mt="15px" gap="15px" display="flex" color="#13022c">
                <a href="https://github.com/Janani1727" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineGithub className="bounce"/>}></Button></a>
                <a href="https://www.linkedin.com/in/janani-jayaraman-412758238/" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineLinkedin className="bounce" />}></Button></a>
              </Box>

            <form action="https://getform.io/f/4814c61f-fa5d-4dbe-bb30-ca58ff9e3517" method="POST">
              <Input  variant='flushed' border={"1px solid #fe8a91"} h={"50px"} w={["150%", "120%", "90%"]} fontSize={"20px"} backgroundColor={"black"} color={"white"} placeholder="Enter your Name" type="text" name="name" />
              <Input variant='flushed' mt={"20px"} border={"1px solid #fe8a91"} h={"50px"} w={["150%", "120%", "90%"]} fontSize={"20px"} backgroundColor={"black"} color={"white"}  placeholder="Enter your Email" type="email" name="email" />
              <Input variant='flushed' mt={"20px"} border={"1px solid #fe8a91"} h={"100px"} w={["150%", "120%", "90%"]} fontSize={"20px"} backgroundColor={"black"} color={"white"} placeholder="Enter Message" type="text" name="message" />

              <Button backgroundColor={"#ff6188"}
                color={"white"}
                w={["90%", "50%", "30%"]}
                h={"50px"}
                borderRadius={"10px"}
                fontSize={"25px"}
                ml={["70px", "150px", "180px"]} type="submit">Send</Button>
            </form>

          </Box>

        </Fade>

      </Box>







    </>
  )
}

export default Contact


