import { Image, SimpleGrid, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'



//import { useNavigate } from 'react-router-dom'
//
// const Navigation = useNavigate()
// style={{cursor:"pointer"}} onClick={()=>Navigation(path)}

const DiscountProduct = ({data,path}) => {

 // console.log(data)

 const Navigation = useNavigate()


  return (

    
        <VStack justify="center" marginTop="3" w="full" >
        <Text fontSize="20" fontWeight="bold" marginBottom="5" >DISCOUNT PE DISCOUNT </Text>
          <SimpleGrid columns={[1,2,2]} spacing="2"  >

            {data.map((el)=>  (
                <Image src={el} style={{cursor:"pointer",width:"100%",marginRight:"55px"}} onClick={()=>Navigation(path)} />
                ) )}

          </SimpleGrid>
        </VStack >
      


  )
               
}

export default DiscountProduct
