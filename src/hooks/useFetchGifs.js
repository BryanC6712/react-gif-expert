import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImage = async() => {
        const newImage = await getGifs(category);  
        setimages(newImage);
        setisLoading(false);
    }
    useEffect(() => {      
        getImage();     
    }, []);

  return {
    images,
    isLoading


  }
}
