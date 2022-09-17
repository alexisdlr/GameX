import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
      variants:{
        'radial': {
          bg:'radial-gradient(circle, rgba(16,19,48,1) 73%, rgba(0,0,0,1) 100%)',
        }

      },
  styles: {
    global: {
      // styles for the `body`
      body: {
     
        bg: 'linear-gradient(201deg, rgba(26,32,44,1) 25%, rgba(0,1,20,1) 82%)',
        color: 'white',
      },
    },
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    primary: '#241C54',
    text: '#54FF90',

    // ...
  },
})

export default theme