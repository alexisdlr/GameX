import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import {  FcInTransit } from 'react-icons/fc';
import {MdVideogameAsset} from 'react-icons/md'
import {SiExpressvpn} from 'react-icons/si'

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'text'}
        rounded={'full'}
        bg={'primary'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}  color={'text'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function FeaturesGrid() {
  return (
    <Box maxW={1280} p={4} mx={'auto'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={MdVideogameAsset} w={10} h={10} />}
          title={'GameX es seguro'}
          text={
            'Siempre nos hemos preocuopado por la seguridad de nuestros clientes, compra con nosotros!.'
          }
        />
        <Feature
          icon={<Icon as={SiExpressvpn} w={10} h={10} />}
          title={'Los juegos mas populares'}
          color={'text'}
          text={
            'Nos enfocamos en buscar las nuevas tendencias para que disfrutes los juegos mas populares!.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          color={'text'}
          title={'Entrega instantánea'}
          text={
            'No esperes demasiado, te entregamos tus productos de manera instantanea.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}