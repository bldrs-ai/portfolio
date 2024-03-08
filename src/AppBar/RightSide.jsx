import * as React from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import LogoB from '../Logos/LogoB'
import Stack from '@mui/material/Stack'
import Dialog from '../Dialog'
import Portfolios from '../Portfolios'




const RightSide = ({onGoToLocation}) => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{marginRight:'-15px'}}
    >
      <Button
        variant="contained"
        size="small"
        color='primary'
        disableElevation
      >
        Share
      </Button>
      <Dialog
        actionTitle={'OK'}
        icon={<LogoB/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Bldrs Portfolios
          </Typography>
        }
        dialogContent={
          <Portfolios onGoToLocation={onGoToLocation}/>
        }
      />
    </Stack>
  )

}

export default RightSide
