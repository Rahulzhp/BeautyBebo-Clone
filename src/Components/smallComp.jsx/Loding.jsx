import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
   
     
     <Stack className={styles.mainLoadCSS}  >
         <div className={styles.loadingCSS} >
           <img
             width="100%"
             src="https://www.logomyway.com/logos_new/5780/BEBO___V2B_RGB_D_390034275160.png"
             alt="loading..."
             />
          <h1 style={{fontSize :"30px", marginTop : "-50px"}} >Beauty Bebo...</h1>
         </div>
      </Stack>

  );



};

export default Loading;
