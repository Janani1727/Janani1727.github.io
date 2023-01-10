import { React} from 'react';
import Images from "../Images/logo.jpg"
import {
  Image,
  Text,
  Flex,
  position,

  Box
} from '@chakra-ui/react';
import {Link} from "react-scroll"
export default function Nav() {

  const menus = [
    { id: 0, name: "Home", css: "home" },
    { id: 1, name: "About", css: "about" },
    { id: 2, name: "Projects", css: "projects" },
    { id: 3, name: "Skills", css: "skills" },
    { id: 4, name: "Contact", css: "contact" },
  ]
  return (
 
    <>
        <div style={{ border:"0px solid red",width:"100%",height:"90px",backgroundColor:"#fe8a91",position:"fixed",top:"0px",
         zIndex:"99"
      }}> 
        
          <Flex gap={"15px"} color={"white"} fontSize={"30px"} >
            <div style={{marginLeft:"30px",display:"flex"}}>
            <Image src={Images}  borderRadius={"50%"} height={"50px"} mt={"20px"}  /> 
            <Text ml={"10px"}  mt={"22px"}>Janani</Text>
            </div>

             <div style={{display:"flex", gap:"30px",marginLeft:"38%"}}>
            
             {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Box mt={"25px"} key={item.id}>{item.name}</Box>
          </Link>
           ))} 
             <Text mt={"25px"}>
              <a href="https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link" 
              style={{ color:"white", textDecoration:"none"}} target={"blank"}>
              Resume
              </a>
            </Text>
            </div>

          </Flex>
        </div>
        

<Box backgroundColor={"white"}>
{/* {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <Box key={item.id}>{item.name}</Box>
          </Link>
           ))} */}
          </Box>
    </>
  );
}

