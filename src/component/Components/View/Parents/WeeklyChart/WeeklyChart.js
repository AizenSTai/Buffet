import { React, useState } from "react";
import { Box, Typography } from "@mui/material"
import Chartdropdown from "./ChartDropdown/ChartDropdown"

const WeeklyChart = () => {
    const [sun, setSun] = useState([])
    const [mon, setMon] = useState([])
    const [tue, setTue] = useState([])
    const [wed, setWed] = useState([])
    const [thu, setThu] = useState([])
    const [whichDay, setWhichDay] = useState("")

    return (
        <Box sx={{
            boxShadow: '0px 0px 4px #00000001 !important'
            , p: 2, mt: 1, minHeight: "80%", height: "auto", border: "1px solid lightgrey"
            , borderRadius: "15px", display: "flex", flexDirection: "column"
            , backgroundColor: "#f8f8f8", boxSizing: "border-box", gap: 1
        }}>
            <Box sx={{ height: "15%" }}>
                <Typography sx={{ textAlign: "right", fontSize: "1.1rem" }}>جدول غذایی هفته بعد</Typography>
                <Typography sx={{ textAlign: "right", fontSize: "0.9rem" }}>لطفا جدول غذایی هفته آتی را کامل کنید</Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "85%", minHeight: "300px", borderRadius: "10px", display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>جمعه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%" }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>پنجشنبه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>چهارشنبه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>سه شنبه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>دوشنبه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>یکشنبه</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>شنبه</Typography>
                    <Chartdropdown title="انتخاب"/>
                </Box>
            </Box>
        </Box>
    )

}
export default WeeklyChart