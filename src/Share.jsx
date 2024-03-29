import React, {useState, useRef} from 'react'
import './App.css';
import useStore from './Store';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AppBar from './bldrs/AppBar/AppBar'
import Drawer from './SideDrawer3'
import PropertiesList from './PropertiesList'
import MobileDrawer from './DrawerMobile'
import Dialog from './Dialog'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import ChatUI from './ChatUI'
import Close from '@mui/icons-material/Close';
import Map from './MapBox'
import CircularProgress from '@mui/material/CircularProgress';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import Logo from './LogoSP'


const AboutShare = () => {
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
    Welcome to a collection of Swiss property projects, backed by Bldrs.ai.
    Feel free to explore by selecting a project on the map or browsing through the 'Projects' section.
     Each one includes a 3D model—just click on the cube icon to view it. And if you have any questions,
      our assistant is here to chat with you.
    </Typography>
  </Stack>
  )
}

const Help = () => {
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
      Click on the cube to get access to the 3d model of the project.
    </Typography>
    <Typography variant='body1'>
      Click on the chat to engage chatGPT.
    </Typography>
  </Stack>
  )
}


function Share() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
    <AppBar/>
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        position:'fixed',
        width:'100%',
        height:'100%',
        // background: 'black'
      }}
    >
      <iframe style={{width:isMobile?'90%':'60%', height:'70%', borderRadius:'20px'}}
        title='model'
        src="https://bldrs.ai/share/v/gh/OlegMoshkovich/Bldrs_Plaza/main/IFC_STUDY.ifc#c:207.638,-8.074,196.438,-10.793,38.17,-3.936" width="100%"  frameborder="0">
            Your browser does not support iframes.
      </iframe>
    </Stack>

    {/* </Box>
      <Box sx={{position:'fixed', top:'300px', width:360, height:360}}>
        <iframe
          title='model'
          src="https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Schneestock-Public/main/ZGRAGGEN.ifc" width="100%"  frameborder="0">
              Your browser does not support iframes.
        </iframe>
      </Box> */}
    </>
  );
}

export default Share;
