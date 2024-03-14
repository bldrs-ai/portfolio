import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import useStore from '../Store';
import {colors} from '../colors'


export default function Notes({scale=1.0}){
  const {colorTheme } = useStore();

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="41" cy="41" r="40.5" fill="#0047FF" stroke="black"/>
<path d="M28.5 59.5V26C28.5 24.3431 29.8431 23 31.5 23H48.7574C49.553 23 50.3161 23.3161 50.8787 23.8787L56.6213 29.6213C57.1839 30.1839 57.5 30.947 57.5 31.7426V59.5C57.5 61.1569 56.1569 62.5 54.5 62.5H31.5C29.8431 62.5 28.5 61.1569 28.5 59.5Z" fill="white" stroke="black" stroke-width="0.3"/>
<rect x="31" y="35" width="22" height="1" rx="0.5" fill="#031540"/>
<rect x="31" y="38" width="22" height="1" rx="0.5" fill="#031540"/>
<rect x="31" y="41" width="22" height="1" rx="0.5" fill="#031540"/>
<rect x="31" y="44" width="17" height="1" rx="0.5" fill="#031540"/>
</svg>
  </SvgIcon>
)
}
