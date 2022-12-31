import { React} from 'react';
import Images from "../Images/logo.jpg"
import {
  Image,
  Text,
  Flex
} from '@chakra-ui/react';
export default function Nav() {
  return (
    <>
        <div style={{ border:"0px solid red",height:"80px",backgroundColor:"#fd8990",fontFamily:"cursive"}}> 
          <Flex gap={"20px"} color={"white"} fontSize={"32px"} >
            <div style={{marginLeft:"30px",display:"flex"}}>
            <Image src={Images}  borderRadius={"50%"} height={"50px"} mt={"20px"}  /> 
            <Text ml={"10px"}  mt={"22px"}>Janani</Text>
            </div>

             <div style={{display:"flex", gap:"40px",marginLeft:"47%"}}>
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

