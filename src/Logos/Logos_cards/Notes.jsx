import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import useStore from '../../Store';
import {colors} from '../../colors'


export default function Notes({scale=1.0}){
  const {colorTheme } = useStore();

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="41" cy="41" r="40.5" fill='#204F2B' />
    <path d="M26 59V20C26 18.3431 27.3431 17 29 17H49.251C50.0467 17 50.8097 17.3161 51.3724 17.8787L58.1593 24.6656C58.7219 25.2282 59.038 25.9913 59.038 26.7869V59C59.038 60.6569 57.6948 62 56.038 62H29C27.3431 62 26 60.6569 26 59Z" stroke="white"/>
    <path d="M30 32H54.5" stroke="white" stroke-linecap="round"/>
    <path d="M30 37.5H54.5" stroke="white" stroke-linecap="round"/>
    <path d="M30 43.5H54.5" stroke="white" stroke-linecap="round"/>
    <path d="M30 49.5H47" stroke="white" stroke-linecap="round"/>
    </svg>
  </SvgIcon>
)
}
