import {  Flex, Heading, Text, Image, Button } from "@chakra-ui/react"
import Images from "../assets/Images"

export const Memberships = () => {
  return(
    <>
      <Flex maxW={1280} my={8}  mx={'auto'} direction={'column'} px={4} justifyContent={'flex-start'}>
        <Heading  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} >
          <Text as={'h2'} color='text' >
           MEMBRESÍAS
          </Text>
        </Heading>
        <Text as={'p'} fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}>
          Encuentra tus planes favoritos para todas las consolas!.
        </Text>
      </Flex>
     
    
      <Flex maxW={1280} mx={'auto'} my={5} px={4} gap={20} justify={'center'} flexWrap={'wrap'} variant='radial' >
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.xboxpass}
            alt={`Picture of ${Images.xboxpass}`}
            roundedTop="lg"
            w={'full'}
            objectFit={'cover'}
            maxH={500}
          /> 
          <Button bg={'primary'} _hover={{opacity: .8}} >
            Agregar al carrito
          </Button>
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.xboxgold}
            alt={`Picture of ${Images.xboxgold}`}
            roundedTop="lg"
            w={'full'}
            objectFit={'cover'}
            maxH={500}
          /> 
          <Button bg={'primary'} _hover={{opacity: .8}} >
            Agregar al carrito
          </Button>
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.psplus}
            alt={`Picture of ${Images.psplus}`}
            rounded='3xl'
            w={'full'}
            objectFit={'cover'}
            maxH={300}
          /> 
          <Button bg={'primary'} _hover={{opacity: .8}} >
            Agregar al carrito
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
