import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BuffetmanCard = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id,price } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '80%',
        height: '150px',
    })

    return (
        <Box sx={{ width: "17%",maxWidth:"275px",minWidth:"150px",height:"250px",overflow:"hidden", borderRadius: "10px", mb: 4, bgcolor: "white",display:"flex",flexDirection:"column"
        ,"&:hover":{boxShadow: '0px 0px 20px #00000030 !important'},transition:"0.5s",cursor:"pointer" }}>
            <Box sx={{ cursor: "pointer", borderRadius: "10px", height: "150px",display:"flex",justifyContent:"center", mb: 1 }}>
                <TrophyImg src={img1} />
            </Box>
            <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
                <Typography sx={{ fontSize: "1.2rem", color: "grey",textAlign:"right" }}>{title}</Typography>
                <Typography sx={{ fontSize: "1.2rem", color: "grey",textAlign:"right" }}>قیمت {price} تومان</Typography>
            </Box>
        </Box>
    )
}
export default BuffetmanCard