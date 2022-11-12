
import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

// 1
export const AppContext = createContext()

const data = {

    SliderData : {
      men: [
          "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
          "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
          "https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg",
          "https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg",
        ],
      women : [
        "https://images.bewakoof.com/uploads/grid/app/buy-2-get-1-women-1660891856.jpg",
        "https://images.bewakoof.com/uploads/grid/app/urban-collection-women-1660893379.jpg",
        "https://images.bewakoof.com/uploads/grid/app/clearance-banner-women-1661275921.jpg",
        "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-women-1660651512.jpg"
      ] ,
      acc:[
        "https://images.bewakoof.com/uploads/grid/app/best-seller-1x1--1658468285.gif",
        "https://images.bewakoof.com/uploads/grid/app/bags-banner-1658468284.jpg",
        "https://images.bewakoof.com/uploads/grid/app/1x1-mobile-cover-superhero--1--1659537519.gif",
        "https://images.bewakoof.com/uploads/grid/app/clearance-zone-70-1661275921.jpg"

      ] ,
      acc2:[
        "https://images.bewakoof.com/uploads/grid/app/arena-banner-gif-1652286939.gif",
        "https://images.bewakoof.com/uploads/grid/app/accessories-banner-1658468282.gif",
        "https://images.bewakoof.com/uploads/grid/app/slider-new-1658468288.jpg",
     
      ],
      men2: [
        "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
        "https://images.bewakoof.com/uploads/grid/app/flatknits-1x1-revised-1661245626.gif",
        "https://images.bewakoof.com/uploads/grid/app/pyjamas-m--1--1660988001.jpg",
        "https://images.bewakoof.com/uploads/grid/app/anime-men-banner--1660918150.jpg",
      ],
      women2: [
        "https://images.bewakoof.com/uploads/grid/app/printed-tops-1x1-1661320785.gif",
        "https://images.bewakoof.com/uploads/grid/app/k-pop-collection-1x1--1--1661335372.gif",
        "https://images.bewakoof.com/uploads/grid/app/sweatshirts-hoodies-1x1-w-1660893504.jpg",
        "https://images.bewakoof.com/uploads/grid/app/pyjamas-w--1--1660988002.jpg",
      ]
        
    
  
    },
              
    
    longDiv : {
      men : "https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg",
      women :  "https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg",
      acc :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
      men2 : "https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png",
      men3 : "https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"
    },

    smallProduct: {
        men : "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        women :  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_209_6.jpg",
        acc :  ""
    },

    giftVoucher : {
        forAll : "https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"
    },

    PopularCat: {
        men : [          
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_209_6.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-2.png",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/g/ggggghh.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/_/1/.111.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5_1.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8901526102655_2bbb.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/2/12983_s1-8901030685231_1.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8901526102662_2bbb.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001708-22.jpg",
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/w/a/washable_very_black-1.jpg"
        ],
        women : [          
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg"
        ],
        acc : [
          "https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg",
         
        ]
    },

    DiscountProduct: {
      men:[
        "https://www.beautybebo.com/pub/media/ads/joy_banner.gif",
        "https://www.beautybebo.com/pub/media/ads/lotus_banner.gif",
        
      ],
      women: [
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-w-1660204325.jpg",
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-women-1658985548.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-lastsizesleft-women-1658984794.jpg",
      ],
      stoopid : [
        "https://images.bewakoof.com/uploads/grid/app/jackets--1659349867.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-m-1659160620.jpg",
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg"
      ],
      stoopidWomen : [
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-combo-tees-w-1660582615.jpg",
        "https://images.bewakoof.com/uploads/grid/app/AOp-Boxers-mid-banner-Women-1658560814.jpg",
        "https://images.bewakoof.com/uploads/grid/app/jacket-women-mid-banner-1659350736.jpg"
      ],
      acc: [
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg",
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg"
      ]
    }


  }  
  //npm i react-hover-image
  
    

const AllProductsData = {

  Gd : [
    {
      id:1,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-1.jpg",
      tit:"Miss Claire Blusher Kit - 3660-B-3",
      pr:410,
      nt:900
    },
    {
      id:2,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
    {
      id:3,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
    {
      id:4,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
    {
      id:5,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
    {
      id:8,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
    {
      id:9,
      Dp:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
      tit:"Ponds Super Light Gel Oil Free",
      pr:265,
      nt:630
    },
  ],


  menData : [
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
    
   
  ],
  womenData : [
    {
      id:13,
      Display_image : "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
      Title:"Naaz's Black Friends Typography T-shirt",
      price:699,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
        "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810566-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810577-8.jpg"
      ]
    },
    {
      id:14,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
      Title: "Women's Red Boyfriend T-shirt",
      price:699,
      strikeprice:14000,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918683-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918693-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658919098-6.jpg"
      ]
    },
    {
      id:15,
      Display_image : "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
      Title: "Women's White Boyfriend T-shirt   ",
      price:399,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407366-3.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407372-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407383-6.jpg"
      ]
    },
    {
      id:16,
      Display_image : "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
      price:499,
      Title: "Climbing Pocket Panda Boyfriend T-Shirt      ",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748607-2.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748612-3.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748628-6.jpg"
      ]
    },
    {
      id:17,
      Display_image : "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
      Title:" BTS Logo Typography Oversized Fit T-shirt",
      price:799,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407437-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407448-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407459-6.jpg"
      ]
    },
    {
      id:18,
      Display_image : "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
      Title:"Women's Yellow BTS Logo Typography Oversized Fit T-shirt",
      price:444,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407148-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407153-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407137-3.jpg"
      ]
    },
    {
      id:19,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
      Title: "Naaz's  Green Solid Flared Anarkali With Tussel Details",
      price:800,
      strikeprice:1200,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161861-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg"
      ]
    },
    {
      id:20,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
      Title: "Naaz's Green Floral Printed Flared Anarkali ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937830-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg"
      ]
    },
    {
      id:21,
      Display_image : "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
      Title: "Naaz's Black Gold Printed Tiered Anarkali",
      price:1600,
      strikeprice:3999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938056-2.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938061-3.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938072-5.jpg"
      ]
    },
    
    {
      id:22,
      Display_image : "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
      Title: "Women's Maroon Ethnic Motif Printed Crop Top",
      price:375,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801509-2.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801525-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801519-4.JPG"
      ]
    },
    {
      id:23,
      Display_image : "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
      Title: "Women's Olive Ethnic Motif Printed Dress      ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800637-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800648-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800643-3.jpg"
      ]
    },
    {
      id:24,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
      Title: "Women's Red Ethnic Motif Printed Peplum Top  ",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800754-3.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800765-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800760-4.JPG"
      ]
    },
  ],
}
const CartDataToMatch = [
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
    Display_image : "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/_/1_209_6.jpg",
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
  
  
    {
      id:13,
      Display_image : "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
      Title:"Naaz's Black Friends Typography T-shirt",
      price:699,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
        "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810566-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810577-8.jpg"
      ]
    },
    {
      id:14,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
      Title: "Women's Red Boyfriend T-shirt",
      price:699,
      strikeprice:14000,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918683-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918693-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658919098-6.jpg"
      ]
    },
    {
      id:15,
      Display_image : "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
      Title: "Women's White Boyfriend T-shirt   ",
      price:399,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407366-3.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407372-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407383-6.jpg"
      ]
    },
    {
      id:16,
      Display_image : "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
      price:499,
      Title: "Climbing Pocket Panda Boyfriend T-Shirt      ",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748607-2.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748612-3.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748628-6.jpg"
      ]
    },
    {
      id:17,
      Display_image : "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
      Title:" BTS Logo Typography Oversized Fit T-shirt",
      price:799,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407437-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407448-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407459-6.jpg"
      ]
    },
    {
      id:18,
      Display_image : "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
      Title:"Women's Yellow BTS Logo Typography Oversized Fit T-shirt",
      price:444,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407148-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407153-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407137-3.jpg"
      ]
    },
    {
      id:19,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
      Title: "Naaz's  Green Solid Flared Anarkali With Tussel Details",
      price:800,
      strikeprice:1200,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161861-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg"
      ]
    },
    {
      id:20,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
      Title: "Naaz's Green Floral Printed Flared Anarkali ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937830-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg"
      ]
    },
    {
      id:21,
      Display_image : "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
      Title: "Naaz's Black Gold Printed Tiered Anarkali",
      price:1600,
      strikeprice:3999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938056-2.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938061-3.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938072-5.jpg"
      ]
    },
    
    {
      id:22,
      Display_image : "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
      Title: "Women's Maroon Ethnic Motif Printed Crop Top",
      price:375,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801509-2.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801525-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801519-4.JPG"
      ]
    },
    {
      id:23,
      Display_image : "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
      Title: "Women's Olive Ethnic Motif Printed Dress      ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800637-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800648-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800643-3.jpg"
      ]
    },
    {
      id:24,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
      Title: "Women's Red Ethnic Motif Printed Peplum Top  ",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800754-3.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800765-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800760-4.JPG"
      ]
    },
   
    
   

    
   
  
]



const AppContextProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState(null)

  const [cartData, setCartData] = useState([])

  const [price, setPrice] = useState(0);
  const [discountPrice, setdiscountPrice] = useState(0);
  const [TotalQty, setTotalQty] = useState(0);
  const [Totalprice, setTotalPrice] = useState(0);
 
 const  toast = useToast()

  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    toast({
      title: 'Item Removed Successfully.',
    
      description: "created by Rahul.",
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
    setCartData(arr);
    handlePrice();
  };

  const cartDataEmpty = ()=>{
    setCartData([])
  }

  const handlePrice = () => {
    let ans = 0;
    let discountP = 0;
    let Qty=0;

    cartData.map((item) => {
      ans += item.amount * item.price
      discountP += item.amount * item.strikeprice
      Qty += item.amount
    });
    setPrice(ans);
    setdiscountPrice(discountP)
    setTotalPrice(ans+discountP)
    setTotalQty(Qty)
  };
  

  
useEffect(() => {
handlePrice();
});

  console.log(price)

  
  const handleCart = (data)=>{

    if (cartData.indexOf(data) !== -1) return;
    setCartData([...cartData,data])

  }

  console.log(cartData)


  const handleChange = (item, d) => {

    const ind = cartData.indexOf(item);
    const arr = cartData;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);

  };


  const toggle = () => {
    setIsAuth(!isAuth);
  };

  const loginUser = (Name) => {
    setIsAuth(true);
    console.log("LOGIN USER RUNNING APP CONTEXT")
    setUserName(Name)
   // console.log(Name)
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUserName(null)
    console.log(isAuth,userName)
  };

 // console.log(userName)
    
  return (

    <div>

  <AppContext.Provider value={{data, userName, isAuth, toggle, loginUser, logoutUser, AllProductsData, cartData, handleCart, CartDataToMatch, handleChange ,handleRemove, price, discountPrice, Totalprice, cartDataEmpty,
  handlePrice, TotalQty }} >

      {children}

  </AppContext.Provider>

      
    </div>
  )
}

export default AppContextProvider
