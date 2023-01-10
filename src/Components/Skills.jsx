import React from 'react';
import Fade from "react-reveal/Fade"
import {
    Box,
    Grid,
    GridItem,
    Flex,
    Heading,
    Image,
    Container,
    Text,
    background

} from "@chakra-ui/react"

import {
    FaHtml5,
    FaReact,
    FaJs,
    FaNodeJs,
    FaCss3,
    FaGitAlt,
    FaGithub
} from 'react-icons/fa';
import {SlSettings} from"react-icons/sl"
import { SiRedux, SiMongodb,SiExpress,SiChakraui,SiVisualstudiocode } from 'react-icons/si';


const Skills = () => {
 
    return(
        <>
        <div style={{border:"0px solid white",marginTop:"100px"}}>
        <Heading mr={"70%"} fontSize={40} mt={"70px"} color={"#fe8a91"}>Skills  <SlSettings  className="bounce" color={"white"}/></Heading> 
      <Box className="skills" border={"0px solid white"} height={"500px"}>
      <Flex>
        <Fade left>
     <Container w={"500px"} marginTop={"20px"} marginLeft={"160px"}>
    <Grid  h='200px' 
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}>
  
  <GridItem  w='90%' h='110' border={"0px solid red"} color='#e44f26'  boxShadow={"base"} fontWeight={"700"}
    
  >
   
    <FaHtml5 fontSize={"80px"} color={"#e44f26"}
    />
 
   <Text mt={"2px"}>  HTML</Text>
  </GridItem>
  
  <GridItem  w='90%' h='110' color={"#0066b6"}  boxShadow={"base"} fontWeight={"700"} >
    
  <FaCss3  fontSize={"80px"} color={"#0066b6"}
  />
  CSS 
  </GridItem>

  <GridItem  w='90%' h='110' color={"#e4d04b"}  boxShadow={"base"} fontWeight={"700"} >
    
    <FaJs  fontSize={"80px"} color={"#e4d04b"}
    />
    <Text mt={"2px"}>JS </Text>
  </GridItem>

  <GridItem w='90%' h='110' color={"#00cdf2"}  boxShadow={"base"} fontWeight={"700"} >
   
    <FaReact fontSize={"80px"} color={"#00cdf2"} 
    />
    ReactJS
  </GridItem>
 
  <GridItem   w='90%' h='110'  color={"#48aaeb"} boxShadow={"base"} fontWeight={"700"}
  
  >
    
    <SiVisualstudiocode color={"#48aaeb"} fontSize={"80px"}
    />
    VsCode
  </GridItem>
  
  <GridItem w='90%' h='110'  color={"#679d5a"}  boxShadow={"base"} fontWeight={"700"} >
    
    <FaNodeJs color={"#679d5a"} fontSize={"80px"}
    />
   NodeJS
  </GridItem>
 
  <GridItem w='90%' h='110' color={"#764abc"}  boxShadow={"base"} fontWeight={"700"} >
    
    <SiRedux fontSize={"80px"} color={"#764abc"}
    />
    REDUX
  </GridItem>
  
  <GridItem w='90%' h='110' color={"#4ba13e"}  boxShadow={"base"} fontWeight={"700"} >
    
  <SiMongodb fontSize={"80px"} color={"#4ba13e"}
    
  />
 MongoDB
  </GridItem>
  
  
  
  <GridItem w='90%' h='110' color={"#e4d04b"}  boxShadow={"base"} fontWeight={"700"} >
    
    <SiExpress fontSize={"90px"} color={"#e4d04b"}
    />
    ExpressJS
  </GridItem>
  
  <GridItem w='90%' h='110' color={"grey"} boxShadow={"base"} fontWeight={"700"} >
   
    <FaGithub fontSize={"90px"} color={"grey"}
    />
    GitHub
  </GridItem>
 
  <GridItem w='90%' h='110' color={"#e44c30"} boxShadow={"base"} fontWeight={"700"} >
    
    <FaGitAlt fontSize={"90px"} color={"#e44c30"}
    />
    GIT
  </GridItem>
  
  <GridItem w='90%' h='110' color={"#44bcb9"} boxShadow={"base"} fontWeight={"700"} >
    
    <SiChakraui fontSize={"90px"} color={"#44bcb9"}
    />
   ChakraUI
  </GridItem>
  

   </Grid>
   </Container>
   </Fade>

<Fade right>
        <Image 
        borderRadius={"50%"} marginTop={"-51px"} width={"600px"}  marginLeft={"130px"}
        src=' https://i.pinimg.com/originals/16/f5/20/16f5204718e98858b1d4466e911e90ed.gif '/>
      </Fade>
      </Flex>
      </Box>
           
          
      </div>  
           

        
        </>
    )
};

export default Skills;


