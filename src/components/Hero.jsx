import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CaptionCarousel from './Carousel';
import Images from '../assets/Images';
export function Hero() {
  return (
    <motion.div
    initial={{x:'100vw', opacity:0}}
    animate={{x:0, opacity: 1}}
    transition={{duration: .8}}
    >
    <Stack 
    minH={'80vh'} 
    direction={{ base: 'column-reverse', md: 'row' }} 
    alignItems={'center'} 
    maxW={1280} 
    gap={10}
    mx={'auto'}
    px={4} 
    my={2}
    >
      <Flex flex={1} mx={0} align={'center'} justify={'center'}  >
        <Stack spacing={6} mx={0} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
             >
              Juega con <Text as='span' color={'text'}>GAMEX</Text>
            </Text>
            <br />{' '}
            <Text color={'text'} as={'span'}>
              Desde el menor precio
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Somos la mejor plataforma en linea donde puedes adquirir consolas de videojuegos a un precio muy razonable!.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'text'}
              color={'black'}
              fontWeight={'bold'}
              _hover={{
                opacity: .8
              }}>
                Empieza ahora!
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} >
       
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
             Images.hero
            }
          />
     
      </Flex>
    </Stack>
    <CaptionCarousel />
    </motion.div>
  );
}