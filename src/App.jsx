import React, {Suspense, lazy} from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'


const Home = lazy(() => import('./pages/home'))
const Products = lazy(() => import('./pages/products'))
const About = lazy(() => import('./pages/About'))
const AddProduct = lazy(() => import('./pages/addProduct'))
const CartShopping = lazy(() => import('./pages/CartShopping'))
function App() {

  return (
    <ChakraProvider theme={theme} >
      <div className="App">  
        <BrowserRouter>
          <Routes>
          <Route index path="/" element={
              <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval />
                </Flex>
              }>
                <Home />

              </Suspense>
            }
            />
            <Route path="/productos" element={
               <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval />
                </Flex>
              }>
                <Products />

              </Suspense>
            }
            />
               <Route path="/acercade" element={
               <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval />
                </Flex>
              }>
                <About />

              </Suspense>
            }
            />
            <Route path="/admin" element={
               <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval />
                </Flex>
              }>
                <AddProduct />

              </Suspense>
            }
            />
            <Route path="/cart" element={
               <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval />
                </Flex>
              }>
                <CartShopping />

              </Suspense>
            }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}

export default App
