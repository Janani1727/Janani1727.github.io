// import Zoom from "react-reveal/Zoom"
import { useState } from "react";
import "../Components/styles";
import {
  Box,
  Heading,
  Text,
  Stack,
  Grid,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export default function Projects() {
  let projectdata = [
    {
      name: "Chat App  - (Full Stack)",
      img: "https://user-images.githubusercontent.com/109611448/260457232-f41d1de8-224e-4b0c-9ec3-0e2807541e5c.png",
      type: "Individual",
      desc: "Chat App! This application allows users to send messages and record audio in a chat-like interface,Send text messages and record audio messages ,Emoji support for adding fun to your messages.",
      techstack: "MERN Stack,Chakra UI,HTML,CSS",
      livelink: "https://exact-space-frontend-t8hu.vercel.app/",
      gitlink: "https://github.com/Janani1727/exactSpace_Frontend",
    },
    {
      name: "Tata 1mg - (Full Stack)",
      img: "https://user-images.githubusercontent.com/109611448/221431735-62052936-4778-495b-85b1-a79a2b79aae3.png",
      type: "Group",
      desc: "Tata 1mg is India’s leading consumer health platform. It aspires to be the trusted health partner for all Indians and its mission is to make healthcare accessible, understandable and affordable ....",
      techstack: "MERN Stack,Chakra UI,HTML,CSS",
      livelink:"https://project-medicare-fp24844q1-fullstackcrud.vercel.app/",
      gitlink: "https://github.com/Prakashkumarjena700/Project_Medicare",
    },
    {
      name: "1800.flowers.com  - (Full Stack)",
      img: "https://user-images.githubusercontent.com/109611448/213923457-9a382633-b69c-4c7b-bb37-3212faacc999.png",
      type: "Group",
      desc: "1-800-Flowers.com, Inc. is a floral and foods gift retailer and distribution company in the United States. The company's focus, except for Mother's Day and Valentine's Day, is on gift baskets., . ,..",
      techstack: "MERN Stack,Chakra UI,HTML,CSS",
      livelink: "https://frontend-seven-ebon.vercel.app/",
      gitlink: "https://github.com/JyotiranjanGhibila/1800Flower.com",
    },
    {
      name: "Candy Crush",
      img: "https://user-images.githubusercontent.com/109611448/228455261-91680c90-90ad-4c0e-87bc-2150e6b0da6a.png",
      type: "Individual",
      desc: "Master match 3 or 4  puzzles with quick thinking and smart matching moves to be rewarded with sugar bonuses and tasty candy combos. Plan your moves by matching 3 or more candies in a row....",
      techstack: "HTML, CSS, React JS",
      livelink: "https://candy-topaz.vercel.app/",
      gitlink: "https://github.com/Janani1727/Candy_Crush",
    },
    {
      name: "Rock-Paper-Scissors",
      img: "https://user-images.githubusercontent.com/109611448/218800657-c22fa313-aff4-4a8f-ad75-d1611a5d7aad.png",
      type: "Individual",
      desc: " Rock paper scissors is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched ....",
      techstack: "HTML, CSS, React JS",
      livelink: "https://rps-janani1727.vercel.app/",
      gitlink: "https://github.com/Janani1727/Rock-Paper-Scissors",
    },

    {
      name: "Super Mario",
      img: "https://user-images.githubusercontent.com/109611448/229051532-f2a0bf96-504e-4692-8105-244b0cce02a0.png",
      type: "Individual",
      desc: " the game is to progress through levels by defeating enemies, collecting items and solving puzzles without dying. Power-up use is integral to the series......",
      techstack: "HTML, CSS, Kaboom JS",
      livelink: "https://comfy-pavlova-dd4d1c.netlify.app/",
      gitlink: "https://github.com/Janani1727/Super-Mario",
    },
   

   
    {
      name: "YouTube",
      img: "https://user-images.githubusercontent.com/109611448/214076913-6da9ef54-8886-4d3d-9f18-8ce28e3ca239.png",
      type: "Individual",
      desc: " YouTube is a global online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, is the second most .....",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://luminous-druid-c83136.netlify.app/",
      gitlink: "https://github.com/Janani1727/YouTube",
    },

 

    {
      name: "Intern Theory",
      img: "https://user-images.githubusercontent.com/109611448/214076765-a8e0728f-6e95-4b82-bd49-38c0f92efb75.png",
      type: "Individual",
      desc: "Intern Theory is an online internship portal created to bridge the gap between students seeking internships and companies looking business development of career......",
      techstack: "HTML ,CSS,JavaScript,React",
      livelink: "https://intent-com.vercel.app",
      gitlink: "https://github.com/Janani1727/lazy-name-5157",
    },

    {
      name: "Sugar Cosmetics",
      img: "https://user-images.githubusercontent.com/109611448/214076643-2b0d92a9-bbcf-42e7-9ed1-6e94175383c8.png",
      type: "Group",
      desc: "SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performan.The brand is inspired by and targeted towards bold, across......",
      techstack: "HTML, CSS,JS",
      livelink: "https://effortless-sunflower-25458d.netlify.app/",
      gitlink: "https://github.com/Janani1727/Marceline",
    },

    {
      name: "PharmEasy",
      img: "https://user-images.githubusercontent.com/109611448/214076830-46d1043d-0a41-4606-9618-9f634c86baff.png",
      type: "Group",
      desc: "  PharmEasy offers 1 lakh+ medicines and health products across various categories ,and teleconsultations thereby serving their healthcare needs. which  your online  medicine......",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://venerable-kleicha-918c6a.netlify.app/",
      gitlink: "https://github.com/Janani1727/lazy-name-5157",
    },

    {
      name: "Buffer",
      img: "https://user-images.githubusercontent.com/109611448/214076863-43190c43-98cb-4c36-a3aa-4a7f625718f3.png",
      type: "Individual",
      desc: " Buffer is a software application for the web and mobile , designed to manage accounts in social networks, Twitter, Facebook, Instagram, Instagram Stories, Pinterest  and LinkedIn, as well as analyze their.....",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://courageous-custard-0d0b9c.netlify.app",
      gitlink: "https://github.com/Janani1727/magnificent-celery-6982",
    },

    
    {
        name: "ShinChan-CSS",
        img: "https://github.com/Janani1727/man-css/assets/109611448/45aadc97-6ba8-4958-b7c7-833dfedef41b",
        type: "Individual",
        desc: "With the reference of cartoon character named shinchan........",
        techstack: "HTML, CSS",
        livelink: "https://spiffy-bunny-75571c.netlify.app",
        gitlink: "https://github.com/Janani1727/shinchan-css"
    }
    ,
    {
        name: "Man-CSS",
        img: "https://github.com/Janani1727/man-css/assets/109611448/b0b208c0-885f-4e7c-b3f2-0105168127d2",
        type: "Individual",
        desc: "With the reference of cartoon character........ ",
        techstack: "HTML, CSS",
        livelink: "https://magnificent-monstera-2c805f.netlify.app",
        gitlink: "https://github.com/Janani1727/man-css"
    }
    ,
    {
        name: "Doraemon",
        img: "https://user-images.githubusercontent.com/109611448/237424724-5e2d0386-b177-44f3-966b-92063eeeb5ff.png",
        type: "Individual",
        desc: "With the reference of cartoon character named Doraemon.......",
        techstack: "HTML, CSS",
        livelink: "https://astonishing-kitten-9e3f03.netlify.app",
        gitlink: "https://github.com/Janani1727/doraemon-css"
    }
  ];

  const [project, setProject] = useState(projectdata.slice(0, 6));

  const handleLoadMore = () => {
    if (project.length > 6) {
      setProject([...projectdata.slice(0, 6)]);
    } else {
      let temp = projectdata.slice(0, projectdata.length);
      setProject(temp);
    }
  };

  return (
    <Box
      id="projects"
      border={"0px solid white"}
      marginTop={["-150px", "-200px", "0px"]}
    >
      <Heading
        mr={["10%", "54%", "70%"]}
        fontSize={40}
        mt={"20px"}
        color={"#fe8a91"}
      >
        Projects
        <Text
          mt={["-40px", "-44px", "-42px"]}
          marginLeft={["280px", "260px", "320px"]}
        >
          <FaReact className="spin" color={"white"} />{" "}
        </Text>
      </Heading>

      <Box border={"0px solid red"} m={"auto"} w={"80%"} h={"auto"}>
        <Grid
          margin={"auto"}
          ml={["-5%", "0%", "0%"]}
          width={["110%", "95%", "100%"]}
          border={"0px solid white"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={["10px", "20px", "30px"]}
          rowGap={["10px", "20px", "20px"]}
        >
          {projectdata &&
            project.map((project) => {
              return (
                <Box
                  id="zoom"
                  mt={"40px"}
                  h={["95%", "100%", "98%"]}
                  W={["500px", "350px", "370px"]}
                  w={"full"}
                  bg={"whitesmoke"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={4}
                  overflow={"hidden"}
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
                      fontSize={["3xl", "3xl", "2xl"]}
                      textAlign={"left"}
                      fontFamily={"body"}
                    >
                      {project.name}
                    </Heading>

                    <Text fontSize={["xl", "2xl", "xl"]}>{project.desc}</Text>
                    <Text
                      fontWeight={"bold"}
                      textAlign={"center"}
                      fontSize={["xl", "2xl", "xl"]}
                    >
                      {project.techstack}
                    </Text>

                    <Flex gap={20} fontWeight={700}>
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          mt={"20px"}
                          ml={["1px", "40px", "20px"]}
                          h={"35px"}
                          w={"120px"}
                          bgColor={"#ff6188"}
                          border={"1px solid #ff6188"}
                          borderRadius={"5px"}
                          _hover={{ backgroundColor: "black", color: "white" }}
                        >
                          <Text display={"flex"} color={"white"}>
                            <Text
                              fontSize={"20px"}
                              style={{
                                textDecoration: "none",
                                color: "white",
                                display: "flex",
                              }}
                            >
                              Demo{" "}
                            </Text>
                            <Text fontSize={"21px"} ml={"8px"}>
                              <FaLink className="bounce" />
                            </Text>
                          </Text>
                        </Button>
                      </a>

                      <a
                        href={project.gitlink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          mt={"20px"}
                          ml={["-50px", "20px", "0px"]}
                          h={"35px"}
                          w={"120px"}
                          bgColor={"#ff6188"}
                          border={"1px solid #ff6188"}
                          borderRadius={"5px"}
                          _hover={{ backgroundColor: "black", color: "white" }}
                        >
                          <Text display={"flex"} color={"white"}>
                            <Text
                              fontSize={"20px"}
                              style={{
                                textDecoration: "none",
                                color: "white",
                                display: "flex",
                              }}
                            >
                              Github
                            </Text>
                            <Text ml={"10px"} fontSize={"22px"}>
                              {" "}
                              <AiOutlineGithub className="bounce" />
                            </Text>
                          </Text>
                        </Button>
                      </a>
                    </Flex>
                  </Stack>
                </Box>
              );
            })}
        </Grid>
      </Box>
      <Button
        backgroundColor={"#ff6188"}
        color={"white"}
        w={["40%", "30%", "15%"]}
        h={"50px"}
        borderRadius={"10px"}
        fontSize={"22px"}
        ml={["40px", "20px", "20px"]}
        mt={["70px", "100px", "50px"]}
        _hover={{
          color: "black",
        }}
        onClick={handleLoadMore}
      >
        {project.length <= 6 ? "view more" : "view less"}
      </Button>
    </Box>
  );
}
