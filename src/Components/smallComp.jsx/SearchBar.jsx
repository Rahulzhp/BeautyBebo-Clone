import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { AppContext } from '../../Context/AppContext'


const dataTobeMatch = [
   {
      id:1,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-1.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-2.jpg",
      Title: "Aroma Magic Activated Bamboo Charcoal Face Wash",
      price:230,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-1.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-3.jpg",
      ]
    },
    {
      id:2,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_172_2.jpg",
      Title: "Gillette Venus Razor With Aloe Extract For Women",
      price:200,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_172_2.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/_/3_123_3.jpg",
      ]
    },
    {
      id:3,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-2.png",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-1.png",
      Title: "Head & Shoulders 2 In 1 Active Protect Anti Dandruff Shampoo + Conditioner ",
      price:263,
      strikeprice:1009,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-2.png",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-1.png",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-3.png",
       
      ]
    },
    {
      id:4,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/g/g/ggggghh.jpg",
      hover_Image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him60023/l/45.jpg",
      price:399,
      Title: "Himalaya Herbals Anti-Wrinkle Cream (50gm)",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/g/g/ggggghh.jpg",
        "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him60023/l/45.jpg",
        "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him60023/l/42.jpg",
       
      ]
    },
    {
      id:5,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/_/1/.111.jpg",
      hover_Image: "https://rukminim1.flixcart.com/image/416/416/khkvukw0/face-wash/z/t/h/150-purifying-neem-foaming-himalaya-original-imafxk5pfwutzxx3.jpeg?q=70",
      Title:"Himalaya Herbals Purifying Neem Foaming Face Wash - Pack Of 2(150ml each)",
      price:799,
      strikeprice:1500,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/_/1/.111.jpg",
        "https://rukminim1.flixcart.com/image/416/416/khkvukw0/face-wash/z/t/h/150-purifying-neem-foaming-himalaya-original-imafxk5pfwutzxx3.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kz5vwy80/face-wash/d/y/l/300-herbas-purifying-neem-foaming-pack-of-2-face-wash-300-ml-original-imagb8jeppkc8mpr.jpeg?q=70",

      ]
    },
    {
      id:6,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-1_4.jpg",
      hover_Image: "https://www.sholomart.in/resources/media/2020/12/joy-even-tone-lotion.png",
      Title: "Black Half Sleeve T-shirt",
      price:295,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-1_4.jpg",
        "https://www.sholomart.in/resources/media/2020/12/joy-even-tone-lotion.png",
        "https://images-static.nykaa.com/media/catalog/product/c/7/c7306c88904035422856_n2.jpg?tr=w-500,pr-true",
  
      ]
    },{
      id:7,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8901526102662_2bbb.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8901526102662_1bbb.jpg",
      Title: "L'Oreal Paris Total Repair 5 Shampoo (640ml+64ml)",
      price:499,
      strikeprice:1399,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8901526102662_2bbb.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8901526102662_1bbb.jpg",
        "https://www.baskethunt.com/wp-content/uploads/2021/01/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-8-20201020.jpg",

      ]
    },
    {
      id:8,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-22.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-33.jpg",
      Title: "Livon Serum Damage Protection Mild Fragrance Vitamin - E",
      price:399,
      strikeprice:1099,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-22.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-33.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-44.jpg",
       
      ]
    },
    {
      id:9,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/w/a/washable_very_black-1.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/w/a/washable_very_black-2.jpg",
      Title: "Maybelline New York Hyper Curl Mascara  ",
      price:279,
      strikeprice:879,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/w/a/washable_very_black-1.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/w/a/washable_very_black-2.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/w/a/washable_very_black-3.jpg",
       
      ]
    },
    {
      id:10,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_1.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_4.jpg",
      price:410,
      Title: "Miss Claire Blusher Kit - 3660-B-3",
      strikeprice:1099,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_1.jpg",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_4.jpg",
        
      ]
    },
    {
      id:11,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-88.jpg",
      hover_Image: "https://m.media-amazon.com/images/I/61s-U8Rt1QL._SL1000_.jpg",
      Title: "Pantene Pro-V Oil Replacement (Pack Of 2)",
      price:342,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-88.jpg",
        "https://m.media-amazon.com/images/I/61s-U8Rt1QL._SL1000_.jpg",

      ]
    },
    {
      id:12,
      Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-140.jpg",
      hover_Image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/c/l/cl-04_sugar_plum-min_2.png",
      Title: "Blue Heaven Candy Matte Lip Color",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/c/l/cl-04_sugar_plum-min_2.png",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/c/l/cl-01_mauve_beauty-min_1_1.png",
        "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/c/l/cl-03_pink_pop-min_1_1.png",
        
      ]
    },
    
    
      
      
     
  
      
     
    
  ]
  

const SearchBar = () => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack>
          
            <Image boxSize={100} src={item.Display_image} />
            <Text>{item.name}</Text>
          </HStack>
        )
      }


      
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
   
navigate(`/products/${item.id}`)
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  return (
    
    <Stack position="fixed"  style={{ width: 327, left:701, top:39 }}>
      

      
    <ReactSearchAutocomplete

    // data to be match
      items={dataTobeMatch}
      onSearch={handleOnSearch}
     // onHover={handleOnHover}
      onSelect={handleOnSelect}
     // onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}
      placeholder="Enter your search..."
    />
      
  </Stack>
  
  )
}

export default SearchBar
