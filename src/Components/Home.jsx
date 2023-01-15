import { Image, Text, Box, Button } from "@chakra-ui/react"
import Downloads from "../Downloads/Janani_Jayaraman_Resume.pdf"
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { DownloadIcon } from "@chakra-ui/icons";
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
              <Box ml={["18px", "3px", "8px"]} textAlign={["left", "left", "left"]} fontSize={["27px", "28px", "5xl"]}>
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
                <a href="https://github.com/Janani1727" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineGithub />}></Button></a>
                <a href="https://www.linkedin.com/in/janani-jayaraman-412758238/" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineLinkedin />}></Button></a>
              </Box>
              <Box>
                <a href={Downloads} download>
                  <Button ml={["18px", "-220px", "-620px"]} mt="15px"  p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="white" color="black" border="none" variant='solid' leftIcon={<DownloadIcon />}>
                    Resume</Button>
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