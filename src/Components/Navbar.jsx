import { React} from 'react';
import Images from "../Images/logo.jpg"
import {
  Image,
  Text,
  Flex,
  position
} from '@chakra-ui/react';
export default function Nav() {
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

             <div style={{display:"flex", gap:"40px",marginLeft:"44%"}}>
             <Text>Home</Text>
             <Text>About</Text>
             <Text>Skills</Text>
             <Text>Contact</Text>
             <Text>
              <a href="https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link" 
              style={{ color:"white", textDecoration:"none"}} target={"blank"}>
              Resume
              </a>
            </Text>
            </div>

          </Flex>
        </div>
        

       {/* </Box> */}
     
    </>
  );
}

