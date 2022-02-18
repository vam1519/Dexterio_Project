import { ChakraProvider, Img } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Art from "../Art/art";
import "../Art/art.css";
import './index.css'
import '../navbar/navbar.css';
import '../header/header.css';
import '../feature/feature.css';
import '../features/features.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (

    
    <ChakraProvider>
      
      <Component {...pageProps}>
        
      </Component>
    
    </ChakraProvider>
 
  );
}

export default MyApp;