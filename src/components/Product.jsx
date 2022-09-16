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
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useEffect, useState } from 'react';


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

  const getProducts = async () => {
      try{
       await fetch('http://localhost:3000/juegos')
       .then(res => res.json())
       .then(data => setProducts(data))
        
      }
      catch (error){
        console.log(error)
      }
  }
  useEffect(() => {
    getProducts()
  })

  return (
    <Flex p={50} flexWrap='wrap' gap={8} w="full" alignItems="center" justifyContent="center">

      {products ? products.map(data => (

        <Box
        bg={useColorModeValue('white', 'gray.800')}
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
              {data.precio.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
            )) :''}
    
    </Flex>
  );
}

export default ProductAddToCart;