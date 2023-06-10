import { React, useState } from "react";
import { Box, Button, Typography } from "@mui/material"
import Chartdropdown from "./ChartDropdown/ChartDropdown"

const WeeklyChart = () => {
    const [sat, setSat] = useState([])
    const [sun, setSun] = useState([])
    const [mon, setMon] = useState([])
    const [tue, setTue] = useState([])
    const [wed, setWed] = useState([])
    const [thu, setThu] = useState([])
    const [fri, setFri] = useState([])
    const [whichDay, setWhichDay] = useState("")
    const setFoodsHandler = (id, foods) => {
        switch (id) {
            case "0":
                setSat([])
                // console.log(foods)
                setSat(foods)
                break
            case "1":
                setSun([])
                setSun(foods)
                break
            case "2":
                setMon([])
                setMon(foods)
                break
            case "3":
                setTue([])
                setTue(foods)
                break
            case "4":
                setWed([])
                setWed(foods)
                break
            case "5":
                setThu([])
                setThu(foods)
                break
            case "6":
                setFri([])
                setFri(foods)
                break
            }
    }
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
                    <Chartdropdown id="6" title="انتخاب" itemList={[{ name: "دوغ", id: "3" ,selected:false}, { name: "ساندویچ ژامبون", id: "1" ,selected:false}, { name: "مارشمالو", id: "2",selected:false }]} func={setFoodsHandler} />
                    {fri.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {fri.length != 0 && <Button onClick={()=>{setFri([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%" }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>پنجشنبه</Typography>
                    <Chartdropdown id="5" title="انتخاب" itemList={[{ name: "نون پنیر", id: "1",selected:false }, { name: "پاستیل", id: "2",selected:false }, { name: "چوب شور", id: "3",selected:false }]} func={setFoodsHandler} />
                    {thu.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {thu.length != 0 && <Button onClick={()=>{setThu([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>چهارشنبه</Typography>
                    <Chartdropdown id="4" title="انتخاب" itemList={[{ name: "چایی", id: "1",selected:false }, { name: "شیرقهوه", id: "2",selected:false }, { name: "چیپوف", id: "3",selected:false }]} func={setFoodsHandler} />
                    {wed.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {wed.length != 0 && <Button onClick={()=>{setWed([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>سه شنبه</Typography>
                    <Chartdropdown id="3" title="انتخاب" itemList={[{ name: "سانویچ گوشت", id: "1",selected:false }, { name: "شیر پرچرب", id: "2",selected:false }, { name: "خلالی", id: "3" ,selected:false}]} func={setFoodsHandler} />
                    {tue.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {tue.length != 0 && <Button onClick={()=>{setTue([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>دوشنبه</Typography>
                    <Chartdropdown id="2" title="انتخاب" itemList={[{ name: "های بای", id: "1",selected:false }, { name: "اشترودل", id: "2",selected:false }, { name: "لوبیا", id: "3" ,selected:false}]} func={setFoodsHandler} />
                    {mon.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {mon.length != 0 && <Button onClick={()=>{setMon([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>یکشنبه</Typography>
                    <Chartdropdown id="1" title="انتخاب" itemList={[{ name: "نوشابه", id: "1",selected:false }, { name: "شیرکمچرب", id: "2",selected:false }, { name: "ساندویچ مرغ", id: "3" ,selected:false}]} func={setFoodsHandler} />
                    {sun.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {sun.length != 0 && <Button onClick={()=>{setSun([])}}>حذف همه</Button>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "14.2%", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                    <Typography sx={{ borderBottom: "2px solid black", m: 1, textAlign: "center" }}>شنبه</Typography>
                    <Chartdropdown id="0" title="انتخاب" itemList={[{ name: "چیپس", id: "1",selected:false }, { name: "شیرکاکایو", id: "2",selected:false }, { name: "عدسی", id: "3",selected:false }]} func={setFoodsHandler} />
                    {sat.map((itm,indx)=>{
                        return (<Box sx={{p:1,textAlign:"right",pr:2,pl:2}}>{itm.name}</Box>)
                    })}
                    {sat.length != 0 && <Button onClick={()=>{setSat([])}}>حذف همه</Button>}
                </Box>
            </Box>
            <Button sx={{bgcolor:"orange",color:"white",":hover":{bgcolor:"orange"},width:"75px",ml:"auto"}}>تایید</Button>
        </Box>
    )

}
export default WeeklyChart