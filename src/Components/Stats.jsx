import React from 'react'
import Zoom from "react-reveal/Zoom"
import {GridItem,Heading, Image,Grid,Box} from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
import {FaGithub} from "react-icons/fa"
const Stats = () => {
  return (
    <>
    <Heading mr={"60%"} fontSize={40} color={"#fe8a91"}>My Github Stats <FaGithub color='white' className='bounce'/></Heading>
   
    <Box>
      <div style={{display:"flex",width:"79%",margin:"auto"}}>
    <Zoom>
     <Image   width={"95%"} height={"300px"} src='https://github-readme-stats.vercel.app/api?username=janani1727&show_icons=true&locale=en&theme=dracula'/>
     </Zoom>

     <Zoom>
     <Image  width={"95%"} height={"300px"}src='https://github-readme-streak-stats.herokuapp.com/?user=janani1727&theme=dracula' />
     </Zoom>
     </div>
       <Grid mt={"50px"} mb={"50px"}>
       <Zoom>
        <GridItem>
        <Image width={"77%"} border={"1px solid white"} borderRadius={"10px"} src='https://github-readme-activity-graph.cyclic.app/graph?username=Janani1727&theme=monokai'/> 
        </GridItem>
        </Zoom>
        
       </Grid>
       <Zoom> 
        
        <Box border={"2px solid white"}
         borderRadius={"10px"}
          backgroundColor={"#282a36"}
           padding={10} 
           color={"#fe8a91"} 
           margin={"auto"}
            width={"76%"}>

       <GitHubCalendar  
        username="janani1727"
        blockSize={20}
        blockMargin={6}
        
        fontSize={20}
        color={"#ff2e63"}
        
       />
       </Box>
       </Zoom>
       </Box>
       
      
      </>
  )
}

export default Stats