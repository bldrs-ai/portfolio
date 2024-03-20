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
<path d="M61.09 49.5078C60.7538 50.1897 59.9699 50.7052 58.6622 50.9649C57.3636 51.2229 55.6414 51.2067 53.6 50.9097C49.5228 50.3167 44.2874 48.621 38.8724 45.9511C33.4573 43.2812 28.9245 40.1605 25.9715 37.2874C24.493 35.8488 23.4315 34.4925 22.8454 33.3053C22.2553 32.1099 22.1869 31.1741 22.5231 30.4922C22.8593 29.8103 23.6433 29.2948 24.9509 29.0351C26.2495 28.7771 27.9717 28.7933 30.0132 29.0903C34.0903 29.6834 39.3257 31.379 44.7408 34.0489C50.1558 36.7188 54.6886 39.8395 57.6416 42.7126C59.1202 44.1512 60.1816 45.5075 60.7677 46.6947C61.3578 47.8901 61.4262 48.8259 61.09 49.5078Z" stroke={`${colors[colorTheme].default}`}/>
<path d="M60.4262 29.25C60.8063 29.9085 60.7993 30.8467 60.2887 32.0782C59.7817 33.3013 58.8113 34.7241 57.4301 36.2565C54.6716 39.3168 50.3528 42.7275 45.1242 45.7462C39.8956 48.765 34.7825 50.7998 30.7529 51.6586C28.7353 52.0886 27.0178 52.2175 25.7051 52.0451C24.3833 51.8715 23.5673 51.4085 23.1871 50.75C22.807 50.0916 22.814 49.1534 23.3246 47.9219C23.8316 46.6988 24.802 45.2759 26.1832 43.7436C28.9417 40.6833 33.2605 37.2726 38.4891 34.2538C43.7177 31.2351 48.8308 29.2003 52.8604 28.3415C54.878 27.9115 56.5955 27.7826 57.9082 27.955C59.23 28.1286 60.046 28.5916 60.4262 29.25Z" stroke={`${colors[colorTheme].default}`}/>
<path d="M41.8065 18.5C42.5668 18.5 43.3758 18.9752 44.1871 20.0331C44.9927 21.0838 45.7398 22.6356 46.3762 24.5979C47.6473 28.517 48.4417 33.9625 48.4417 40C48.4417 46.0375 47.6473 51.483 46.3762 55.4021C45.7398 57.3644 44.9927 58.9162 44.1871 59.9669C43.3758 61.0248 42.5668 61.5 41.8065 61.5C41.0462 61.5 40.2372 61.0248 39.426 59.9669C38.6203 58.9162 37.8733 57.3644 37.2368 55.4021C35.9658 51.483 35.1714 46.0375 35.1714 40C35.1714 33.9625 35.9658 28.517 37.2368 24.5979C37.8733 22.6356 38.6203 21.0838 39.426 20.0331C40.2372 18.9752 41.0462 18.5 41.8065 18.5Z" stroke={`${colors[colorTheme].default}`}/>
</svg>

  </SvgIcon>
)
}