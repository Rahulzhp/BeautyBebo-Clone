import { Button, Image, SimpleGrid, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'

import { useNavigate } from 'react-router-dom'





const PopularCat = ({data, path}) => {

 // console.log(data)
 const Navigation = useNavigate()



  return (

    
        <VStack justify="center" marginTop="5" w="full" >
        <Text fontSize="20" fontWeight="bold" fontStyle="oblique"  >HOT DEALS</Text>
          <SimpleGrid columns={[2,4,6,6]} spacing="2" >

            {data.map((el)=>  (
                <Image src={el}  style={{cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} onClick={()=>Navigation(path)} ></Image>
                ) )}
                
          </SimpleGrid>
        </VStack >
      


  )
               
}

export default PopularCat
