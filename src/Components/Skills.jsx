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
 

} from "@chakra-ui/react"
import "../styles/common.css"
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
        <Box marginTop={["330px","240px","200px"]}>
        <Heading mr={["15%","51%","60%"]} fontSize={40} color={"#fe8a91"}>Skills & Tools
        <Text mt={"-45px"} marginLeft={["305px","300px","450px"]}><SlSettings  className="spin" color={"white"}/></Text>
         </Heading> 
      <Box className="skills" display={["inline", "flex", "flex"]} border={"0px solid white"} mt={"-12px"} height={["800px","500px","500px"]}>
      <Flex>
        <Fade left>
     <Container w={["200px","300px","530px"]} marginTop={["30px","60px","80px"]} marginLeft={["28px","10px","160px"]}>
    <Grid  h='200px' 

  templateColumns={['repeat(4, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}
  gap={["5px","4px","30px"]}>
  
  <GridItem  w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' border={"0px solid red"} color='#e44f26'  boxShadow={"base"} fontWeight={"700"}
    
  >
   
    <FaHtml5  color={"#e44f26"}
    />
 
   <Text fontSize={["16px","20px","16px"]} mr={["10px","20px","20px"]} mt={"2px"}>  HTML</Text>
  </GridItem>
  
  <GridItem  w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#0066b6"}  boxShadow={"base"} fontWeight={"700"} >
    
  <FaCss3 color={"#0066b6"}
  />
   <Text fontSize={["16px","20px","16px"]} mr={["5px","30px","0px"]} mt={"2px"}> CSS</Text>
  </GridItem>

  <GridItem  w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#e4d04b"}  boxShadow={"base"} fontWeight={"700"} >
    
    <FaJs  color={"#e4d04b"}
    />
   <Text fontSize={["16px","20px","16px"]} mr={["5px","50px","0px"]} mt={"2px"}> JS</Text>
  </GridItem>

  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#00cdf2"}  boxShadow={"base"} fontWeight={"700"} >
   
    <FaReact  color={"#00cdf2"} 
    />
  <Text fontSize={["16px","20px","16px"]} mr={["5px","20px","0px"]} mt={"2px"}> React</Text>
  </GridItem>
 
  <GridItem  w={['90%','90%','90%']} fontSize={["60px","60px","80px"]} h='110'  color={"#48aaeb"} boxShadow={"base"} fontWeight={"700"}
  
  >
    
    <SiVisualstudiocode color={"#48aaeb"} 
    />
    <Text fontSize={["16px","20px","16px"]} mr={["5px","20px","0px"]} mt={"2px"}> VsCode</Text>
  </GridItem>
  
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110'  color={"#679d5a"}  boxShadow={"base"} fontWeight={"700"} >
    
    <FaNodeJs color={"#679d5a"} 
    />
   <Text fontSize={["16px","20px","16px"]} mr={["0px","35px","0px"]} mt={"2px"}>NodeJs</Text>
  </GridItem>
 
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#764abc"}  boxShadow={"base"} fontWeight={"700"} >
    
    <SiRedux  color={"#764abc"}
    />
    <Text fontSize={["16px","20px","16px"]} mr={["5px","20px","0px"]} mt={"2px"}> REDUX</Text>
  </GridItem>
  
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#4ba13e"}  boxShadow={"base"} fontWeight={"700"} >
    
  <SiMongodb  color={"#4ba13e"}
    
  />
 <Text fontSize={["16px","20px","16px"]} mr={["5px","20px","4px"]} mt={"2px"}>MongoDb</Text>
  </GridItem>
  
  
  
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#e4d04b"}  boxShadow={"base"} fontWeight={"700"} >
    
    <SiExpress  color={"#e4d04b"}
    />
    <Text fontSize={["16px","20px","16px"]} mr={["5px","20px","0px"]} mt={"2px"}> ExpressJS</Text>
  </GridItem>
  
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"grey"} boxShadow={"base"} fontWeight={"700"} >
   
    <FaGithub  color={"grey"}
    />
    <Text fontSize={["16px","20px","16px"]} mr={["22px","20px","0px"]} mt={"2px"}>GitHub</Text>
  </GridItem>
 
  <GridItem w={['90%','100%','90%']} fontSize={["60px","60px","80px"]} h='110' color={"#e44c30"} boxShadow={"base"} fontWeight={"700"} >
    
    <FaGitAlt color={"#e44c30"}
    />
  <Text fontSize={["16px","20px","16px"]} mr={["5px","35px","0px"]} mt={"2px"}> GIT</Text>
  </GridItem>
  
  <GridItem w={['90%','90%','90%']} fontSize={["60px","50px","70px"]} h='110' color={"#44bcb9"} boxShadow={"base"} fontWeight={"700"} >
    
    <SiChakraui  color={"#44bcb9"}
    />
 <Text fontSize={["16px","20px","16px"]} mr={["5px","6px","-2px"]} mt={"6px"}> ChakraUI</Text>
  </GridItem>
  

   </Grid>
   </Container>
   </Fade>

   <Fade right>
      <Box w={["0%", "75%", "68%"]} mt={["50px","140px","90px"]} ml={["50px","80px","150px"]} border={"0px solid white"}  rounded={["50%", "50%", "50%"]}>
              <Image  rounded={["50%", "50%", "50%"]} src="https://i.pinimg.com/originals/16/f5/20/16f5204718e98858b1d4466e911e90ed.gif" alt="img" />
            </Box>
            </Fade>
      </Flex>
      </Box>
           
     
          
      </Box>  
           

        
        </>
    )
};

export default Skills;


