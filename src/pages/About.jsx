import { Box } from "@chakra-ui/react"
import AboutHero from "../components/AboutHero"
import Features from "../components/Features"
import FeaturesGrid from "../components/FeaturesGrid"
import Footer from "../components/Footer"
import Navbar from "../components/Nabvar"
import { motion } from 'framer-motion'
import FacebookPage from "../components/FacebookPage"
import Contact from "../components/Contact"
const About = () => {
  return(
    <Box mx={'auto'} >
      <Navbar />
      <AboutHero />

      <motion.div
       initial={{opacity:0, x: 50}}
       whileInView={{opacity: 1, x: 0}}
       viewport={{once:true}}
       transition={{duration: 1}}
      >
        <Features />
      </motion.div>

      <motion.div
      initial={{opacity:0, x: 50}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once:true}}
      transition={{duration: 1}}
      >
        <FeaturesGrid />
      </motion.div>
      <Contact />
      <FacebookPage />
      <Footer />
    </Box>
  )
}

export default About