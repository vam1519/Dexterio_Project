import Image from 'next/image'
import { Box, Container, Text } from "@chakra-ui/react";
import InfiniteScroll from 'react-infinite-scroller';
import { useState, UseEffect, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios, * as others from 'axios';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key} >
      <img src={url} />
    </div>
  );

const Art = ()=>{

  

    const url='https://picsum.photos/v2/list?page=0&limit=100';
    const [images,setImages]=useState([]);  
    const [loaded, setIsLoaded] = React.useState(false);
    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "{AfbHrpKR5I940b0Nixq5fFrWj87FnX_x5qjUuwXZFXI}";
    
        axios
          .get(`${apiRoot}/photos/random?client_id=AfbHrpKR5I940b0Nixq5fFrWj87FnX_x5qjUuwXZFXI&count=${count}`)
          .then (res => {
            setImages([...images, ...res.data]);
            setIsLoaded(true);
          });
    };



    useEffect(()=>{
       fetchImages();
    },[]);


    if(!images){
        return <h1>Loading...</h1>
    }
    return(
      
        <div className="zoom" className='art'>
            {images.map((image)=>{
                return (
                    <InfiniteScroll
                    dataLength={10}
                    next={() => fetchImages(5)}
                    hasMore={true}
                    loader={
                     <img
                        src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                        alt="loading"
                     />}
                >
                    <div className="image-grid" style={{ marginTop: "30px" }}>
                       {loaded ? 
                           images.map((image, index) => (
                               <UnsplashImage url={image.urls.regular} key={index} />
                           )): ""}
                   </div>
               </InfiniteScroll>
                    

                )
            
            })}

        </div>
        
    )

}
export default Art;
 
