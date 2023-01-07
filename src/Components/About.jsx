import { Image, Flex } from "@chakra-ui/react"
import logo from "../Images/logo.jpg"
import Fade from "react-reveal/Fade"
import Jump from "react-reveal/Jump"
export default function Home() {
    return (
        <>
            <div style={{ border: "0px solid white", height: "700px", fontFamily: "cursive", marginTop: "50px", fontSize: "50px" }}>

                <Flex>


                    <Fade left>
                        <div>
                            <Image borderRadius={"50%"} width={"400px"} border={"15px solid #fe8a91"} height={"400px"} marginLeft={"180px"} mt={"80px"} src={logo} />
                        </div>
                    </Fade>

                    <Fade right> 
                    <div style={{border:"0px solid white",width:"800px",marginTop:"100px",marginLeft:"100px"}}> 
                            <Jump>
                            <h1 style={{color: "#fe8a91",fontSize:"50px", textAlign:"left",marginTop:"20px"}}>About Me</h1>  
                            </Jump>
                            <h2 style={{color: "white",fontSize:"30px", textAlign:"left",marginTop:"20px"}}>
                                Strong in design and integration with intuitive problem-
                                solving skills. Passionate about implementing and
                                launching new projects. Ability to translate business
                                requirements into technical solutions. Looking to start a
                                career as a web developer with a reputed firm driven by
                                technology.
                            </h2>
                            </div> 
                    </Fade>
                </Flex>
            </div>






        </>
    )
}