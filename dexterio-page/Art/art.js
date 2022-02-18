import Image from 'next/image'
import { Box, Container, Text } from "@chakra-ui/react";

import { useState, UseEffect, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios, * as others from 'axios';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Art = ()=>{

  

    const url='https://api.unsplash.com/photos/random?client_id=AfbHrpKR5I940b0Nixq5fFrWj87FnX_x5qjUuwXZFXI&count=100';
    const [images,setImages]=useState([]);
    const getImages = ()=>{
        axios.get(url).then((r)=>{
            setImages(r.data);
        });
    };



    useEffect(()=>{
        getImages();
    },[]);


    if(!images){
        return <h1>Loading...</h1>
    }
    return(
      
        <div className="zoom" className='art'>
            {images.map((image)=>{
                return (
                    <LazyLoadImage
                    effect='blur'
                    src={image.urls.regular}
                    alt={image.alt_description}
                    key={image.id}
                    placeholderSrc="Loading..."
                    />  
                    

                )
            
            })}

        </div>
        
    )

}
export default Art;
 
