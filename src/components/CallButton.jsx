import {
  Button,
  Image
} from '@chakra-ui/react'
import {AiFillPhone} from 'react-icons/ai'
import phone from '../assets/phone.png'
const CallButton = () => {
  return(
    <Button 
    as={'a'} 
    href='tel:+528621204545' 
    target={'_blank'}
    position={'fixed'}
    left={'5'}
    zIndex='9999'
    top='60'
    w={'20'} 
    height={'20'}  
    bg={'transparent'}
    rounded={'full'}

    >
    <Image  
    src={phone}
    alt='whatsapp button'
    rounded={'full'}
    w='full'
    />
    </Button>
  )
}
export default CallButton
//href="tel:+34678567876"