import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import Grd from "./smallComp.jsx/Grd";
import Loading from './smallComp.jsx/Loding';
import { HStack, SimpleGrid, Stack,Text } from '@chakra-ui/react';
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
        <Stack>
            
            <HStack spacing={50} width={{base:"100%", lg:"1200px"}} justify="stretch"  >
                

 <SimpleGrid padding={5} spacing={5} marginLeft={65} columns={{base:2,md:3,lg:4}} >

 {AllProductsData.Gd.map((el)=> (
     <Grd {...el} />
 ) )} 

 </SimpleGrid>

</HStack>
<Grd></Grd>

        </Stack>
    )
}
export default GrdSp;