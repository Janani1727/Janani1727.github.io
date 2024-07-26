import { Image, Text, Box, Button } from "@chakra-ui/react"
import "../Components/styles"
import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { DownloadIcon } from "@chakra-ui/icons";
import Resume from "../../src/Downloads/Janani-Jayaraman-Resume.pdf"
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





              <Box ml={["80px", "8px", "18px"]} mt="15px" gap="15px" display="flex" color="#13022c">
                <a href="https://github.com/Janani1727" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineGithub  className="bounce"/>}></Button></a>
                <a href="https://www.linkedin.com/in/janani-jayaraman-412758238/" rel="noreferrer" target="_blank"><Button pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="white" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineLinkedin className="bounce" />}></Button></a>
                <a href={Resume} download>
                  <Button ml={["8px", "20px", "20px"]} mt="2px"   fontSize={["md", "lg", "xl"]} bg="white" color="black" border="none" variant='solid' leftIcon={<DownloadIcon className="hithere" />}>
                  <a
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/18QVq9kNXXjz_MdyMFABxEkN_kT0RMjCO/view?usp=sharing","_blank", "noreferrer"
                  )
                }}

                href={Resume}
                download
                // leftIcon={<DownloadIcon className="hithere" color={"black"} />} 
                >  
               
                   Resume 
                </a></Button>
                </a>
              </Box>
              {/* <Box>
                <a href={Resume} download>
                  <Button ml={["18px", "-220px", "-500px"]} mt="15px"  p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="white" color="black" border="none" variant='solid' leftIcon={<DownloadIcon className="hithere" />}>
                  <a
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link","_blank", "noreferrer"
                  )
                }}

                href={Resume}
                download
                // leftIcon={<DownloadIcon className="hithere" color={"black"} />} 
                >  
               
                   Resume 
                </a></Button>
                </a>
              </Box> */}
            </Box>
            <Box p="5px" w={["65%", "70%", "45%"]} mt={["40px", "80px", "100px"]} rounded={["50%", "50%", "50%"]}>
              <Image w="100%" rounded={["50%", "50%", "50%"]} ml={["50px", "10px", "8px"]} src="https://static.vecteezy.com/system/resources/previews/002/794/133/original/young-woman-working-on-laptop-freelance-or-studying-concept-cute-trendy-illustration-in-flat-style-free-vector.jpg" alt="img" />
            </Box>


          </Box>

        </Box>
      </Box>

    </>

  )
}
