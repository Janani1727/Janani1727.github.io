import React from "react";
import Zoom from "react-reveal/Zoom";
import {  Heading, Image,  Box, Text} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
const Stats = () => {
  return (
    <>
      <Box mt={["200px", "80px", "100px"]}>
        <Heading
          mr={["10%", "60%", "60%"]}
          fontSize={["30px", "30px", "40px"]}
          color={"#00b9e8"}
        >
          My Github Stats
          <Text
            mt={"-38px"}
            fontSize={["30px", "30px", "40px"]}
            marginLeft={["300px", "270px", "470px"]}
          >
            <FaGithub color="white" className="wobble" />
          </Text>
        </Heading>

        <Box>
          <Box
            display={["inline", "inline", "flex"]}
            width={"79%"}
            margin={"auto"}
          >
            <Zoom>
              <Image
                ml={["10px", "20px", "0px"]}
                width={["95%", "95%", "100%"]}
                mt={["-30px", "30px", "30px"]}
                height={"300px"}
                src="https://github-readme-stats.vercel.app/api?username=janani1727&show_icons=true&locale=en&theme=algolia"
              />
            </Zoom>

            <Zoom>
              <Image
                ml={["10px", "20px", "5px"]}
                width={["95%", "95%", "100%"]}
                mt={["-150px", "10px", "30px"]}
                height={"300px"}
                src="https://github-readme-streak-stats.herokuapp.com/?user=janani1727&theme=algolia"
              />
            </Zoom>
          </Box>
          {/* <Grid  mt={"50px"} mb={"50px"}>
            <Zoom>
              <GridItem height={"90%"}>
                <Image
                  ml={["10px", "20px", "160px"]}
                  mt={["-110px", "-30px", "-20px"]}
                  width={["95%", "105%", "78%"]}
                  height={["95%", "95%", "100%"]}

                  border={"1px solid white"}
                  borderRadius={"10px"}
                  src="https://github-readme-activity-graph.vercel.app/graph?username=janani1727&theme=react"
                />
              </GridItem>
            </Zoom>
          </Grid> */}
          <Zoom>
            <Box
              border={"2px solid white"}
              borderRadius={"10px"}
              backgroundColor={"#282a36"}
              padding={[4, 8, 10]}
              color={"#00b9e8"}
              margin={"auto"}
              textAlign={"left"}
              mt={["-30px", "-10px", "30px"]}
              fontSize={["12px", "20px", "20px"]}
              width={["95%", "95%", "78%"]}
            >
              <GitHubCalendar
                username="Janani1727"
                blockSize={20}
                blockMargin={6}
                color={"#00b9e8"}
              />
            </Box>
          </Zoom>
        </Box>
      </Box>
    </>
  );
};

export default Stats;
