import { Hero } from "../components/Hero"
import {Box} from '@chakra-ui/react'
import Navbar from '../components/Nabvar'
import Reviews from "../components/Reviews"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import Distributors from "../components/Distributors"
import CaptionCarousel from "../components/Carousel"
import { WhatsappButton } from "../components/WhatsappButton"

 const Home = () => {
  return(
    <Box as="main">
      <Navbar />
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        viewport={{once: false}}
      >
      <Hero />
      
      </motion.div>

      <WhatsappButton />
      <motion.div 
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 1}}
        viewport={{once: false}}
      >
      <CaptionCarousel />
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1}}
        viewport={{once: false}}
      >
        <Reviews />
      </motion.div>
    
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        viewport={{once: false}}
      >
      <Distributors />
      </motion.div>
      <Footer />
    </Box>
  )
}
export default Home