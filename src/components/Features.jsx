import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoSearchSharp
} from 'react-icons/io5';
import { GrSecure } from 'react-icons/gr'
import { GiRapidshareArrow } from 'react-icons/gi'
import Images from '../assets/Images';
const Feature = ({ text, icon, iconBg } ) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return(
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={'uppercase'}
                color={'text'}
                fontWeight={600}
                fontSize={'sm'}
                bg={'primary'}
                p={4}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Nuestra historia
              </Text>
              <Heading>Qué es GameX?</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
              Somos una tienda digital donde podras encontrar juegos digitales, membresías y mucho mas para distintas plataformas y consolas.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Feature
                  icon={
                    <Icon as={ GiRapidshareArrow } color={'text'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('primary', 'primary')}
                  text={'Compra rapida'}
                />
                <Feature
                  icon={<Icon as={GrSecure} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={'Entrega rapida y segura'}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'Disponibilidad amplia'}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                Images.aboutfeature
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      );
    }
  export default Features
