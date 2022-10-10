import { 
  Box, 
  Flex, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input,
  Button,
  Textarea,
  Select
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nabvar";

const AddProduct = () => {

  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    imagen: '',
    rating: '',
    numReviews: ''
  })
  const URL = 'https://gamex-api-nodejs-production.up.railway.app/api/products'
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      const data = res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    } 
    useNavigate('/products') 
  }
  const handleChange=e=>{
    const {name, value}=e.target
  
      setProduct((prevState)=>({
        ...prevState,
        [name]: value
      }))
      console.log(product)
    

  }

  return(
    <Box>
      <Navbar />
      <Flex 
      direction={'column'} 
      align={'center'} 
      justifyContent={'center'}
      maxW={1350} 
      mx={'auto'} 
      pt={32}
      gap={16}
      >
        <Heading color='text' fontSize={{base: '3xl', md:'6xl'}}>
          Agrega tus productos!
        </Heading>

        <form style={{width: '80%'}} onSubmit={handleSubmit} >
          <FormControl py={8} px={{base: 5, md: 0}} w={{base: 'full'}}>
          <Flex direction={'column'} gap={4}>
              <Box>
                <FormLabel>Nombre</FormLabel>
                <Input type='text' name="nombre" onChange={handleChange} />
              </Box>
              <Box>
              <FormLabel>Descripcion</FormLabel>
              <Textarea placeholder='Descripcion del producto' name="descripcion" onChange={handleChange}  />
              </Box>
              <Box>
                <FormLabel>Imagen </FormLabel>
                <Input type='text' name="imagen" onChange={handleChange}  />
              </Box>
              <Box>
                <FormLabel>Precio </FormLabel>
                <Input type='number' name="precio" onChange={handleChange}  />
              </Box>
              <Box>
                <FormLabel>¿Cuál es la categoria? </FormLabel>
                <Select name='categoria' placeholder='Selecciona una opción' onChange={handleChange} >
                  <option >xbox</option>
                  <option >Playstation</option>
                </Select>
              </Box>           
              <Flex gap={8} align={'center'}>
                <Box>
                  <FormLabel>Rating </FormLabel>
                  <Input type='number' name="rating" onChange={handleChange}  />
                </Box>
                <Box>
                  <FormLabel>Numero de vistas </FormLabel>
                  <Input type='number' name="numReviews" onChange={handleChange}  />
                </Box>
                <Box>
                  <Button
                  mt={5}
                  bg='primary'
                  type='submit'
                  _hover={{opacity: .8}}
                >
                  Agregar
                </Button>
                </Box>
              </Flex>
            </Flex>
              
            
            </FormControl>
         
        </form>
      </Flex>
      
    </Box>
  )
}

export default AddProduct