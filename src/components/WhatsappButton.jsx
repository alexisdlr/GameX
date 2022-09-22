import { Button, Image } from "@chakra-ui/react"
import wha from '../assets/whatsapp.png'
export const WhatsappButton = () => {
  return(
    <Button 
    as={'a'} 
    href='https://wa.me/528621204545/?text=Hola' 
    target={'_blank'}
    position={'fixed'}
    left={'5'}
    zIndex='9999'
    top='80'
    w={'20'} 
    height={'20'}  
    bg={'transparent'}
    rounded={'full'}

    >
    <Image  
    src={wha}
    alt='whatsapp button'
    rounded={'full'}
    w='full'
    />
    </Button>
 
  )
}
 