import { Box, Text, Heading, Flex } from "@chakra-ui/react"
import Balance from "../components/Balance"
import Footer from "../components/Footer"
import { Memberships } from "../components/Memberships"
import Navbar from "../components/Nabvar"
import ProductAddToCart from "../components/Product"
import { motion } from 'framer-motion'
import { useState, useEffect } from "react"

const Products = ( ) => {
  const [products, setProducts] = useState(null)

  const handleClick = async (e) => {
    try{
      await fetch ('https://gamex-api-nodejs-production-89c6.up.railway.app/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.filter(item => item.categoria === e.target.value)))
     }
     catch (error){
       console.log(error)
     }

  }

  const getProducts = async () => {
      try{
        await fetch ('https://gamex-api-nodejs-production-89c6.up.railway.app/api/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setProducts(data.filter(item => item.categoria === 'xbox'))

        })
      }
      catch (error){
        console.log(error)
      }
  }
  useEffect(() => {
    getProducts()
  },[])
  return(

    <Box mx={'auto'} px={4} >
      <Navbar />
        <Flex maxW={1280} mx={'auto'} px={4} py={28} justifyContent={'start'} >
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
                En nuestra tienda podrás encontrar Videojuegos para las nuevas consolas como <Text as='span' color={'text'}>Xbox</Text> o <Text color={'text'} as={'span'}>PlayStation</Text>
                </Text>
          </Heading>
        </Flex>
     
      <Box as="section">
        <ProductAddToCart productData={products} click={handleClick} isCart={false}/>
      </Box>
      <Box as="section" >
      <motion.div
      initial={{opacity:0, x: 50}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once:false}}
      transition={{duration: 1}}
      >
        <Memberships />
      </motion.div>
      </Box>
      <Box as="section">
        <motion.div
        initial={{opacity:0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once:false}}
        transition={{duration: 1}}
        >
          <Balance />
        </motion.div>
      </Box>
      <Footer />
    </Box>
  )
}
export default Products
