
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Box, Typography, useTheme } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import {ColorModeContext,tokens} from "../../../../../../theme"
import { BorderRadius } from 'mdi-material-ui';
export default function ChartDropdown(props) {
  const { title, icon, icon2, type,left,border } = props
  const {t,i18n}= useTranslation()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <PopupState>
      {(popupState) => (
        <React.Fragment>
          <Box
            sx={{ color:"blue",pr:2,pl:2,cursor: "pointer",borderRadius:"5px", display: "flex", m:"0 auto",boxSizing:"border-box", }}
            {...bindTrigger(popupState)}
          >
            <Typography>{title}</Typography>
          </Box>
            <Menu sx={{width:"250px",height:"auto"}} {...bindMenu(popupState)}>
              <MenuItem onClick={()=>{popupState.close()}}>شیر کم چرب</MenuItem>
              <MenuItem onClick={()=>{popupState.close()}}>شیر کم چرب</MenuItem>
              <MenuItem onClick={()=>{popupState.close()}}>شیر کم چرب</MenuItem>
              <MenuItem onClick={()=>{popupState.close()}}>شیر کم چرب</MenuItem>
            </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}