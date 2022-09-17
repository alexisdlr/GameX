import { Heading, Flex, Box, Text, Image} from "@chakra-ui/react"
import { useState, useEffect } from "react"



const Reviews = ( ) => {
  const [reviews, setReviews] = useState(null)

  const getReviews = async () => {
    try{    
      await fetch('http://localhost:3000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getReviews()
  })
  
  return(
    <Flex maxW={1280} px={4} mx={'auto'} direction={'column'} mt={8} >
      <Heading color={'text'} my={5} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
        Nuestros clientes opinan:
      </Heading>

      <Flex justify={'center'} alignItems={'center'} gap={8} wrap='wrap' >
        {reviews ? reviews.map(review => (
          <Box 
          key={review.id} 
          maxW='80' 
          minH={'40'} 
          bg={'black'} 
          rounded={'lg'} 
          textAlign='center'
          p={4}
          >
            <Flex justify={'center'}>
              <Image
              src={review.image}
              alt={`image of ${review.nombre}`}
              rounded={'full'}
              maxW={'10'}
              />
            </Flex>
            <Text color='GrayText' my={4}>
              {review.review}
            </Text>
            <Text as={'h2'} fontWeight='bold'>
              {review.nombre}
            </Text>
          </Box>

        )) : ''}
      </Flex>
    </Flex>
  )
}

export default Reviews