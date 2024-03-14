import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import useStore from '../Store';
import {colors} from '../colors'


export default function Logo({scale=1.0}){
  const {colorTheme } = useStore();

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
      <svg width="84" height="82" viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_75_55)">
      <circle cx="41" cy="41" r="40.5" fill="#0047FF" stroke="black"/>
      <path d="M37.4846 24.7776C38.8412 24.8362 40.0799 24.8947 41.4955 24.8947C42.9701 24.8947 44.4447 24.8362 45.5654 24.7776C45.9193 24.7776 46.1553 24.4848 46.0963 24.192C46.0963 23.8406 45.8013 23.6063 45.5064 23.6649C44.5627 23.7235 43.383 23.782 42.1443 23.782V15.3488C42.1443 14.9974 41.9084 14.7632 41.5545 14.7632C41.2006 14.7632 40.9647 14.9974 40.9647 15.3488V23.7235C39.785 23.7235 38.6643 23.6649 37.4846 23.6063C37.1307 23.6063 36.8948 23.8406 36.8948 24.192C36.8948 24.4848 37.1307 24.7776 37.4846 24.7776Z" fill="white"/>
      <path d="M59 49.3114C59 45.2048 56.4621 41.4502 52.6256 39.9249V39.8076V39.7489C52.6256 39.6902 52.6256 39.6902 52.6256 39.6316C52.6256 39.5729 52.6256 39.5729 52.5666 39.5142C52.5666 39.4556 52.5076 39.4556 52.5076 39.3969L52.4486 39.3383C52.4486 39.3383 52.3895 39.2796 52.3305 39.2796C52.2715 39.2796 52.2715 39.2209 52.2125 39.2209H52.1535C50.3828 38.8689 48.6121 38.6929 46.9595 38.6929V36.1703C49.9696 34.4103 52.0354 31.1837 52.0944 27.4291C52.6256 26.9598 52.9207 26.4318 52.9207 25.8451C52.9207 24.3198 52.3895 23.4398 51.7993 22.9705V22.9118C51.7403 18.1599 48.6121 14.2293 44.0084 13.232L43.8314 13.1733C43.3592 12.4693 42.5919 12 41.7066 12C40.8212 12 40.054 12.4107 39.5818 13.1146L39.3457 13.1733C34.801 14.288 31.6138 18.2772 31.6138 23.0292C31.6138 23.0878 31.6138 23.0878 31.6138 23.1465C31.6138 23.2052 31.6138 23.2052 31.6138 23.2638C30.9056 23.9092 30.4924 24.7891 30.4924 25.8451C30.4924 26.4318 30.7875 26.9598 31.3187 27.4291C31.3777 31.0664 33.3255 34.2343 36.2766 36.053V38.6929C34.5649 38.6929 32.7943 38.8689 30.9646 39.2209H30.9056C30.8465 39.2209 30.8465 39.2209 30.7875 39.2796C30.7285 39.2796 30.7285 39.3383 30.6695 39.3383L30.6105 39.3969C30.6105 39.4556 30.5514 39.4556 30.5514 39.5142C30.5514 39.5729 30.4924 39.5729 30.4924 39.6316C30.4924 39.6902 30.4924 39.6902 30.4924 39.7489V39.8076V39.8662C30.4924 39.8662 30.4924 39.8662 30.4334 39.8662C26.597 41.3329 24 45.1462 24 49.2528V58.8153C24.1771 62.2766 26.0067 63.6259 27.4823 64.7405L27.5413 64.7992L27.6003 65.2685C27.6594 66.4418 28.6037 67.2632 29.7251 67.2632H53.3339C54.4553 67.2632 55.3997 66.3832 55.4587 65.2685L55.5177 64.7992C56.9933 63.6845 58.882 62.3352 59 58.8153V49.3114ZM44.4216 46.5541C44.5396 46.3781 44.6577 46.2021 44.7757 46.0261C45.8381 44.5008 46.9595 42.9169 47.3137 39.9249C48.6121 39.9836 50.0287 40.1009 51.4452 40.3356L51.2681 46.6128H44.4216V46.5541ZM31.7909 46.5541L31.6728 40.2769C33.0894 40.0422 34.4469 39.8662 35.8044 39.8662C36.1585 42.9169 37.2799 44.5008 38.3423 46.0261C38.4604 46.2021 38.5784 46.3781 38.6965 46.4955H31.7909V46.5541ZM40.113 46.5541C39.8769 46.1435 39.5818 45.7915 39.3457 45.3808C38.4604 44.1488 37.6341 42.9169 37.2209 40.9222C38.4013 41.8609 39.9359 42.3302 41.5885 42.3302C41.5885 42.3302 41.5885 42.3302 41.6476 42.3302C43.3002 42.3302 44.8347 41.8022 46.0152 40.9222C45.602 42.9169 44.7757 44.0902 43.8904 45.3222C43.5953 45.7328 43.3592 46.1435 43.0641 46.5541H40.113ZM39.2277 14.464C39.2867 14.64 39.4637 14.816 39.6408 14.816C39.9359 14.8746 40.29 14.64 40.3491 14.3466C40.3491 14.2293 40.4081 14.112 40.4081 14.0533C40.4671 13.9946 40.5261 13.8773 40.5261 13.76C40.7622 13.408 41.1754 13.1733 41.6476 13.1733C42.3558 13.1733 42.946 13.7013 43.0051 14.3466C43.0641 14.64 43.3002 14.8746 43.5953 14.8746H43.6543C43.8904 14.816 44.0675 14.6986 44.1265 14.464C47.9629 15.5199 50.5008 18.8639 50.5008 22.9705C50.2648 23.0878 49.6155 23.2638 48.14 23.3812C47.8449 23.4398 47.5497 23.6745 47.6088 24.0265C47.6088 24.3198 47.9039 24.5545 48.199 24.5545H48.258C49.7336 24.4371 50.5599 24.2025 51.0911 23.9678C51.5042 24.4371 51.6223 25.1998 51.6223 25.7865C51.6223 26.9598 47.7858 28.5437 41.5885 28.5437C35.3912 28.5437 31.5548 26.9598 31.5548 25.7865C31.5548 25.0825 31.7909 24.4958 32.2631 24.0851C32.7943 24.3198 33.6796 24.4958 34.9191 24.6131H34.9781C35.2732 24.6131 35.5093 24.3785 35.5683 24.0851C35.6273 23.7918 35.3912 23.4985 35.0371 23.4398C33.4435 23.2638 32.8533 23.0878 32.6762 22.9705C32.7943 18.9812 35.3912 15.5199 39.2277 14.464ZM32.5582 28.1918C34.683 29.2477 38.2243 29.7757 41.7066 29.7757C45.1889 29.7757 48.7302 29.2477 50.855 28.1918C50.3828 32.7677 46.4283 36.405 41.7066 36.405C36.9258 36.405 33.0304 32.8263 32.5582 28.1918ZM41.7066 37.5783C43.1231 37.5783 44.5396 37.2849 45.7791 36.757V39.5142C44.7167 40.5702 43.2411 41.1569 41.5885 41.1569C41.5885 41.1569 41.5885 41.1569 41.5295 41.1569C39.9359 41.1569 38.5194 40.6289 37.457 39.6316V36.6396C38.7555 37.2263 40.172 37.5783 41.7066 37.5783ZM25.1804 58.8153V49.3114C25.1804 45.7915 27.3052 42.5649 30.4924 41.1569L30.5514 46.5541H28.6627C28.0725 46.5541 27.5413 46.7888 27.1282 47.1995C26.715 47.6101 26.5379 48.1968 26.5379 48.7834L27.4823 63.3326C26.3019 62.3939 25.2985 61.2206 25.1804 58.8153ZM53.3339 66.1485H29.7251C29.253 66.1485 28.8398 65.7378 28.7808 65.2099L27.7184 48.7248C27.7184 48.4901 27.7774 48.1968 27.9545 48.0208C28.1315 47.8448 28.3676 47.7275 28.6627 47.7275H31.2007H51.8583H54.3373C54.8685 47.7275 55.3406 48.1968 55.3406 48.7248L54.2782 65.2099C54.2192 65.7378 53.8061 66.1485 53.3339 66.1485ZM55.5767 63.2739L56.5211 48.7834C56.5211 47.5515 55.5177 46.5541 54.3373 46.5541H52.4486L52.5666 41.2156C55.6948 42.6235 57.8196 45.8501 57.8196 49.3114V58.8153C57.7015 61.2206 56.6981 62.3352 55.5767 63.2739Z" fill="white"/>
      <path d="M53.8203 68.1842H29.1796C28.835 68.1842 28.6052 68.3684 28.6052 68.6447C28.6052 68.921 28.835 69.1053 29.1796 69.1053H53.8203C54.1649 69.1053 54.3947 68.921 54.3947 68.6447C54.3947 68.3684 54.1649 68.1842 53.8203 68.1842Z" fill="white"/>
      <path d="M41.5 54.3684C39.9526 54.3684 38.7368 55.5842 38.7368 57.1316C38.7368 58.6789 39.9526 59.8947 41.5 59.8947C43.0473 59.8947 44.2631 58.6789 44.2631 57.1316C44.2631 55.5842 43.0473 54.3684 41.5 54.3684ZM41.5 58.7895C40.5605 58.7895 39.8421 58.0711 39.8421 57.1316C39.8421 56.1921 40.5605 55.4737 41.5 55.4737C42.4394 55.4737 43.1579 56.1921 43.1579 57.1316C43.1579 58.0711 42.4394 58.7895 41.5 58.7895Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_75_55">
      <rect width="84" height="82" fill="white"/>
      </clipPath>
      </defs>
      </svg>
  </SvgIcon>
)
}
