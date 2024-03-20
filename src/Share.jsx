import React from 'react'
import './App.css';
import useStore from './Store';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from './bldrs/AppBar/AppBar'
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';


const iframeString = `
  <iframe src="https://bldrs.ai" />
`;


function Share() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const {
    showBldrs,
   } = useStore();

  return (
    <Paper variant="background"
    sx={{
      position:'fixed',
      width:'100%',
      height:'100%',
    }}>
    <AppBar/>
    <Stack
      direction='row'
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        position:'fixed',
        width:'100%',
        height:'100%',
      }}
    >
      {showBldrs &&
        <iframe style={{width:isMobile?'90%':'60%', height:'80%', borderRadius:'20px', marginTop:'30px'}}
        title='model'
        src="https://bldrs.ai/share/v/gh/OlegMoshkovich/Bldrs_Plaza/main/IFC_STUDY.ifc#c:207.638,-8.074,196.438,-10.793,38.17,-3.936" width="100%"  frameborder="0">
            Your browser does not support iframes.
        </iframe>
      }
        {!showBldrs &&
        <Paper >
          <Stack justifyContent={'center'} alignItems={'center'} spacing={1} sx={{padding:'20px'}}>
            <Typography sx={{textAlign:'center', padding:'0px 30px'}}>
              Bldrs.ai can be integrated into other websites using an iframe.
            </Typography>
            <Typography>
              {iframeString}
            </Typography>
          </Stack>
        </Paper>

        }
    </Stack>
    </Paper>
  );
}

export default Share;