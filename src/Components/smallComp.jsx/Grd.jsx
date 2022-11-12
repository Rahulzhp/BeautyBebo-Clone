
import { Image,Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
const Grd=({id,Dp,tit})=>{
    const navigate = useNavigate()

const VisitSingleProduct = () =>{

  navigate(`/products/${id}`)
    
 
}
    return(
        <>
        <div onClick={VisitSingleProduct}>

            <Image src={Dp} alt={tit}></Image>
            <Text>{tit}</Text>
            
            
        </div>
        </>
    )
}
export default Grd;