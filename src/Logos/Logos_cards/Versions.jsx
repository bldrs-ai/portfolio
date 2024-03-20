import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import useStore from '../../Store';
import {colors} from '../../colors'


export default function Logo({scale=1.0}){
  const {colorTheme } = useStore();

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="41" cy="41" r="40.5" fill={`${colors[colorTheme].primary}`} />
<circle cx="36" cy="24" r="5.5" stroke={`${colors[colorTheme].default}`}/>
<path d="M36 52V30" stroke={`${colors[colorTheme].default}`}/>
<path d="M36 44L41.1172 43.4077C48.2848 42.5781 53.4848 36.1865 52.8387 29V29" stroke={`${colors[colorTheme].default}`}/>
<circle cx="53" cy="24" r="5.5" stroke={`${colors[colorTheme].default}`}/>
<path d="M41.5 57C41.5 60.0376 39.0376 62.5 36 62.5C32.9624 62.5 30.5 60.0376 30.5 57C30.5 53.9624 32.9624 51.5 36 51.5C39.0376 51.5 41.5 53.9624 41.5 57Z" stroke={`${colors[colorTheme].default}`}/>
</svg>

  </SvgIcon>
)
}