import { Image, Text, Box, Button } from "@chakra-ui/react"

import "../Components/styles"
import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { DownloadIcon } from "@chakra-ui/icons";
import fw20_0358_Janani_Jayaraman_Resume from "../Downloads/fw20_0358_Janani_Jayaraman_Resume.pdf"
export default function Home() {
  return (

    <>
      <Box id="home">
        <Box mt={"50px"} w="100%" pt={["100px", "50px", "50px"]} color="#e1cefd">
          <Box h={["150px", "300px", "620px"]} w="90%" border={"0px solid white"} color="#ffffff" m="auto" display={["inline", "flex", "flex"]} alignItems="center" justifyContent="space-around">
            <Box mt={["-50px", "50px", "0px"]} w={["100%", "100%", "60%"]} >
              <Box ml={["100px", "5px", "8px"]}>
                <Text fontWeight="5" display="flex" fontSize={["3xl", "28px", "5xl"]}> Hi I'm Janani</Text>
              </Box>
              <Box ml={["18px", "3px", "8px"]} textAlign={["left", "left", "left"]} fontSize={["25px", "28px", "5xl"]}>
                <Typewriter

                  options={{
                    strings: [
                      "Full Stack Web Developer",
                    ],
                    pauseFor: 1500,
                    autoStart: true,
                    loop: true,
                  }} />
              </Box>





              <Box ml={["140px", "8px", "8px"]} mt="15px" gap="15px" display="flex" color="#13022c">
                <a href="https://github.com/Janani1727" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineGithub  className="bounce"/>}></Button></a>
                <a href="https://www.linkedin.com/in/janani-jayaraman-412758238/" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineLinkedin className="bounce" />}></Button></a>
              </Box>
              <Box>
                <a href={fw20_0358_Janani_Jayaraman_Resume} download>
                  <Button ml={["18px", "-220px", "-620px"]} mt="15px"  p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="white" color="black" border="none" variant='solid' leftIcon={<DownloadIcon className="hithere" />}>
                  <a
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link","_blank", "noreferrer"
                  )
                }}

                href={fw20_0358_Janani_Jayaraman_Resume}
                download
                // leftIcon={<DownloadIcon className="hithere" color={"black"} />} 
                >  
               
                   Resume 
                </a></Button>
                </a>
              </Box>
            </Box>
            <Box p="5px" w={["75%", "70%", "45%"]} mt={["40px", "80px", "100px"]} rounded={["50%", "50%", "50%"]}>
              <Image w="100%" rounded={["50%", "50%", "50%"]} ml={["50px", "10px", "8px"]} src="https://cdn.dribbble.com/users/1163294/screenshots/10976010/media/0e33d764bd5c0bf01de99f52de897192.gif" alt="img" />
            </Box>


          </Box>

        </Box>
      </Box>

    </>

  )
}