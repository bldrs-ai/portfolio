import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoB from '../../Logos/LogoB'
import Stack from '@mui/material/Stack'
import Dialog from '../../Dialog'
import {Projects} from '../Projects'
import useStore from '../../Store';
import Button from '@mui/material/Button';


const LeftSide = ({onGoToLocation}) => {
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
        sx={{border:'none'}}
      >
        <LogoB/>
      </IconButton>
      <Button variant="contained" size='small' sx={{borderRadius:'30px', fontWeight:'bold'}}  color='primary'>
          bldrs.ai
        </Button>
      {/* <Dialog
        actionTitle={'OK'}
        buttonLabel={'bldrs.ai'}
        buttonColor={'primary'}
        tabs={false}
        tabList={['Recent']}
        noTitle={true}
        dialogTitle={
          <Typography>
            Projects
          </Typography>
        }
        dialogContent={
          <Projects onGoToLocation={onGoToLocation}/>
        }
      /> */}
    </Stack>
    )
  }

  export default LeftSide
