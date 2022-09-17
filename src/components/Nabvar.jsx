import { 
  Image,
  List, 
  ListItem,  
  Box,
  Flex,
 
   } from "@chakra-ui/react";
import logo from '../assets/gamexlogo.jpg'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'
import {useState} from 'react'
function Navbar() {
  const [open, setOpen] = useState(null)
  return ( 
    <motion.div initial={{y:-500}} animate={{y:0}} transition={{delay:.5}}> 
      <Box as="header" maxW={1280} mx='auto' py={4} px={4} >
        <Flex as="nav" h={100} justifyContent={'space-between'} gap={8} alignItems='center'>
          <Box>
            <Image boxSize={100} borderRadius='full' src={logo} alt='logo' />
          </Box>
    
          <Flex as="ul" gap={2}>
          <Flex alignItems={'center'}>
            
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
                <Link to='/acercade'>
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