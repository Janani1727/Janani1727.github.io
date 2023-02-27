import  React , {useState , useEffect}from 'react';
import {Box,Flex,HStack,IconButton,useDisclosure,Stack,Text} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
 import NavLink from "../Components/Navlink"
import { Link } from 'react-scroll';
import fw20_0358_Janani_Jayaraman_Resume from "../Downloads/fw20_0358_Janani_Jayaraman_Resume.pdf"
import "../Components/styles"
// import { DownloadIcon } from "@chakra-ui/icons";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
  

];



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isscroll, setisscroll] = useState(false);

  function isScrolling() {
    if (window.scrollY > 80) {
    setisscroll(true);
    } else {
    setisscroll(false);
    }
}

useEffect(() => {
  window.addEventListener("scroll", isScrolling);
  return () => {
  window.removeEventListener("scroll");
  }
}, [])


  return (
    <>


      <Box  zIndex={1} bg={isscroll? "#fe8a91" : "#fe8a91"} fontWeight={isscroll? "600" : "400"}  color={isscroll? "black" : "white"}  position={"fixed"} width={"100%"} marginTop={"-50px"} justifyContent={"center"}>
      <Flex h={16} alignItems={'center'}  gap={1}>
      <Link to="/">
        <Box display={"flex"}>
        {/* <Image src={J} w={"120px"}  h={"200px"}/> */}
        <Text className='wobble'  ml={["20px","40px","50px"]} fontSize={["22px", "2xl", "3xl"]}  fontWeight={isscroll? "600" : "400"}  color={isscroll? "black" : "white"} > Janani
        </Text>
        </Box>
      </Link>
          <IconButton
          ml={["60%","75%","70%"]}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon color={"black"} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
         
            <HStack
              as={'nav'}
              spacing={12}
              ml={"90%"}
              display={{ base: 'none', md: 'flex' }}>
            
            {links.map((link, i) => (
              <NavLink
              
              fontSize={["lg", "xl", "2xl"]}
            
                key={i}
                to={link.id}
                name={link.name}
                // fontSize={25}
           
                onClick={() => onClose()}
              />
              
            
            ))}
              <Box   fontSize={["lg", "xl", "2xl"]}>


                <a
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link","_blank", "noreferrer"
                  )
                }}

                href={fw20_0358_Janani_Jayaraman_Resume}
                download
                // leftIcon={<DownloadIcon className="hithere" color={"black"} />} 
                >  
               
                   Resume 
                </a>
              </Box>
           
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={2}>
        

          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} 
          ml='50px'
          >
            <Stack as={'nav'} spacing={4}   >
            {links.map((link, i) => (
              <NavLink
              
                key={i}
                to={link.id}
                name={link.name}
                w="xm"
                
                onClick={() => onClose() }
              />
            ))}
            </Stack>
            
          </Box>
        ) : null}

        
      </Box>

     
</>
);
}