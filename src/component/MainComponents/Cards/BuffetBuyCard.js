import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const BuffetBuyCard = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id,price } = props
    const navigate = useNavigate()
    const [count,setCount] = useState(0)
    const TrophyImg = styled('img')({
        width: '80%',
        height: '150px',
    })
    const setMinesHandler = ()=>{
        if(count != 0){
            setCount(count -1)
        }
    }
    return (
        <Box sx={{ width: "17%",maxWidth:"275px",minWidth:"150px",height:"360px",overflow:"hidden", borderRadius: "10px", mb: 2, bgcolor: "white",display:"flex",flexDirection:"column"
        ,"&:hover":{boxShadow: '0px 0px 20px #00000030 !important'},transition:"0.5s",cursor:"pointer" }}>
            <Box sx={{ cursor: "pointer", borderRadius: "10px", height: "150px", mb: 1,display:"flex",justifyContent:"center" }}>
                <TrophyImg src={img1} />
            </Box>
            <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
                <Typography sx={{ fontSize: "1.1rem", color: "grey",textAlign:"right" }}>{title}</Typography>
                <Typography sx={{ fontSize: "1.1rem", color: "grey",textAlign:"right" }}>قیمت {price} تومان</Typography>
                <Box sx={{display:"flex",justifyContent:"center",gap:2,height:"60px"}}>
                    <Button sx={{ mt:"auto",mb:"auto", fontSize: "2.5rem", color: "grey",height:"60px",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",width:"25px",borderRadius:"50%"}} onClick={setMinesHandler}>-</Button>
                    <Typography sx={{ mt:"auto",mb:"auto", fontSize: "2rem", color: "grey",textAlign:"right" }}>{count}</Typography>
                    <Button sx={{ mt:"auto",mb:"auto", fontSize: "2.5rem", color: "grey",height:"60px",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",width:"25px",borderRadius:"50%" }} onClick={()=>{setCount(count+1)}}>+</Button>
                </Box>
                <Button sx={{color:"white",bgcolor:"orange",width:"25%",m:"0 auto",":hover":{bgcolor:"orange"}}}>ثبت</Button>
            </Box>
        </Box>
    )
}
export default BuffetBuyCard