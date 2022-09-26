import { 
  Flex, 
  FormControl, 
  FormLabel, 
  Input, 
  FormHelperText, 
  Heading, 
  Button,
  Textarea
} from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form.current)
    emailjs.sendForm('service_s2m1uop', 'template_4qdqc3o', form.current, 'Kv7g0EJZwiraYrVOF')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  
  }
  return(
    <Flex maxW={'100%'} my={16} justify='center' alignItems={'center'} flexDirection={'column'}>
      <Heading fontSize={{base: '2xl', md: '6xl'}} color='text'>
        Contáctanos!
      </Heading>
      <form onSubmit={handleSubmit} ref={form} >
      <FormControl px={{base: 5, md: 0}} w={{base: 'full' , md: '600px'}}>
        <FormLabel>Nombre</FormLabel>
        <Input type='text' name="name" />
        <FormLabel>Mensaje</FormLabel>
        <Textarea placeholder='Escribe aqui tu mensaje' name="message" />
        <FormLabel>Email </FormLabel>
        <Input type='email' name="email" />
        <FormHelperText>Nunca revelaremos tu email.</FormHelperText>
        <Button
            mt={4}
            bg='primary'
            type='submit'
            _hover={{opacity: .8}}
          >
            Enviar
          </Button>
      </FormControl>
      
      </form>
    
    </Flex>
    
  )
}
export default Contact