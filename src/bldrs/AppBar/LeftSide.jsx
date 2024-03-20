import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import LogoB from '../../Logos/LogoB'
import Stack from '@mui/material/Stack'
import useStore from '../../Store';
import Button from '@mui/material/Button';


const LeftSide = ({onGoToLocation}) => {
  const {
   showBldrs,
   toggleShowBldrs
  } = useStore();

  return(
    <Stack
    direction='row'
    alignItems="center"
    spacing={1}
    sx={{marginLeft:'-10px'}}
    >
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        onClick={async () => {
          window.open('https://www.bldrs.ai', '_blank', 'noopener, noreferrer')
        }}
        sx={{border:'none'}}
      >
        <LogoB/>
      </IconButton>
      <Button variant={showBldrs?"contained":'outlined'} size='small' sx={{borderRadius:'30px', fontWeight:'bold'}}  color='primary' onClick={()=>toggleShowBldrs()}>
          bldrs.ai
        </Button>
    </Stack>
    )
  }

  export default LeftSide