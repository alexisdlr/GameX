import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Images from '../assets/Images';
export default function AboutHero() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
    <Flex
      w={'full'}
      minH={'100vh'}
      backgroundImage={
        Images.abouthero
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'text'}
            fontWeight={700}
            lineHeight={1.2}
            textShadow='1px 1px 6px #61CC89'
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Nuestra mision es brindarte un servicio unico y de calidad, encuentra los mejores juegos digitales.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'text'}
              rounded={'full'}
              color={'black'}
              px={5}
              _hover={{ opacity: .8 }}>
              Ver mas
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    </motion.div> 
  );
}