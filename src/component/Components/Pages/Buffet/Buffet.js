import styled from "@emotion/styled"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Topbar from "../../../MainComponents/Topbar/Topbar"
import { useTranslation } from "react-i18next"
import GoodsItems from "../../../MainComponents/Cards/GoodsItems"
import BuffetmanCard from "../../../MainComponents/Cards/BuffetmanCard"
const Buffet = (props) => {
    const { t, i18n } = useTranslation()
    const params = useParams()
    const navigate = useNavigate()
    const { name, title } = props
    const [stuId, setStuId] = useState()
    const [showStuImg, setShowStuImg] = useState(false)
    const regex = /^[0-9]*$/
    const [infos, setInfos] = useState([{
        name: "", description: "", school: "", id: params.id, sellerId: "", shift: "", role: ""
    }])
    const TrophyImg = styled('img')({
        height: 'auto',
        width: "100%",
        borderRadius: "15px"
    })
    useEffect(() => {
        setInfos([{
            name: "محمد شیروانی", description: "بوفه مدرسه", school: "دبستان شهید آوینی", id: params.id, sellerId: "112282", shift: "تمام وقت", role: "بوفه دار"
        }])
    }, [])

    const stuIdHandler = (e) => {
        if (regex.test(e.target.value)) {
            if (e.target.value.length <= 10) {
                setStuId(e.target.value)
            }
        }
    }
    const checkClickHandler = () => {
        if (stuId == "5555555555") {
            setShowStuImg(true)
        } else {
            setShowStuImg(false)
        }
    }
    return (
        <Box sx={{ bgcolor: "#f0f0f0",display:"flex",flexDirection:"column",gap:1 }} >
            <Topbar page="Buffet" />





            <Box sx={{ minHeight: "200px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", bgcolor: "white" }}>
                <Box sx={{ width: "34%", height: "auto", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px", backgroundColor: "white", boxSizing: "border-box", p: 2 }}>
                    <Box sx={{ border: "1px solid lightgrey", borderRadius: "15px", display: "flex", position: "sticky", top: "0", flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
                            <TextField
                                variant="standard"
                                sx={{ color: "black", mt: 1, width: "40%", fontSize: "1.6rem", mt: "auto", mb: "auto" }}
                                label=""
                                value={stuId}
                                onChange={stuIdHandler}
                                inputProps={{ style: { "font-size": "1.4rem" } }}
                            />
                            <Typography sx={{ fontSize: "1.1rem", mt: "auto", mb: "auto" }}>شماره دانش آموز</Typography>
                        </Box>
                        <Button sx={{ bgcolor: "orange", width: "25%", minHeight: "40px", fontSize: "1.1rem", ml: "auto", mt: 1, mb: 1, color: "white", ":hover": { bgcolor: "orange" } }} onClick={checkClickHandler}>استعلام</Button>
                        {showStuImg && <Box>
                            <Typography sx={{ fontSize: "1.2rem", mt: "auto", mb: "auto", textAlign: "right", mt: 1 }}>: مشخصات</Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box sx={{ width: "25%" }}>
                                    <TrophyImg src="/images/icons/student.jpg" />
                                </Box>
                                <Box sx={{ width: "75%" }}>
                                    <Typography sx={{ fontSize: "1.1rem", mt: "auto", mb: "auto", textAlign: "right", mt: 1 }}>نام : مسعود عابدین</Typography>
                                    <Typography sx={{ fontSize: "1.1rem", mt: "auto", mb: "auto", textAlign: "right", mt: 1 }}>کلاس : سوم</Typography>
                                    <Typography sx={{ fontSize: "1.1rem", mt: "auto", mb: "auto", textAlign: "right", mt: 1 }}>دبستان : شهید آوینی</Typography>
                                    <Typography sx={{ fontSize: "1.1rem", mt: "auto", mb: "auto", textAlign: "right", mt: 1 }}>ممنوعیت خاص : شیر پرچرب</Typography>
                                </Box>
                            </Box>
                            {/* <Box sx={{ display: "flex", justifyContent: "right", mt: 1 }}>
                                <Typography sx={{ fontSize: "1.2rem", textAlign: "right", mt: "auto", mb: "auto" }}>سهمیه تغذیه این هفته : روزانه</Typography>
                            </Box>
                            <GoodsItems count="1" name="شیر کم چرب" />
                            <GoodsItems count="1" name="بستنی چوبی" />
                            <GoodsItems count="1" name="ساندویچ مرغ" />
                            <GoodsItems count="2" name="تیتاپ" /> */}
                        </Box>}
                    </Box>
                </Box>
                <Box sx={{ width: "64%", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px", backgroundColor: "white", boxSizing: "border-box", p: "10px" }}>
                    <Box sx={{ height: "10%", p: "10px", display: "flex", justifyContent: "end", borderBottom: "1px solid #ddd" }}><Typography sx={{
                        fontSize: "1.5rem", fontWeight: "600"
                        , textAlign: "start", direction: "rtl"
                    }}>{infos[0].description}</Typography></Box>
                </Box>
            </Box>





            <Box sx={{ width: "100%", display: "flex",height:"100%" }}>
                <Box sx={{ width:"35%",height:"300px",position:"sticky",bottom:0,border: "1px solid lightgrey",mr:2,ml:2,mb:4,mt:"auto", borderRadius: "15px", display: "flex", flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1 }}>
                        فاکتور خرید
                </Box>
                <Box sx={{ display: "flex", width: "65%", flexDirection: "column",boxSizing:"border-box" }}>
                    <Typography sx={{ fontSize: "1.6rem", textAlign: "right", mb: 2, mt: 4,mr:2,ml:2 }}>محصولات بوفه</Typography>
                    <Box sx={{ width: "95%", margin: "0 auto", borderRadius: "10px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
                        <BuffetmanCard isActive={true} price="7000" title="بستنی چوبی" id={11} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={false} price="4000" title="مارشمالو" id={11} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={true} price="9000" title="نوشابه فانتا" id={12} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={false} price="1200" title="چیپس مزمز" id={13} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={true} price="10000" title="پفک نمکی" id={13} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={true} price="2000" title="اشترودل پنیری" id={13} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={true} price="8000" title="چوب شور" id={13} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={false} price="15000" title="ساندویچ مرغ" id={11} img1="/images/icons/milk.jpg" />
                        <BuffetmanCard isActive={true} price="5000" title="تیتاپ" id={12} img1="/images/icons/milk.jpg" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "600px", bgcolor: "#445268", display: "flex" }}>
                <Typography sx={{ color: "white", fontSize: "8rem", margin: "auto auto" }}>Some Stuff</Typography>
            </Box>
        </Box>
    )
}
export default Buffet