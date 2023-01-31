import { Image, Box, Text } from "@chakra-ui/react"
import logo from "../Images/logo.jpg"

// import Fade from "react-reveal/Fade"
// import Jump from "react-reveal/Jump"
import "../Components/styles"
import { FaUserAlt } from "react-icons/fa"
export default function Home() {
    return (
        <>
            <div id="about" style={{ border: "0px solid white", height: "650px", fontFamily: "cursive", marginTop: "50px", fontSize: "50px" }}>

                <Box id="About" p="30px 0px" pt="10px" h={["360px", "430px", "550px"]}>

                    <Box w="95%" m="auto" display={["inline", "flex", "flex"]} color={"white"} justifyContent="space-between" alignItems="center">

                        <Image  w={["50%", "30%", "25%"]} border={"15px solid #fe8a91"} borderRadius={"50%"} m="auto" src={logo} alt="img" />


                        <Box w={["90%", "90%", "40%"]} m="auto" >
                            <Text textAlign={["center", "center", "left"]}
                                fontWeight="400" mt="20px" fontSize={["3xl", "3xl", "5xl"]} color={"#fe8a91"}>About Me
                                <Text mt={["-40px", "-38px", "-52px"]} fontSize={["3xl", "3xl", "40px"]}  marginLeft={["240px", "310px", "240px"]} w={["0px", "40px", "40px"]}>
                                    <FaUserAlt color="white" className="bounce" />
                                </Text>
                            </Text>
                            <Text mt={["20px", "14px", "25px"]} ml={["20px", "40px", 'auto']} fontSize={["15px", "20px", "25px"]} textAlign={["center", "left", "left"]}>
                                
                                Motivated and innovative aspiring full-stack web
                                developer with hands-on experience in building
                                websites with MERN stack and various web
                                technologies including HTML, CSS, and JS. Curious to
                                learn about emerging web technologies. Looking
                                forward to making a significant contribution to an
                                organization through dedicated effort.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </div>














        </>
    )
}