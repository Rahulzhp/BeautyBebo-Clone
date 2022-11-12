import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Circle, Divider, Flex, HStack, Image, Spacer, Spinner, Stack, Text, useToast, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import Loading from './Loding';
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiPlus, BiMinus } from "react-icons/bi";
import Longimg from './Longimg';

const SingleProductPage = () => {



      
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 const [isButLoading, setIsButLoading] = useState(false);

 const [data, setData] = useState(null)

 const [DefaultImg, setImage] = useState()

 const [bagbutton, setbagbutton] = useState(true)
 const [count,setCount]=useState(1)

 const {CartDataToMatch,cartData, handleCart} = useContext(AppContext)
 
 const toast = useToast()

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);


 const handleClick = () => {

    setIsButLoading(true);
   
    setTimeout(() => {
      
      toast({
        title: 'Added To Cart.',
      
        description: "shop more or go to cart.",
      
        duration: 1500,
        isClosable: true,
      })
    
      setIsButLoading(false);
      handleCart(data[0])
      setbagbutton(false)
      console.log(data[0])
    }, 1500);
   
    

  };


  
   // id is a string so we need to convert it to number
   const { id } = useParams()
   /// console.log(typeof(id))

// console.log(cartData) 

 useEffect(()=>{

 
    let obj = CartDataToMatch.filter((el)=>{
        if(el.id === Number(id)){
            return true
        }
        return false
    })

    console.log("I am running from singleProductPage");
    
    setData(obj)
     setImage(obj[0].moreImage[0])
}, [id])







 if(isLoading){

  return (  
     <Loading />
    ) 

 }  


  return (
    <>
     <img style={{marginTop:"73px"}} src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"></img>
    <Stack w="full"  margin="auto" alignSelf="center" justifyContent="center" direction={{base:"column", md:"row"}} spacing={{base:0, sm:30}} padding={5} justify="center" style={{ marginTop:"11px", marginBottom:"50px"}} >

       <Stack   
       flexDirection={{base:"column-reverse", md:"row"}} spacing={5} padding={5}> 
         
            <Stack direction={{base:"row", md:"column"}}   maxH="500px"  padding={3} >

             <ChevronDownIcon display={{base:"none", md:"block"}} boxSize="30px" color="gray.500"  cursor="pointer" />

                {data[0].moreImage.map((img)=> (

                    <Image borderRadius={5} alt={data[0].Title}   maxW={"70"} minW="50px"
                    objectFit='cover' src={img} 
                    onClick={()=>setImage(img)}   cursor="pointer" />

                ) )}
              <ChevronUpIcon display={{base:"none", md:"block"}} boxSize="30px" color="gray.500" cursor="pointer" />  
            </Stack>

            <Stack>
            <Image borderRadius={15} src={DefaultImg} maxH="500px" minW="200px" />
            </Stack>
            
        </Stack>


        <VStack    w={{base:"full", md:"50%"}} h={{base:"full" }}  padding={{base:5,  md:8}} align="revert-layer" spacing={5} >

        <Text fontSize={{base:"15px", md:"20px"}} fontWeight="bold" color="red.500"  >Beauty Bebo</Text>
        <Text   fontSize={{base:"xl", md:"xl"}} color="black" >{data[0].Title}</Text>
        
      
        
        <Stack>

        <HStack alignContent="center">
        <Badge fontSize={{base:"sm", md:"xl"}} variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>
        <Text fontWeight="bold" fontSize={{base:"2xl", md:"3xl"}}  >₹{data[0].price}</Text>
       
        <Text as="s" marginLeft={4} fontSize="xl" >₹{data[0].strikeprice}</Text>
        </HStack>
         <Text  >inclusive of all taxes</Text>
        </Stack>
        
        <Divider />

        <Badge  fontSize={{base:"15px", md:"20px"}}  variant="subtle" colorScheme="red"> ₹{data[0].price - 50} for Plus membershhip only </Badge>
        
        <Text>Plus membership get an extra discount of ₹20 and FREE shipping.Learn more</Text>

        <Divider />

        <Text fontWeight="extrabold">Qty.</Text>
        <Box>
          <Button marginLeft={2} onClick={()=>setCount(count+1)}>+</Button>
          <Button marginLeft={2}>{count}</Button>
          <Button marginLeft={2} onClick={()=>setCount(count-1)}>-</Button>
        </Box>
          
          <Text fontSize={{base:"11px", md:"13px"}}  variant="subtle" color="teal">100% GENUINE PRODUCT & EASY RETURN POLICY</Text>
 
          <Divider />

        <HStack w="full" > 

        <Button  onClick={()=>handleClick()} fontSize="19px" padding={5} w="half" colorScheme='pink'> 

        <BiShoppingBag fontSize={{base:"25px",sm:"25px", md:"3xl"}}/> 
        
        {!isButLoading &&  bagbutton && "Buy Now" }
        {!isButLoading &&  !bagbutton && "ADDED" }
            {isButLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
      
        
        </Button>

        <button >
            
              <Image width="10%" src='https://media.istockphoto.com/id/1128400054/vector/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=COn_iSO6PaIo3SZX1vUfDia4xNQl12SjoLZ_y46I0fY='></Image>
              
              
       </button>


        </HStack>

        

       </VStack>
       
      
    </Stack>
    </>
  )
}

export default SingleProductPage


