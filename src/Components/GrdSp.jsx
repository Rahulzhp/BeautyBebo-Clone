import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import Grd from "./smallComp.jsx/Grd";
import Loading from './smallComp.jsx/Loding';
import { HStack, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
const GrdSp = () => {
    const { data, AllProductsData } = useContext(AppContext)



    // is Loading   // 
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false)

    }, 1500);
    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            {AllProductsData.Gd.map((el) => (
                <Grd  {...el} />
            ))}
        </div>
    )
}
export default GrdSp;