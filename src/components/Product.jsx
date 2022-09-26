import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import games from '../db/games';

function Rating({ rating, numReviews }) {
 
  return (
    <Box d="flex" flexDir={'row'} alignItems="center">
      {Array(5)
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i}  />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  const [products, setProducts] = useState(null)

  const handleClick = async (e) => {
    try{
        setProducts(games.filter(item => item.categoria === e.target.value))
      
     }
     catch (error){
       console.log(error)
     }

  }

  const getProducts = async () => {
      try{
        await fetch ('http://localhost:3000/api/products')
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

  return (
    <>
     <Flex maxW={1280} mx={'auto'} px={4} my={5} gap={6} alignItems={'center'} >
        <Text 
        color='text' 
        as={'p'} 
        fontWeight='bold'
        fontSize={{base: 'sm', md: '2xl', lg:'2xl'}} >
          Selecciona tu consola favorita:
        </Text>
        <Button 
        value='xbox' 
        onClick={handleClick} 
        bgColor='text' 
        color={'black'}
        _hover={{opacity: .8}}
        >
          Xbox
        </Button>
        <Button 
        value='Playstation' 
        onClick={handleClick} 
        bgColor='primary'  
        _hover={{opacity: .8}} >
          Playstation
        </Button>
     
      </Flex>
      <Flex p={50} flexWrap='wrap' gap={8} w="full" alignItems="center" justifyContent="center">
      {products ? products.map(data => (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        key={data.id}
        >

        <Box
        bg={useColorModeValue('gray.800', 'transparent')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imagen}
          alt={`Picture of ${data.nombre}`}
          roundedTop="lg"
          w={'full'}
          objectFit={'cover'}
          maxH={500}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.nombre}
            </Box>
           
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display='flex' >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>
          <Box
              fontSize="small"
              fontWeight="light"
              as="p"
              isTruncated>
        
             {data.descripcion}
          
            </Box>
          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.precio}
            </Box>
          </Flex>
        </Box>
      </Box>
      </motion.div>
            )) :''}
    
    </Flex>
    
    </>
  );
}

export default ProductAddToCart;