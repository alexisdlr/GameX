import { Box, Text, Heading, Flex } from "@chakra-ui/react"
import { Memberships } from "../components/Memberships"
import Navbar from "../components/Nabvar"
import ProductAddToCart from "../components/Product"

const Products = ( ) => {
  return(

    <Box mx={'auto'} px={4} >
      <Navbar />
        <Flex maxW={1280} mx={'auto'} px={4} justifyContent={'start'} >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'h2'}
              my={6}
             >
             Productos
              </Text>
              <Text
              as={'h2'}
              fontSize='2xl'
             >
              En nuestra tienda podrás encontrar Videojuegos para las nuevas consolas como <Text as='span' color={'text'}>Xbox</Text> o   <Text color={'text'} as={'span'}>
              PlayStation
              </Text>
              
              
              </Text>
          
          </Heading>
        </Flex>

      <Box>
        <ProductAddToCart />
      </Box>
      <Box >
        <Memberships />
      </Box>
    </Box>
  )
}
export default Products