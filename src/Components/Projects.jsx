import marceline from "../Images/marceline.png"
import intent from "../Images/intent.png"
import PharmEasy from "../Images/pharmEasy.png"
import buffer from "../Images/buffer.png"
import youtube from "../Images/youtube.png"

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Grid,
    useColorModeValue,
    Image,
    Flex
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import Zoom from  "react-reveal/Zoom"
export default function Projects() {
    return (
        <>
           <Heading mr={"70%"} fontSize={40} color={"#fe8a91"}>Projects</Heading>
           
            <Center py={4}>
             
                <Grid width={"80%"}  border={"0px solid white"} templateColumns='repeat(3, 1fr)' gap={"50px"} rowGap={"50px"} >
                   
                   <Zoom>
                    <Box h={"95%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
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
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                Sugar Cosmetics

                            </Heading>

                            <Text color={'gray.500'} >
                                SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance.
                                The brand is inspired by and targeted towards bold,
                                Manufactured in state-of-the-art facilities across Germany,
                                Italy, India, USA and Korea the brand ships its bestselling products
                                across Lips, Eyes, Face and Nail categories across the world.
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Text ml={"120px"} >
                                    <a href="https://effortless-sunflower-25458d.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text>
                                <Text >
                                    <a href="https://github.com/Janani1727/Marceline">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                   <Zoom>
                    <Box h={"95%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
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
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                Intern Theory

                            </Heading>

                            <Text color={'gray.500'} >
                                Intern Theory is an online internship portal created to bridge
                                the gap between students seeking internships and companies looking
                                for interns. They offer internships for profiles such as marketing,
                                business development, content writing, graphic design, HR, and engineering.


                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,React JS,Chakra UI,Axios-API</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Text ml={"120px"} >
                                    <a href="https://intent-com.vercel.app">Demo</a>
                                    <FaLink />
                                </Text>
                                <Text >
                                    <a href="https://github.com/Janani1727/lazy-name-5157">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                    <Zoom>
                    <Box h={"95%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
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
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                PharmEasy

                            </Heading>

                            <Text color={'gray.500'} >
                                PharmEasy offers 1 lakh+ medicines and health products
                                across various categories through its retail partners which
                                are spread across the country. You can simply place an order on
                                our website/app and we will deliver your online medicine order
                                in as low as 4 hours, with a guaranteed delivery to you in 24-48*
                                hrs!
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Text ml={"120px"} >
                                    <a href="https://tranquil-conkies-35d1d7.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text>
                                <Text >
                                    <a href="https://github.com/Janani1727/pharmEasy">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>

                  <Zoom>
                    <Box h={"95%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
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
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                                YouTube

                            </Heading>

                            <Text color={'gray.500'} >
                                Buffer is a software application for the web and mobile
                                , designed to manage accounts in social networks,
                                by providing the means for a user to schedule posts to
                                Twitter, Facebook, Instagram, Instagram Stories, Pinterest,
                                 and LinkedIn, as well as analyze their results and engage with their community.
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Text ml={"120px"} >
                                    <a href="#">Demo</a>
                                    <FaLink />
                                </Text>
                                <Text >
                                    <a href="https://github.com/Janani1727/YouTube">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>
 
                  <Zoom>
                    <Box h={"95%"}
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
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
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                textAlign={"left"}
                                fontFamily={'body'}>
                              YouTube

                            </Heading>

                            <Text color={'gray.500'} >
                                SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance.
                                The brand is inspired by and targeted towards bold,
                                Manufactured in state-of-the-art facilities across Germany,
                                Italy, India, USA and Korea the brand ships its bestselling products
                                across Lips, Eyes, Face and Nail categories across the world.
                            </Text>

                            <Text fontWeight={500}>Tech Stack :HTML ,CSS,JavaScript</Text>

                            <Flex gap={60} fontWeight={700} >
                                <Text ml={"120px"} >
                                    <a href="https://effortless-sunflower-25458d.netlify.app/">Demo</a>
                                    <FaLink />
                                </Text>
                                <Text >
                                    <a href="https://github.com/Janani1727/Marceline">Github</a>
                                    <AiOutlineGithub />
                                </Text>
                            </Flex>



                        </Stack>

                    </Box>
                    </Zoom>
                </Grid>

            </Center>
        </>
    );
}