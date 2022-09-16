import React, {Suspense, lazy} from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'


const Home = lazy(() => import('./pages/home'))
const Products = lazy(() => import('./pages/products'))

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
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}

export default App
