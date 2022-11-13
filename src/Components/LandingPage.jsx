
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import DiscountProduct from './smallComp.jsx/DiscountProduct'
import Loading from './smallComp.jsx/Loding'
import PopularCat from './smallComp.jsx/PopularCat'
import SliderImages from './smallComp.jsx/SliderImages'
import StoopidCollection4D from './smallComp.jsx/StoopidCollection4D'
import TwoImage from './smallComp.jsx/TwoImages'
import styles from "./main.module.css";
import Longimg from './smallComp.jsx/Longimg'
import GrdSp from './GrdSp'
import Grd from "./smallComp.jsx/Grd"



function LandingPage (){

  const {data,AllProductsData} = useContext(AppContext)

  // for products
 const path = "/men-clothing"
 

 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);
  

 // console.log(data)

 if(isLoading){

  return (  
     <Loading />
    ) 

 }

  return (

    <div id={styles.landingPageTOP} >
      <Longimg></Longimg>
   
   <SliderImages data={data.SliderData.men} path={path}  />
   <PopularCat data={data.PopularCat.men} path={path}  />
   
   <TwoImage img1={data.longDiv.men} 
   img3={data.giftVoucher.forAll} path={path} />
   
   <h1 style={{fontSize:"20px",marginLeft:"620px",marginTop:"15px",fontWeight:"bold"}}>BEST SELLER</h1>
   <GrdSp ></GrdSp>
   <DiscountProduct data={data.DiscountProduct.men} path={path} />
 
   

   

   {/* SLIDER PENDING */}

  
   
   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>
  



  )
}

export default LandingPage
