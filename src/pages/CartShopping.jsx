import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Nabvar'
import ProductAddToCart from '../components/Product'
import { useState } from 'react'

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
  console.log(incomingProducts)
  console.log(stateN)
  return (
    <Box minH={'80vh'}>
      <Navbar />
      <Flex pt={32} direction={'column'} alignItems={'center'} >
        <Heading>
          Bienvenido a tu carrito personal!
        </Heading>
      {incomingProducts.length ? (
					<div >
						<ProductAddToCart productData={stateN} isCart={true} />
						<div>
							<p>
								Select the products to be deleted and click "Delete products".
							</p>
							<Button onClick={() => setStateN(incomingProducts)}>
								Delete products
							</Button>
						</div>
					</div>
				) : (
					<Box>
						<Heading>Lo sentimos, aún no tienes productos en tu carrito.</Heading>
					</Box>
				)}
      </Flex>
    </Box>
  )
}

export default CartShopping