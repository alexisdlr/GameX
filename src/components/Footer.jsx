import { Flex, Heading, Box, Center, Image, Icon } from "@chakra-ui/react"
import Images from "../assets/Images"
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return(
    <Box >
      <Flex w={'full'} direction={'column'} justify='center' mt={'20'} alignItems={'center'} py={5} >
        <Flex gap={5} justify='center'>
          <Image 
          src={Images.logo}
          alt='logo'
          maxW={50}
          maxH={50}
          rounded='full'
          />
        <Heading as={'h2'} color='text'>
          GAMEX
        </Heading>

        </Flex>
   
        <Flex gap={5} my={5}>
          <Box as="a" href="https://www.facebook.com/profile.php?id=100085535725822" target={'_blank'}>
            <Icon as={FaFacebook} h={7} w={7} _hover={{color:'text', transition: 'all 500ms ease-in-out'}} />
          </Box>
          <Box as="a" href="#" target={'_blank'}>
            <Icon as={FaTwitter} h={7} w={7} _hover={{color:'text', transition: 'all 500ms ease-in-out'}} />
          </Box>
          <Box as="a" href="#" target={'_blank'}>
            <Icon as={FaYoutube} h={7} w={7} _hover={{color:'text', transition: 'all 500ms ease-in-out'}} />
          </Box>
          <Box as="a" href="#" target={'_blank'}>
            <Icon as={FaInstagram} h={7} w={7} _hover={{color:'text', transition: 'all 500ms ease-in-out'}} />
          </Box>


        </Flex>
        <Center bg={'black'} w={'100vw'} h={'24'} >
          GameX, todos los derechos reservados 2022.
        </Center>
      </Flex>
    </Box>
  )
}
export default Footer