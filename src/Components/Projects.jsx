// import Zoom from "react-reveal/Zoom"
import "../Components/styles"
import {
    Box,
   
    Heading,
    Text,
    Stack,
    Grid,
    
    Image,
    Flex,
    Button
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import {
  
    FaReact
   

} from 'react-icons/fa';

export default function Projects() {

    let projectdata = [
        {
            name: "Marceline",
            img: "https://user-images.githubusercontent.com/109611448/214076643-2b0d92a9-bbcf-42e7-9ed1-6e94175383c8.png",
            type: "Group",
            desc: "SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performan.The brand is inspired by and targeted towards bold, across......",
            techstack: "HTML, CSS,JS",
            livelink: "https://effortless-sunflower-25458d.netlify.app/",
            gitlink: "https://github.com/Janani1727/Marceline"
        },
        {
            name: "Intern Theory",
            img: "https://user-images.githubusercontent.com/109611448/214076765-a8e0728f-6e95-4b82-bd49-38c0f92efb75.png",
            type: "Individual",
            desc: "Intern Theory is an online internship portal created to bridge the gap between students seeking internships and companies looking business development of career......",
            techstack: "HTML ,CSS,JavaScript,React",
            livelink: "https://intent-com.vercel.app",
            gitlink: "https://github.com/Janani1727/lazy-name-5157"
        },
        {
            name: "PharmEasy",
            img: "https://user-images.githubusercontent.com/109611448/214076830-46d1043d-0a41-4606-9618-9f634c86baff.png",
            type: "Group",
            desc: "  PharmEasy offers 1 lakh+ medicines and health products across various categories ,and teleconsultations thereby serving their healthcare needs. which  your online  medicine......",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://tranquil-conkies-35d1d7.netlify.app/",
            gitlink: "https://github.com/Janani1727/lazy-name-5157"
        },
        
        {
            name: "Buffer",
            img: "https://user-images.githubusercontent.com/109611448/214076863-43190c43-98cb-4c36-a3aa-4a7f625718f3.png",
            type: "Individual",
            desc: " Buffer is a software application for the web and mobile , designed to manage accounts in social networks, Twitter, Facebook, Instagram, Instagram Stories, Pinterest  and LinkedIn, as well as analyze their.....",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://courageous-custard-0d0b9c.netlify.app",
            gitlink: "https://github.com/Janani1727/magnificent-celery-6982"
        },
        {
            name: "YouTube",
            img: "https://user-images.githubusercontent.com/109611448/214076913-6da9ef54-8886-4d3d-9f18-8ce28e3ca239.png",
            type: "Individual",
            desc: " YouTube is a global online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, is the second most .....",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://luxury-maamoul-f31818.netlify.app/",
            gitlink: "https://github.com/Janani1727/YouTube"
        }
    ]


    return (

        <Box  border= {"0px solid white"} marginTop={["-150px","-280px","0px"]} >
             <Heading className="projects" mr={["10%","54%","70%"]} fontSize={40} mt={"20px"} color={"#fe8a91"}>Projects
                 <Text mt={["-40px","-44px","-42px"]} marginLeft={["250px","250px","320px"]}><FaReact className="spin" color={"white"} /> </Text>
             </Heading>
            
            

        <Box border={"0px solid red"}  m={"auto"} w={"80%"} h={["2800px","3200px","1050px"]}>
            <Grid  margin={"auto"} ml={["-5%", "0%", "0%"]} width={["110%", "95%", "100%"]} border={"0px solid white"} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}

                gap={["10px", "20px", "30px"]} rowGap={["10px", "20px", "20px"]} >

                {projectdata && projectdata.map((project) => {

                    return (
                   
                        <Box
                        id="zoom"
                            mt={"40px"}
                            h={["95%", "100%", "98%"]}
                            W={['500px', '350px', '370px']}
                            w={'full'}
                            bg={'whitesmoke'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}
                        >

                            <Image
                                width={"100%"}
                                //    height={"60%"}
                                src={project.img}
                            // layout={'fill'}
                            />

                            <Stack textAlign={"left"}>

                                <Heading
                                    color={"#ff6188"}
                                    fontSize={['3xl', '3xl', '2xl']}
                                    textAlign={"left"}
                                    fontFamily={'body'}>
                                    {project.name}

                                </Heading>

                                <Text fontSize={['xl', '2xl', 'xl']}>
                                    {project.desc}


                                </Text>
                                <Text fontWeight={"bold"} textAlign={"center"} fontSize={['xl', '2xl', 'xl']}>
                                    {project.techstack}


                                </Text>


                                <Flex gap={20} fontWeight={700} >
                                    <a  href={project.livelink} target="_blank" rel="noreferrer">
                                    <Button mt={"20px"} ml={["1px", "40px", "20px"]} h={"35px"} w={"120px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"} _hover={{backgroundColor: "black",color:"white" }}>
                                        <Text display={"flex"} color={"white"} >
                                            <Text fontSize={"20px"} style={{ textDecoration: "none", color: "white", display: "flex" }}>Demo  </Text>
                                            <Text fontSize={"21px"} ml={"8px"}><FaLink  className="bounce"/></Text>


                                        </Text>
                                    </Button>
                                    </a>
                                   
                                   <a  href={project.gitlink} target="_blank" rel="noreferrer">
                                    <Button mt={"20px"} ml={["-50px", "20px", "0px"]} h={"35px"} w={"120px"} bgColor={"#ff6188"} border={"1px solid #ff6188"} borderRadius={"5px"} _hover={{backgroundColor: "black",color:"white" }}>
                                        <Text  display={"flex"} color={"white"}>
                                            <Text fontSize={"20px"} style={{ textDecoration: "none", color: "white", display: "flex" }} >Github</Text>
                                            <Text ml={"10px"} fontSize={"22px"}>  <AiOutlineGithub className="bounce" /></Text>
                                        </Text>
                                    </Button>
                                    </a>
                                </Flex>



                            </Stack>

                        </Box>
                         
                    )
                })}




            </Grid>


        </Box>
        </Box>
    )
   
}