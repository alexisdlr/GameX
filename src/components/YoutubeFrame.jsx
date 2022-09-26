import { Flex } from '@chakra-ui/react' 
const YoutubeFrame = () => {
  return(
    <Flex my={'14'} justify={'center'} alignItems={'center'} >
       <iframe width="800" height="500" src="https://www.youtube.com/embed/gBAg07Ii8Hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Flex>
   
  )
}
export default YoutubeFrame