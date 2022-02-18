import Image from 'next/image'
import Img1 from './1.jpeg'
import Img2 from './2.jpeg'
import Img3 from './3.jpg'
import Img4 from './4.jpg'
import Img5 from './5.jpg'
import Img6 from './6.jpeg'
import Img7 from './1.jpeg'
import Img8 from './2.jpeg'
import Img9 from './3.jpg'
import Img10 from './4.jpg'
import Img11 from './5.jpg'
import Img12 from './6.jpeg'
import { Box, Container, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, UseEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import ProductSimple from '../Card'
const Art = ()=>{

    let data =[
        {
            id: 1,
            imgSrc:Img1,
            
        },
        {
            id: 2,
            imgSrc:Img2,
        },
        {
            id: 3,
            imgSrc:Img3,
        },
        {
            id: 4,
            imgSrc:Img4,
        },
        {
            id: 5,
            imgSrc:Img5,
        },
        {
            id: 6,
            imgSrc:Img6,
        },
        {
            id: 7,
            imgSrc:Img7,
        },
        {
            id: 8,
            imgSrc:Img8,
        },
        {
            id: 9,
            imgSrc:Img9,
        },
        {
            id: 10,
            imgSrc:Img10,
        },
        {
            id: 11,
            imgSrc:Img11,
        },
        {
            id: 12,
            imgSrc:Img12,
        },
        {
            id: 13,
            imgSrc:Img1,
        },
        {
            id: 14,
            imgSrc:Img2,
        },
        {
            id: 15,
            imgSrc:Img3,
        },
        {
            id: 16,
            imgSrc:Img4,
        },
        {
            id: 17,
            imgSrc:Img5,
        },
        {
            id: 18,
            imgSrc:Img6,
        },
        {
            id: 19,
            imgSrc:Img7,
        },
        {
            id: 20,
            imgSrc:Img8,
        },
        {
            id: 21,
            imgSrc:Img9,
        },
        {
            id: 22,
            imgSrc:Img10,
        },
        {
            id: 23,
            imgSrc:Img11,
        },
        {
            id: 24,
            imgSrc:Img12,
        },
        {
            id: 1,
            imgSrc:Img1,
            
        },
        {
            id: 2,
            imgSrc:Img2,
        },
        {
            id: 3,
            imgSrc:Img3,
        },
        {
            id: 4,
            imgSrc:Img4,
        },
        {
            id: 5,
            imgSrc:Img5,
        },
        {
            id: 6,
            imgSrc:Img6,
        },
        {
            id: 7,
            imgSrc:Img7,
        },
        {
            id: 8,
            imgSrc:Img8,
        },
        {
            id: 9,
            imgSrc:Img9,
        },
        {
            id: 10,
            imgSrc:Img10,
        },
        {
            id: 11,
            imgSrc:Img11,
        },
        {
            id: 12,
            imgSrc:Img12,
        },
        {
            id: 13,
            imgSrc:Img1,
        },
        {
            id: 14,
            imgSrc:Img2,
        },
        {
            id: 15,
            imgSrc:Img3,
        },
        {
            id: 16,
            imgSrc:Img4,
        },
        {
            id: 17,
            imgSrc:Img5,
        },
        {
            id: 18,
            imgSrc:Img6,
        },
        {
            id: 19,
            imgSrc:Img7,
        },
        {
            id: 20,
            imgSrc:Img8,
        },
        {
            id: 21,
            imgSrc:Img9,
        },
        {
            id: 22,
            imgSrc:Img10,
        },
        {
            id: 23,
            imgSrc:Img11,
        },
        {
            id: 24,
            imgSrc:Img12,
        },
        
    ]

    const [noOfElement,setnoOfElement]=useState(6);
    const loadMore   = ()=>{
        setnoOfElement(noOfElement+6);
    } 


    const slice=data.slice(0, noOfElement);


    return(
       <div>
           
        <div className="art">
            {slice.map((item,index)=>{
                return(

                    <div className="zoom" key={index} >
                           <Box overflow="hidden" maxH="100vh" minW="60vh">
                           <Image       rounded={'lg'}
              height={400}
              width={400}
              objectFit={'cover'}
              src={item.imgSrc}/>
                           </Box>
                            
                    </div>

                )
            })}
        <p></p>
        
        </div>
        <div className='button'>
        <Button loadingText isFullWidth className='button'colorScheme='blackAlpha' variant='solid' size='lg'
        onClick={()=> loadMore()}
        
        >
            
               Load More
            
            
            </Button>
        </div>
        </div>
        
    )

}
export default Art;
 