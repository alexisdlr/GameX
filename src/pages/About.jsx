import { Box } from "@chakra-ui/react"
import AboutHero from "../components/AboutHero"
import Footer from "../components/Footer"
import Navbar from "../components/Nabvar"

const About = () => {
  return(
    <Box mx={'auto'} >
      <Navbar />
      <AboutHero />
      <Footer />
    </Box>
  )
}

export default About