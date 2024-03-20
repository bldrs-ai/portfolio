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
<path d="M37.2714 25.6813C38.4055 25.7303 39.4409 25.7792 40.6243 25.7792C41.8569 25.7792 43.0896 25.7303 44.0265 25.6813C44.3223 25.6813 44.5195 25.4366 44.4702 25.1918C44.4702 24.898 44.2237 24.7022 43.9772 24.7512C43.1882 24.8001 42.2021 24.8491 41.1666 24.8491V17.7994C41.1666 17.5057 40.9694 17.3098 40.6736 17.3098C40.3777 17.3098 40.1805 17.5057 40.1805 17.7994V24.8001C39.1944 24.8001 38.2575 24.7512 37.2714 24.7022C36.9755 24.7022 36.7783 24.898 36.7783 25.1918C36.7783 25.4366 36.9755 25.6813 37.2714 25.6813Z" fill={`${colors[colorTheme].default}`}/>
<path d="M55.2579 46.1901C55.2579 42.7573 53.1364 39.6186 49.9293 38.3436V38.2455V38.1964C49.9293 38.1474 49.9293 38.1474 49.9293 38.0984C49.9293 38.0493 49.9293 38.0493 49.88 38.0003C49.88 37.9512 49.8307 37.9512 49.8307 37.9022L49.7813 37.8532C49.7813 37.8532 49.732 37.8041 49.6826 37.8041C49.6333 37.8041 49.6333 37.7551 49.584 37.7551H49.5346C48.0545 37.4608 46.5743 37.3137 45.1928 37.3137V35.2049C47.7091 33.7337 49.4359 31.0364 49.4853 27.8978C49.9293 27.5055 50.176 27.0641 50.176 26.5737C50.176 25.2986 49.732 24.563 49.2386 24.1707V24.1216C49.1892 20.1493 46.5743 16.8636 42.7259 16.0299L42.5778 15.9808C42.1831 15.3923 41.5417 15 40.8016 15C40.0616 15 39.4202 15.3433 39.0255 15.9318L38.8281 15.9808C35.029 16.9126 32.3647 20.2474 32.3647 24.2197C32.3647 24.2688 32.3647 24.2688 32.3647 24.3178C32.3647 24.3669 32.3647 24.3669 32.3647 24.4159C31.7726 24.9553 31.4273 25.691 31.4273 26.5737C31.4273 27.0641 31.674 27.5055 32.118 27.8978C32.1674 30.9384 33.7955 33.5866 36.2625 35.1069V37.3137C34.8317 37.3137 33.3515 37.4608 31.822 37.7551H31.7726C31.7233 37.7551 31.7233 37.7551 31.674 37.8041C31.6246 37.8041 31.6246 37.8532 31.5753 37.8532L31.5259 37.9022C31.5259 37.9512 31.4766 37.9512 31.4766 38.0003C31.4766 38.0493 31.4273 38.0493 31.4273 38.0984C31.4273 38.1474 31.4273 38.1474 31.4273 38.1964V38.2455V38.2945C31.4273 38.2945 31.4273 38.2945 31.3779 38.2945C28.1709 39.5206 26 42.7082 26 46.1411V54.1348C26.148 57.0282 27.6775 58.1562 28.911 59.088L28.9603 59.137L29.0097 59.5293C29.059 60.5101 29.8484 61.1967 30.7859 61.1967H50.5214C51.4588 61.1967 52.2483 60.4611 52.2976 59.5293L52.3469 59.137C53.5804 58.2052 55.1592 57.0773 55.2579 54.1348V46.1901ZM43.0712 43.8852C43.1699 43.7381 43.2686 43.591 43.3673 43.4438C44.2554 42.1688 45.1928 40.8447 45.4888 38.3436C46.5743 38.3926 47.7584 38.4907 48.9426 38.6869L48.7945 43.9343H43.0712V43.8852ZM32.5127 43.8852L32.414 38.6378C33.5982 38.4416 34.733 38.2945 35.8678 38.2945C36.1638 40.8447 37.1012 42.1688 37.9893 43.4438C38.088 43.591 38.1867 43.7381 38.2854 43.8362H32.5127V43.8852ZM39.4695 43.8852C39.2721 43.5419 39.0254 43.2477 38.8281 42.9044C38.088 41.8745 37.3973 40.8447 37.0519 39.1773C38.0387 39.9619 39.3215 40.3543 40.703 40.3543C40.703 40.3543 40.703 40.3543 40.7523 40.3543C42.1338 40.3543 43.4166 39.9129 44.4034 39.1773C44.058 40.8447 43.3673 41.8255 42.6272 42.8554C42.3805 43.1986 42.1831 43.5419 41.9364 43.8852H39.4695ZM38.7294 17.0597C38.7788 17.2068 38.9268 17.354 39.0748 17.354C39.3215 17.403 39.6175 17.2068 39.6669 16.9616C39.6669 16.8636 39.7162 16.7655 39.7162 16.7164C39.7655 16.6674 39.8149 16.5693 39.8149 16.4712C40.0122 16.177 40.3576 15.9808 40.7523 15.9808C41.3444 15.9808 41.8378 16.4222 41.8871 16.9616C41.9364 17.2068 42.1338 17.403 42.3805 17.403H42.4298C42.6272 17.354 42.7752 17.2559 42.8245 17.0597C46.0316 17.9425 48.1531 20.7378 48.1531 24.1707C47.9558 24.2688 47.4131 24.4159 46.1796 24.514C45.9329 24.563 45.6862 24.7592 45.7355 25.0534C45.7355 25.2986 45.9822 25.4948 46.2289 25.4948H46.2783C47.5117 25.3967 48.2025 25.2006 48.6465 25.0044C48.9919 25.3967 49.0906 26.0342 49.0906 26.5247C49.0906 27.5055 45.8835 28.8296 40.703 28.8296C35.5224 28.8296 32.3154 27.5055 32.3154 26.5247C32.3154 25.9362 32.5127 25.4458 32.9074 25.1025C33.3515 25.2986 34.0916 25.4458 35.1277 25.5438H35.177C35.4237 25.5438 35.6211 25.3477 35.6704 25.1025C35.7197 24.8573 35.5224 24.6121 35.2264 24.563C33.8942 24.4159 33.4008 24.2688 33.2528 24.1707C33.3515 20.8359 35.5224 17.9425 38.7294 17.0597ZM33.1541 28.5353C34.9303 29.4181 37.8907 29.8595 40.8016 29.8595C43.7126 29.8595 46.673 29.4181 48.4492 28.5353C48.0545 32.3606 44.7488 35.4011 40.8016 35.4011C36.8052 35.4011 33.5488 32.4096 33.1541 28.5353ZM40.8016 36.3819C41.9858 36.3819 43.1699 36.1367 44.206 35.6953V38.0003C43.3179 38.883 42.0845 39.3734 40.703 39.3734C40.703 39.3734 40.703 39.3734 40.6536 39.3734C39.3215 39.3734 38.1374 38.9321 37.2493 38.0984V35.5973C38.3347 36.0877 39.5188 36.3819 40.8016 36.3819ZM26.9868 54.1348V46.1901C26.9868 43.2477 28.763 40.5504 31.4273 39.3734L31.4766 43.8852H29.8978C29.4044 43.8852 28.9603 44.0814 28.615 44.4247C28.2696 44.768 28.1216 45.2584 28.1216 45.7488L28.911 57.911C27.9242 57.1263 27.0855 56.1455 26.9868 54.1348ZM50.5214 60.2649H30.7859C30.3912 60.2649 30.0458 59.9217 29.9964 59.4803L29.1083 45.6997C29.1083 45.5036 29.1577 45.2584 29.3057 45.1112C29.4537 44.9641 29.6511 44.866 29.8978 44.866H32.0193H49.2879H51.3602C51.8042 44.866 52.1989 45.2584 52.1989 45.6997L51.3108 59.4803C51.2615 59.9217 50.9161 60.2649 50.5214 60.2649ZM52.3963 57.8619L53.1857 45.7488C53.1857 44.7189 52.3469 43.8852 51.3602 43.8852H49.7813L49.88 39.4225C52.495 40.5995 54.2711 43.2967 54.2711 46.1901V54.1348C54.1725 56.1455 53.3337 57.0773 52.3963 57.8619Z" fill={`${colors[colorTheme].default}`}/>
<path d="M50.9279 61.9667H30.3298C30.0417 61.9667 29.8496 62.1207 29.8496 62.3516C29.8496 62.5826 30.0417 62.7366 30.3298 62.7366H50.9279C51.216 62.7366 51.4081 62.5826 51.4081 62.3516C51.4081 62.1207 51.216 61.9667 50.9279 61.9667Z" fill={`${colors[colorTheme].default}`}/>
<path d="M40.6292 50.4175C39.3357 50.4175 38.3193 51.4338 38.3193 52.7273C38.3193 54.0208 39.3357 55.0372 40.6292 55.0372C41.9227 55.0372 42.939 54.0208 42.939 52.7273C42.939 51.4338 41.9227 50.4175 40.6292 50.4175ZM40.6292 54.1132C39.8438 54.1132 39.2433 53.5127 39.2433 52.7273C39.2433 51.942 39.8438 51.3414 40.6292 51.3414C41.4145 51.3414 42.0151 51.942 42.0151 52.7273C42.0151 53.5127 41.4145 54.1132 40.6292 54.1132Z" fill={`${colors[colorTheme].default}`}/>
</svg>

  </SvgIcon>
)
}