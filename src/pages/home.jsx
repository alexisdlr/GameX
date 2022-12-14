import { Hero } from "../components/Hero"
import {Box} from '@chakra-ui/react'
import Navbar from '../components/Nabvar'
import Reviews from "../components/Reviews"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import Distributors from "../components/Distributors"
import CaptionCarousel from "../components/Carousel"
import { WhatsappButton } from "../components/WhatsappButton"
import CallButton from "../components/CallButton"
import YoutubeFrame from "../components/YoutubeFrame"

 const Home = () => {
  return(
    <Box as="main">
      <Navbar />
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
      <Hero />
      
      </motion.div>

      <WhatsappButton />
      <CallButton />
      <motion.div 
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
      <CaptionCarousel />
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Reviews />
      </motion.div>
    <YoutubeFrame />
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
      <Distributors />
      </motion.div>
      <Footer />
    </Box>
  )
}
export default Home