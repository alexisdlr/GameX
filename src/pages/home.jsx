import { Hero } from "../components/Hero"
import {Box} from '@chakra-ui/react'
import Navbar from '../components/Nabvar'
import Reviews from "../components/Reviews"
import { motion } from "framer-motion"
import Footer from "../components/Footer"

 const Home = () => {
  return(
    <Box as="main">
      <Navbar />
      <Hero />
      <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1}}
        viewport={{once: false}}
      >
        <Reviews />
      </motion.div>
      <Footer />
    </Box>
  )
}
export default Home