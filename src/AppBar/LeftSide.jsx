import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from '../LogoSP'
import Stack from '@mui/material/Stack'
import Dialog from '../Dialog'
import Projects from '../Projects'



const LeftSide = (onGoToLocation) => {
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
        onClick={onGoToLocation}
        sx={{border:'none'}}
      >
        <Logo scaled={true}/>
      </IconButton>
      <Dialog
        actionTitle={'OK'}
        buttonLabel={'Projects'}
        buttonColor={'primary'}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Projects
          </Typography>
        }
        dialogContent={
          <Projects onGoToLocation={onGoToLocation}/>
        }
      />
    </Stack>
    )
  }

  export default LeftSide
