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
import { SiRedux, SiMongodb,SiExpress,SiChakraui,SiVisualstudiocode } from 'react-icons/si';


const Skills = () => {
 
    return(
        <>
        <Heading mr={"70%"} fontSize={40} mt={"70px"} color={"#fe8a91"}>Skills</Heading> 
      <Box border={"0px solid white"} height={"500px"}>
      <Flex>
        <Fade left>
     <Container w={"500px"} marginTop={"80px"} marginLeft={"200px"}>
    <Grid  h='200px' 
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}>
  
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
   
    <FaHtml5 fontSize={"80px"} color={"white"}
    />
    {/* <Text mt={"100px"} >HTML</Text> */}
    {/* HTML */}
  </GridItem>
  
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
  <FaCss3  fontSize={"80px"} color={"white"}/>
  {/* CSS */}
  </GridItem>

  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <FaJs  fontSize={"80px"} color={"white"}/>
    {/* JS */}
  </GridItem>

  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
   
    <FaReact fontSize={"80px"} color={"white"} />
    {/* ReactJS */}
  </GridItem>
 
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <SiVisualstudiocode color={"white"} fontSize={"80px"}/>
    {/* VsCode */}
  </GridItem>
  
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <FaNodeJs color={"white"} fontSize={"80px"}/>
   {/* NodeJS */}
  </GridItem>
 
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <SiRedux fontSize={"80px"} color={"white"}/>
    {/* REDUX */}
  </GridItem>
  
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
  <SiMongodb fontSize={"80px"} color={"white"}/>
 {/* MongoDB */}
  </GridItem>
  
  
  
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <SiExpress fontSize={"90px"} color={"white"}/>
    {/* ExpressJS */}
  </GridItem>
  
  <GridItem w='90%' h='110'  boxShadow={"base"} fontWeight={"700"} >
   
    <FaGithub fontSize={"90px"} color={"white"}/>
    {/* GitHub */}
  </GridItem>
 
  <GridItem w='90%' h='110'   boxShadow={"base"} fontWeight={"700"} >
    
    <FaGitAlt fontSize={"90px"} color={"white"}/>
    {/* GIT */}
  </GridItem>
  
  <GridItem w='90%' h='110'  boxShadow={"base"} fontWeight={"700"} >
    
    <SiChakraui fontSize={"90px"} color={"white"}/>
   {/* ChakraUI */}
  </GridItem>
  

   </Grid>
   </Container>
   </Fade>

<Fade right>
        <Image 
        borderRadius={"50%"} width={"600px"}  marginLeft={"200px"}
        src=' https://i.pinimg.com/originals/16/f5/20/16f5204718e98858b1d4466e911e90ed.gif '/>
      </Fade>
      </Flex>
      </Box>
           
          
             
           

        
        </>
    )
};

export default Skills;
