import Head from "next/head";
import Art from "../Art/art";
import { Box, Container, Text } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Features from "../features/features";
import ProductSimple from '../Card'
import Img1 from './1.jpeg'
export default function Home() {
  return (
    
    <div className="box">
      <Head>
        <title> Dexterio Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="gradient__bg">
      <Navbar></Navbar>  
      </div>
      
      
      <div className="gradient__bg">
      <Box overflow="hidden"  >
        <Header/>
        
      </Box>
      </div>

      <div className="gradient__bg">
        <Features></Features>
      </div>

      <div className="gradient__bg">
      <Art></Art>
      </div>
     
    </div>
    
  );
}