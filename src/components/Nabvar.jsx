import { 
  Image,
  List, 
  ListItem,  
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
   } from "@chakra-ui/react";
import logo from '../assets/gamexlogo.jpg'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return ( 
    
    <motion.div initial={{y:-500}} animate={{y:0}} transition={{delay:.5}}> 
      <Box as="header" maxW={1280} mx='auto' py={4} px={4} >
        <Flex as="nav" h={100} justifyContent={'space-between'} gap={8} alignItems='center'>
          <Box>
            <Image boxSize={100} borderRadius='full' src={logo} alt='logo' />
          </Box>
    
          <Flex as="ul" gap={2}>
          <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
            <List display='flex' gap={2} >
              <ListItem padding={2} _hover={{  color: "text", transition:'300ms' }} >
                <Link to='/'>
                  Home
                </Link>
              </ListItem>
              <ListItem padding={2} _hover={{  color: "text", transition:'300ms' }} >
                <Link to='/productos'>
                  Productos
                </Link>
              </ListItem>
              <ListItem padding={2} _hover={{  color: "text", transition:'300ms' }} >
                <Link>
                  Acerca de
                </Link>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
   );
}


export default Navbar;