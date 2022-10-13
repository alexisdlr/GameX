import {  Flex, Heading, Text, Image } from "@chakra-ui/react"
import Images from "../assets/Images"
const Distributors = () => {
  return(
    <>
       <Flex maxW={1280} my={8} mx={'auto'} direction={'column'} px={4} justifyContent={'flex-start'}>
          <Heading  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} >
            <Text as={'h3'} color='text' >
               Distribuidores Oficiales
            </Text>
          </Heading>
      </Flex>
      <Flex maxW={1280} mx={'auto'} my={5} px={4} gap={20} justify={'center'} flexWrap={'wrap'} variant='radial' >
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.xboxdis}
            alt={`Picture of ${Images.xboxpass}`}
            roundedTop="lg"
            w={'full'}
            objectFit={'cover'}
            maxH={500}
          /> 
        
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.psdis}
            alt={`Picture of ${Images.psdis}`}
            roundedTop="lg"
            w={'full'}
            objectFit={'cover'}
            maxH={500}
          /> 
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.steam}
            alt={`Picture of ${Images.psplus}`}
            rounded='3xl'
            w={'full'}
            objectFit={'cover'}
            maxH={300}
          /> 
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.blizzard}
            alt={`Picture of ${Images.psplus}`}
            rounded='3xl'
            w={'full'}
            objectFit={'cover'}
            maxH={300}
          /> 
        </Flex>
        
      </Flex>
    </>
 
  )
}
export default Distributors