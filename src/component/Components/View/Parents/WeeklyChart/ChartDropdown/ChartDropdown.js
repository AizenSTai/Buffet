
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Box, Typography, useTheme, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ColorModeContext, tokens } from "../../../../../../theme"
import { BorderRadius } from 'mdi-material-ui';
import { useState } from 'react';
import { useEffect } from 'react';
export default function ChartDropdown(props) {
  const { title, func, itemList, id } = props
  const { t, i18n } = useTranslation()
  const [items, setItems] = useState([])
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  // useEffect(() => {  


  // },[1])
  function checkSelected(select) {
    return select.selected == true;
  }
  return (
    <PopupState>      
      {(popupState) => (
        <React.Fragment>
          <Box
            sx={{ color: "blue", pr: 2, pl: 2, cursor: "pointer", borderRadius: "5px", display: "flex", m: "0 auto", boxSizing: "border-box", }}
            {...bindTrigger(popupState)}
          >
            <Typography>{title}</Typography>
          </Box>
          <Menu sx={{ height: "auto", direction: "rtl" }} {...bindMenu(popupState)}>
            <FormGroup sx={{ width: "auto", pl: 4 }}>
              {itemList.map((item, index) => {
                return (
                  <FormControlLabel control={<Checkbox onChange={() => {
                    itemList[item.id - 1].selected = true
                    // console.log(item)
                    // console.log(items[item.id-1]) 
                  }} />} label={item.name} />
                )
              })}
            </FormGroup>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Button onClick={() => {
                func(id, itemList.filter(checkSelected))
                popupState.close()
              }} sx={{ m: "0 auto", bgcolor: "orange", color: "white", ":hover": { bgcolor: "orange" } }}>انتخاب</Button>
            </Box>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}