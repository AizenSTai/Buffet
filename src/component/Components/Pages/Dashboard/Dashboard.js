import { Box, Button, IconButton, Typography, useTheme, InputBase, Popover, Divider, useScrollTrigger, Toolbar, CssBaseline, TextField, FormControl, InputLabel, Input } from "@mui/material";
import { tokens } from "../../../../theme";
import * as React from 'react';
import Card1 from "../../../MainComponents/Cards/Card1";
import Card2 from "../../../MainComponents/Cards/Card2";
import Card3 from "../../../MainComponents/Cards/Card3";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react";
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import Topbar from "../../../MainComponents/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import BuffetCard from "../../../MainComponents/Cards/BuffetCard";
import SchoolCard from "../../../MainComponents/Cards/SchoolCard";

const TrophyImg = styled('img')({
    width: '70px',
    height: '70px',
    opacity: "75%",
})

const Dashboard = ({ subTitle }) => {
    const { t, i18n } = useTranslation()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showLogin, setShowLogin] = useState(true)
    const [phoneValidation, setPhoneValidation] = useState(true)
    const [passwordValidation, setPasswordValidation] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [logedIn, setLogedIn] = useState(false)

    useEffect(() => {
        const isValid = localStorage.getItem("validation")
        if (isValid) {
            setPasswordValidation(true)
            setLogedIn(true)
            setPhoneNumber("11111111111")
            setPassword("555555")
        }
    }, [])
    const regex = /^[0-9]*$/
    const phoneNumberHandler = (e) => {
        if (regex.test(e.target.value)) {
            if (e.target.value.length <= 11) {
                setPhoneNumber(e.target.value)
            }
        }
    }
    const passwordHandler = (e) => {
        if (regex.test(e.target.value)) {
            if (e.target.value.length <= 6) {
                setPassword(e.target.value)
            }
        }
    }
    const sendPhoneClick = (e) => {
        if (phoneNumber != null) {
            if (phoneNumber != "") {
                if (phoneNumber.length == 11 || phoneNumber.length == 10) {
                    setPhoneValidation(true)
                    setShowLogin(false)
                } else {
                    setPhoneValidation(false)
                }
            } else {
                setPhoneValidation(false)
            }
        } else {
            setPhoneValidation(false)
        }
    }
    const sendPasswordClick = (e) => {
        if (password != null) {
            if (password != "") {
                if (password.length == 6) {
                    if (password == "555555" && (phoneNumber == "9371373002" || phoneNumber == "09371373002" || phoneNumber == "11111111111")) {
                        setPasswordValidation(true)
                        setLogedIn(true)
                        localStorage.setItem("validation", "valid")
                    } else {
                        setPasswordValidation(false)
                    }
                } else {
                    setPasswordValidation(false)
                }
            } else {
                setPasswordValidation(false)
            }
        } else {
            setPasswordValidation(false)
        }
    }
    const images = [
        { url: "images/mainImgs/SliderImgs/download1.png" },
        { url: "images/mainImgs/SliderImgs/download2.png" },
        { url: "images/mainImgs/SliderImgs/download3.jpg" },
        { url: "images/mainImgs/SliderImgs/download4.png" },
    ];
    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Topbar page="buffet" />
            <Box sx={{
                backgroundColor: "white", height: "80px", width: "90%", margin: "0 auto", borderRadius: "10px", transform: "translateY(-50px)"
                , display: "flex"
            }}>
                <Box sx={{ width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <LocalMallTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />
                    </a>
                    <Box sx={{ ml: 3, display: "flex" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mt: "auto", mb: "auto" }}>{t("shopguide")}</Typography>
                    </Box>
                </Box>
                <Box sx={{ borderRight: "1px solid #ddd", borderLeft: "1px solid #ddd", width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <StorefrontTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />
                    </a>
                    <Box sx={{ ml: 3, display: "flex" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mt: "auto", mb: "auto" }}>{t("wanttobeseller")}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <SupportAgentTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />
                    </a>
                    <Box sx={{ ml: 3, display: "flex" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mt: "auto", mb: "auto" }}>{t("websiteguide")}</Typography>
                    </Box>
                </Box>
            </Box>

            {!logedIn && <Box sx={{
                display: "flex", justifyContent: "right", flexDirection: "row-reverse", gap: 1,
                backgroundColor: "white", height: "auto", minHeight: "420px", width: "90%", boxSizing: "border-box"
                , margin: "0 auto", borderRadius: "10px", transform: "translateY(-30px)", p: 2
            }}>
                <Box sx={{ width: "70%", backgroundColor: "white", boxSizing: "border-box", borderRadius: "10px", overflow: "hidden" }}>
                    <Slider arrows={false} touchMove={false} {...settings}>
                        {images.map((itm, index) => {
                            return (
                                <Box sx={{
                                    height: "400px", backgroundImage: `url(/${itm.url})`, backgroundRepeat: "no-repeat"
                                    , backgroundSize: "cover", backgroundPosition: "center"
                                }} />
                            )
                        })}
                    </Slider>
                </Box>
                {showLogin &&
                    <Box sx={{ m: "0 auto", mt: "5%", width: "30%", borderRadius: "10px", boxSizing: "border-box", p: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <TrophyImg src="/images/logos/MainLogo.ico" />

                        <Typography sx={{ fontSize: "1.1rem" }}>به حساب خود وارد شوید</Typography>
                        <TextField
                            variant="standard"
                            sx={{ color: "black", mt: 1, width: "40%" }}
                            label="شماره تلفن"
                            value={phoneNumber}
                            onChange={phoneNumberHandler}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+98</InputAdornment>,
                            }}
                        />
                        {!phoneValidation && <Typography sx={{ color: "darkred", fontSize: "0.8rem" }}>لطفا یک شماره تلفن معتبر وارد کنید</Typography>}
                        <Button sx={{ color: "white", mt: 1, bgcolor: "orange", ":hover": { bgcolor: "orange" } }} onClick={sendPhoneClick}>ارسال کد تایید</Button>
                    </Box>
                }
                {!showLogin &&
                    <Box sx={{ m: "0 auto", mt: "5%", width: "30%", borderRadius: "10px", boxSizing: "border-box", p: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <TrophyImg src="/images/logos/MainLogo.ico" />

                        <Typography sx={{ fontSize: "1.1rem" }}>کد تایید را وارد کنید</Typography>
                        <TextField
                            variant="standard"
                            sx={{ color: "black", mt: 1, width: "40%", letterSpacing: "12px" }}
                            value={password}
                            onChange={passwordHandler}
                        />
                        {!passwordValidation && <Typography sx={{ color: "darkred", fontSize: "0.8rem" }}>کد تایید مطابقت ندارد</Typography>}
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Button sx={{ color: "white", mt: 1, fontSize: "0.8rem", bgcolor: "orange", ":hover": { bgcolor: "orange" } }} onClick={() => { setShowLogin(true) }}>بازگشت</Button>
                            <Button sx={{ color: "white", mt: 1, fontSize: "1rem", bgcolor: "orange", ":hover": { bgcolor: "orange" } }} onClick={sendPasswordClick}>تایید</Button>
                        </Box>
                    </Box>
                }
            </Box>}
            {logedIn &&
                <Box sx={{
                    display: "flex", justifyContent: "space-around", flexDirection: "row-reverse",
                    backgroundColor: "white", height: "auto", minHeight: "420px", width: "90%", boxSizing: "border-box"
                    , margin: "0 auto", borderRadius: "10px", transform: "translateY(-30px)", p: 2
                }}>
                    <BuffetCard id="x#49pw" role="بوفه دار" name="محمد شیروانی" school="دبستان شهید آوینی" shift="تمام وقت" />
                    <SchoolCard id="x#48mg" role="والدین" name="مسعود قهرمانی" grade="پنجم" school="دبستان شهید مفیدی" />
                    <SchoolCard id="x#47or" role="والدین" name="علیرضا فردنیا" grade="سوم" school="دبستان شهید پارچه باف" />
                    <SchoolCard id="x#46cz" role="والدین" name="نازنین مصیب نیا" grade="پنجم" school="دبستان شهید رجایی" />
                </Box>}
            <Box sx={{ width: "100%", height: "600px", bgcolor: "#445268", display: "flex" }}>
                <Typography sx={{ color: "white", fontSize: "8rem", margin: "auto auto" }}>Some Stuff</Typography>
            </Box>
        </Box>
    )
}
export default Dashboard