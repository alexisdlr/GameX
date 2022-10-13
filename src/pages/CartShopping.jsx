import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Nabvar'
import ProductAddToCart from '../components/Product'
import { useState } from 'react'
import {motion} from 'framer-motion'
import { useEffect } from 'react'
import Paypal from '../components/Paypal'
let incomingProducts = []
export const addItemToCart = (newItem) => {
	incomingProducts.push(newItem)

	let productsMap = incomingProducts.map((item) => [item.id, item]);

	let productsMapArr = new Map(productsMap);

	incomingProducts = [...productsMapArr.values()]
}

export const deleteItemToCart = (itemClicked) => {
	let newIncomingProducts = incomingProducts.filter(
		(el) => el.id != itemClicked.id
	)
	incomingProducts = newIncomingProducts;
}


function CartShopping() {
  const [stateN, setStateN] = useState(incomingProducts);
  const [checkout, setCheckout] = useState(false)

  let initialValue = 0
  const total = stateN
  .map((item) => [item.precio])
  .reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), initialValue)

  
  return (
    <Box minH={'100vh'}>
      <Navbar />
    <motion.div
       initial={{opacity:0, x: 50}}
       whileInView={{opacity: 1, x: 0}}
       viewport={{once:true}}
       transition={{duration: 1}}
      >
      <Flex 
      pt={32} 
      maxW={1350}
      mx={'auto'} 
      direction={'column'} 
      alignItems={'center'} >
        <Heading alignSelf={'start'} color={'text'}>
          Bienvenido a tu carrito personal!
        </Heading>
      {incomingProducts.length ? (
					  <Box>
						  <ProductAddToCart productData={stateN} isCart={true} />
              { checkout ? (
                <Paypal total={total}/>
              ) : (
                <Button 
                bg={'text'} 
                color={'#000'} 
                _hover={{opacity: .7}}
                onClick={setCheckout(true)}
                fontWeight={'bold'}>
                    Pagar ${
                      total
                    }
                </Button> 
              ) }
          
						<Box>
            
            <Text px={{base: 8, md: 0}} fontSize={{base: '2xl', md: '5xl'}} fontWeight={'semibold'} py={5}>
              Total a pagar = <Text as={'span'} color='text'>$</Text>{
                total
              }
            </Text>
              <Flex px={{base: 8, md: 0}} direction={'column'} gap={5}>
                <Text>
                  Seleccione los productos que quieres eliminar y da click en "Eliminar productos".
                </Text>
                <Button 
                  color={'red.500'} 
                  bg={'transparent'}
                  border={'1px solid red'}
                  _hover={{opacity: .7, bg: 'red.500', color: 'white'}}
                  onClick={() => setStateN(incomingProducts)}>
                  Eliminar productos
                </Button>
              </Flex>
						</Box>
					</Box>
				) : (
					<Box py={8} minH={'500px'} display={'flex'} alignItems={'center'}>
						<Text color={'red.600'} fontSize={{base: '2xl', md: '4xl'}} fontWeight={'bold'}>Lo sentimos, aún no tienes productos en tu carrito.</Text>
					</Box>
				)}
      </Flex>
      </motion.div>
    </Box>
  )
}

export default CartShopping