import { Box } from "@chakra-ui/react"
import AboutHero from "../components/AboutHero"
import Features from "../components/Features"
import FeaturesGrid from "../components/FeaturesGrid"
import Footer from "../components/Footer"
import Navbar from "../components/Nabvar"

const About = () => {
  return(
    <Box mx={'auto'} >
      <Navbar />
      <AboutHero />
      <Features />
      <FeaturesGrid />
      <Footer />
    </Box>
  )
}

export default About