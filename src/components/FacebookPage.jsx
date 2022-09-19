import { Flex, Heading } from '@chakra-ui/react'
const FacebookPage = () => {
  return(
    <Flex direction={'column'} alignItems={'center'} justify={'center'} my={8} backdropBlur={'2px'} >

        <Heading mt={32} mb={8} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'text'} >
          Siguenos en Facebook
        </Heading>
         <iframe 
         src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100085535725822&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
         width={500} 
         height={500} 
         style={{border: 'none', overflow: 'hidden'}} 
         scrolling={'no'} 
         frameBorder={2} 
         allowFullScreen={true} 
         allow={"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"} />

        <Heading mt={32} mb={8} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}  color={'text'} >
          Ubicación
        </Heading>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.154331490409!2d-100.78377688509677!3d28.41459968250423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f55013bf9545f5%3A0x7177bf2f3db40988!2sMina%20La%20Encantada%2015%2C%202%20de%20Agosto%2C%2026176%20Nava%2C%20Coah.%2C%20M%C3%A9xico!5e0!3m2!1spt-BR!2sbr!4v1663596614285!5m2!1spt-BR!2sbr" width={1280} height={450} 
        style={{border: 0, borderRadius: '8px'}} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" />
    </Flex>
  )
}
export default FacebookPage