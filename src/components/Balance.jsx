import { 
  Flex,
  Heading,
  Text,
  Image,
  Button
} from "@chakra-ui/react"
import Images from "../assets/Images"
const Balance = ( ) => {
  return(
       <>
       <Flex maxW={1280} my={8} mx={'auto'} direction={'column'} px={4} justifyContent={'flex-start'}>
          <Heading  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} >
            <Text as={'h2'} color='text' >
              Saldo Digital  
            </Text>
          </Heading>
      </Flex>
      <Flex maxW={1280} mx={'auto'} my={8} px={4} gap={20} justify={'center'} flexWrap={'wrap'} variant='radial' >
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.sldxb}
            alt={`Picture of ${Images.xboxpass}`}
            roundedTop="lg"
            w={'full'}
            objectFit={'cover'}
            maxH={500}
          /> 
          <Button bg={'primary'} _hover={{opacity: .8}}>
            Agregar al carrito
          </Button>
        </Flex>
        <Flex direction={'column'} gap={5} justify={'center'} alignItems={'center'} > 
          <Image
            src={Images.sldps}
            alt={`Picture of ${Images.psdis}`}
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
            src={Images.sldbliz}
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
export default Balance