import { Hero } from "../components/Hero"
import {Box} from '@chakra-ui/react'
import Navbar from '../components/Nabvar'

 const Home = () => {
  return(
    <Box>
      <Navbar />
      <Hero />
    </Box>
  )
}
export default Home