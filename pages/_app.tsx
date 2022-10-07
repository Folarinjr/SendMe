import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {SendMeProvider} from '../context/SendMeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (  
      <ChakraProvider>
        <SendMeProvider>
          <Component {...pageProps} />
        </SendMeProvider>
        
      </ChakraProvider>
  )
}

export default MyApp
