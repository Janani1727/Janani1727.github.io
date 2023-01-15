import marceline from "../Images/marceline.png"
import intent from "../Images/intent.png"
import PharmEasy from "../Images/pharmEasy.png"
import buffer from "../Images/buffer.png"
import youtube from "../Images/youtube.png"
import "../styles/common.css"

import {
    FaHtml5,
    FaReact,
    FaJs,
    FaCss3,

} from 'react-icons/fa';
import { SiChakraui } from "react-icons/si"
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Grid,
    GridItem,
    Image,
    Flex,
    Button
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import Zoom from "react-reveal/Zoom"
export default function Projects() {
    return (
        <>
            <Box  border= {"0px solid white"} marginTop={["-150px","-280px","0px"]} >
                <Heading className="projects" mr={["10%","70%","70%"]} fontSize={40} mt={"20px"} color={"#fe8a91"}>Projects
                    <Text mt={["-40px","-40px","-35px"]} marginLeft={["250px","200px","320px"]}><FaReact className="bounce" color={"white"} /> </Text>
                </Heading>

                <Center mt={"70px"} >

                    <Grid margin={"auto"} width={["95%", "95%", "80%"]} border={"0px solid white"} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}

                        gap={["10px", "20px", "50px"]} rowGap={["10px", "20px", "20px"]} >



                        {/* <Zoom>  */}
                        <GridItem

                            h={["98%", "100%", "98%"]}
                            W={['350px', '350px', '370px']}
                            // w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"60%"}
                                src={marceline}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', '2xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    Sugar Cosmetics

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']}>
                                   
  SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance.
                                The brand is inspired by and targeted towards bold,        
                                across......
                                 

                                </Text>

                                <Text display={"flex"} textAlign={"center"} border={"0px solid black"} gap={"20px"}>
                                    <FaHtml5  fontSize={"40px"} color={"#e44f26"} />
                                    <FaCss3 fontSize={"40px"} color={"#0066b6"} />
                                    <FaJs fontSize={"40px"} color={"#e4d04b"} />
                                    <FaReact fontSize={"40px"} color={"#00cdf2"} />
                                    <SiChakraui fontSize={"40px"} color={"#44bcb9"} />
                                </Text>

                                <Flex gap={20} fontWeight={700} >
                                    <Button mt={"20px"} ml={["20px","70px","20px"]} h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"} >
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://effortless-sunflower-25458d.netlify.app/">Demo <FaLink /> </a>

                                        </Text>
                                    </Button>

                                    <Button mt={"20px"} ml={["20px","20px","20px"]} h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"}>
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://github.com/Janani1727/Marceline">Github <AiOutlineGithub /></a>

                                        </Text>
                                    </Button>

                                </Flex>



                            </Stack>

                        </GridItem>
                        {/* </Zoom> */}


                        {/* <Zoom>  */}
                        <GridItem h={["98%", "100%", "98%"]}
                            W={['300px', '350px', '370px']}
                            // w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"100%"}
                                src={intent}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', '2xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    Intern Theory

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']} >
                                    Intern Theory is an online internship portal created to bridge
                                    the gap between students seeking internships and companies looking
                                   
                                    business development of career......



                                </Text>
                                <Text display={"flex"} fontSize={"25px"} gap={"20px"} fontWeight={900}>
                                <FaHtml5 fontSize={"40px"} color={"#e44f26"} />
                                    <FaCss3 fontSize={"40px"} color={"#0066b6"} />
                                    <FaJs fontSize={"40px"} color={"#e4d04b"} />
                                    
                                    {/* <FaReact fontSize={"40px"} color={"#00cdf2"}  /> */}
                                </Text>
                                <Flex gap={20} fontWeight={700} >
                                    <Button mt={"20px"} ml={["20px","70px","20px"]} h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"} >
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://intent-com.vercel.app">Demo <FaLink /> </a>

                                        </Text>
                                    </Button>

                                    <Button mt={"20px"} ml={["20px","20px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"}>
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://github.com/Janani1727/lazy-name-5157">Github <AiOutlineGithub /></a>

                                        </Text>
                                    </Button>

                                </Flex>



                            </Stack>

                        </GridItem>
                        {/* </Zoom> */}


                        {/* <Zoom>  */}
                        <GridItem h={["98%", "100%", "98%"]}
                            W={['300px', '350px', '370px']}
                            // w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"100%"}
                                src={PharmEasy}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', '2xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    PharmEasy

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']}>
                                PharmEasy offers 1 lakh+ medicines and health products
                                across various categories through its retail partners which 
                                your online 
                                medicine......

                                  



                                </Text>
                                <Text display={"flex"} fontSize={"25px"} gap={"20px"} fontWeight={900}>
                                    <FaHtml5 fontSize={"40px"} color={"#e44f26"} />
                                    <FaCss3 fontSize={"40px"} color={"#0066b6"} />
                                    <FaJs fontSize={"40px"} color={"#e4d04b"} />
                                    {/* <FaReact fontSize={"40px"} color={"#00cdf2"}  /> */}
                                </Text>
                                <Flex gap={20} fontWeight={700} >
                                    <Button mt={"20px"} ml={["20px","70px","20px"]} h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"} >
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://tranquil-conkies-35d1d7.netlify.app/">Demo <FaLink /> </a>

                                        </Text>
                                    </Button>

                                    <Button mt={"20px"} ml={["20px","20px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"}>
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://github.com/Janani1727/pharmEasy">Github <AiOutlineGithub /></a>

                                        </Text>
                                    </Button>

                                </Flex>



                            </Stack>

                        </GridItem>
                        {/* </Zoom> */}


                        {/* <Zoom>  */}
                        <GridItem h={["98%", "100%", "98%"]}
                            W={['300px', '350px', '370px']}
                            // w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"100%"}
                                src={buffer}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', 'xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    Buffer

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']}>
                                Buffer is a software application for the web and mobile
                                , designed to manage accounts in social networks,
                                Twitter, Facebook, Instagram, Instagram Stories, Pinterest
                                 and LinkedIn, as well as analyze their.....




                                </Text>
                                <Text display={"flex"} fontSize={"25px"} gap={"20px"} fontWeight={900}>
                                    <FaHtml5 fontSize={"40px"} color={"#e44f26"} />
                                    <FaCss3 fontSize={"40px"} color={"#0066b6"} />
                                    <FaJs fontSize={"40px"} color={"#e4d04b"} />
                                    {/* <FaReact fontSize={"40px"} color={"#00cdf2"}  /> */}
                                </Text>
                                <Flex gap={20} fontWeight={700} >
                                    <Button mt={"20px"}ml={["20px","70px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"} >
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://courageous-custard-0d0b9c.netlify.app">Demo <FaLink /> </a>

                                        </Text>
                                    </Button>

                                    <Button mt={"20px"} ml={["20px","20px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"}>
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://github.com/Janani1727/magnificent-celery-6982">Github <AiOutlineGithub /></a>

                                        </Text>
                                    </Button>

                                </Flex>



                            </Stack>

                        </GridItem>
                        {/* </Zoom> */}


                        {/* <Zoom>  */}
                        <GridItem h={["98%", "100%", "98%"]}
                            W={['300px', '350px', '370px']}
                            // w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"100%"}
                                src={youtube}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', '2xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    YouTube

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']}>
                                YouTube is a global online video sharing and social media platform 
                            headquartered in San Bruno, California. It was launched on February 14, 2005, 
                            is the second most .....




                                </Text>
                                <Text display={"flex"} fontSize={"25px"} gap={"20px"} fontWeight={900}>
                                    <FaHtml5 fontSize={"40px"} color={"#e44f26"} />
                                    <FaCss3 fontSize={"40px"} color={"#0066b6"} />
                                    <FaJs fontSize={"40px"} color={"#e4d04b"} />
                                    {/* <FaReact fontSize={"40px"} color={"#00cdf2"}  /> */}

                                </Text>
                                <Flex gap={20} fontWeight={700} >
                                    <Button mt={"20px"} ml={["20px","70px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"} >
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://luxury-maamoul-f31818.netlify.app/">Demo <FaLink /> </a>

                                        </Text>
                                    </Button>

                                    <Button mt={"20px"} ml={["20px","20px","20px"]}  h={"35px"} w={"170px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                        <Text color={"white"}>
                                            <a style={{ textDecoration: "none", color: "white", display: "flex" }} href="https://github.com/Janani1727/YouTube">Github <AiOutlineGithub /></a>

                                        </Text>
                                    </Button>

                                </Flex>

                            </Stack>

                        </GridItem>
                        {/* </Zoom> */}


                    </Grid>


                </Center>


            </Box>
        </>
    );
}












