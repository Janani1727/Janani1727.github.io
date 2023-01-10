import marceline from "../Images/marceline.png"
import intent from "../Images/intent.png"
import PharmEasy from "../Images/pharmEasy.png"
import buffer from "../Images/buffer.png"
import youtube from "../Images/youtube.png"
import "../styles/common.css"
import { FaReact } from "react-icons/fa"
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Grid,
    useColorModeValue,
    Image,
    Flex,
    Button
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import Zoom from  "react-reveal/Zoom"
export default function Projects() {
    return (
        <> 
         <div style={{border:"0px solid white",marginTop:"150px"}}>
           <Heading mr={"65%"} fontSize={40} mt={"20px"} color={"#fe8a91"}>Projects <FaReact  className="bounce" color={"white"}/></Heading>
           
            <Center  className="projects" py={4}>
             
                <Grid width={"80%"}  border={"1px solid white"} templateColumns='repeat(3, 1fr)' gap={"50px"} rowGap={"50px"} >
                   
                   <Zoom>
                    <Box id="zoom" h={"98%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('whitesmoke', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Image
                            width={"100%"}
                            //    height={"70%"}
                            src={marceline}
                        // layout={'fill'}
                        />

                        <Stack textAlign={"left"}>

                            <Heading
                                color={"#ff6188"}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                Sugar Cosmetics

                            </Heading>

                            <Text color={'gray.500'} >
                                SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance.
                                The brand is inspired by and targeted towards bold,
                                Manufactured in state-of-the-art facilities across Germany,
                                Italy, India, USA and Korea the 
                                {/* brand ships its bestselling products */}
                                across......
                                 {/* Lips, Eyes, Face and Nail categories across the world. */}
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={50} fontWeight={700} >
                                <Button ml={"60px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"}>
                                    <a style={{textDecoration:"none",color:"white"}} href="https://effortless-sunflower-25458d.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text >
                                </Button>
                               <Button ml={"20px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                               <Text   color={"white"}>
                                    <a style={{textDecoration:"none",color:"white"}} href="https://github.com/Janani1727/Marceline">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                               </Button>
                                
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                   <Zoom>
                    <Box id="zoom" h={"98%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('whitesmoke', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Image
                            width={"100%"}
                            //    height={"70%"}
                            src={intent}
                        // layout={'fill'}
                        />

                        <Stack textAlign={"left"}>

                            <Heading
                               color={"#ff6188"}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                Intern Theory

                            </Heading>

                            <Text color={'gray.500'} >
                                Intern Theory is an online internship portal created to bridge
                                the gap between students seeking internships and companies looking
                                for interns. They offer internships for profiles such as marketing,
                                business development of career......
                               


                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,React JS,Chakra UI</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Button ml={"60px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="https://intent-com.vercel.app">Demo</a>
                                    <FaLink />
                                </Text>
                                </Button>
                                
                                <Button ml={"20px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text color={"white"}>
                                    <a style={{textDecoration:"none",color:"white"}} href="https://github.com/Janani1727/lazy-name-5157">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                                </Button>
                               
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                    <Zoom>
                    <Box id="zoom" h={"98%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('whitesmoke', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Image
                            width={"100%"}
                            //    height={"70%"}
                            src={PharmEasy}
                        // layout={'fill'}
                        />

                        <Stack textAlign={"left"}>

                            <Heading
                                color={"#ff6188"}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                PharmEasy

                            </Heading>

                            <Text color={'gray.500'} >
                                PharmEasy offers 1 lakh+ medicines and health products
                                across various categories through its retail partners which
                                are spread across the country. You can simply place an order on
                                our website/app and we will deliver 
                                your online 
                                medicine
                                 {/* order */}
                                {/* in as low as 4 hours, with a ..... */}
                                {/* guaranteed delivery to you in 24-48* */}
                                {/* hrs! */}
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Button ml={"60px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="https://tranquil-conkies-35d1d7.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text>
                                </Button>
                               
                                <Button ml={"20px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="https://github.com/Janani1727/pharmEasy">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                                </Button>
{/* 
                                <Button ml={"70px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>

                                </Button> */}
                                
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                  <Zoom>
                    <Box id="zoom" h={"98%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('whitesmoke', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Image
                            width={"100%"}
                            //    height={"70%"}
                            src={buffer}
                        // layout={'fill'}
                        />

                        <Stack textAlign={"left"}>

                            <Heading
                                 color={"#ff6188"}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                Buffer

                            </Heading>

                            <Text color={'gray.500'} >
                                Buffer is a software application for the web and mobile
                                , designed to manage accounts in social networks,
                                by providing the means for a user to schedule posts to
                                Twitter, Facebook, Instagram, Instagram Stories, Pinterest,
                                 and LinkedIn, as well as analyze their.....
                          
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Button ml={"60px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="#">Demo</a>
                                    <FaLink />
                                </Text>
                                </Button>

                                <Button ml={"20px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="https://github.com/Janani1727/YouTube">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                                </Button>
                                
                                
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>
 
                  <Zoom>
                    <Box id="zoom" h={"98%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('whitesmoke', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Image
                            width={"100%"}
                            //    height={"70%"}
                            src={youtube}
                        // layout={'fill'}
                        />

                        <Stack textAlign={"left"}>

                            <Heading
                                color={"#ff6188"}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                              YouTube

                            </Heading>

                            <Text color={'gray.500'} >
                            YouTube is a global online video sharing and social media platform 
                            headquartered in San Bruno, California. It was launched on February 14, 2005, 
                            by Steve Chen, Chad Hurley,  and Jawed Karim. It is owned by Google, and 
                            is the second most .....
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >

                                <Button ml={"60px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"} >
                                    <a style={{textDecoration:"none",color:"white"}} href="https://effortless-sunflower-25458d.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text>
                                </Button>
                                

                                <Button ml={"20px"}  h={"35px"} w={"90px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"}>
                                <Text  color={"white"}>
                                    <a style={{textDecoration:"none",color:"white"}} href="https://github.com/Janani1727/Marceline">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                                </Button>
                              
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>
                </Grid>

            </Center>
            </div>
        </>
    );
}