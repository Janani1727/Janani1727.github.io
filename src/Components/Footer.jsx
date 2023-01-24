import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Center, Box, Button, Text } from '@chakra-ui/react';
import { AiOutlineArrowUp } from "react-icons/ai"
import {BsHeartFill} from "react-icons/bs"
const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <Box mt={["190px","130px","150px"]} display={"flex"} height={"100px"} width={"100%"} backgroundColor={"black"}>
               <Box display={"flex"} ml={["6%","20%","30%"]}>
               <Text color={"white"} mt="6px"  fontSize={["14px","20px","28px"]} >
                 <BsHeartFill  color="red"/></Text>
                 <Text color={"white"} ml="10px"  fontSize={["14px","20px","28px"]} >   Designed and Developed by Janani</Text>
                 </Box>
                <Button   
                ml={["8%","20%","34%"]}
                    style={{
                        padding: "10px 10px 10px 10px",
                        float: "right",
                        position: "relative",
                    }}
                    onClick={() => scrollToTop()}
                >
                    <Center>
                        <AiOutlineArrowUp color='black' fontSize={["14px","20px","28px"]} />
                    </Center>
                </Button>
            </Box>
        </>
    )
}

export default Footer