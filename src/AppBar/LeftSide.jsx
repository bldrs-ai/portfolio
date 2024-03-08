import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoSP from '../Logos/LogoSP'
import LogoCP from '../Logos/LogoPortfolio'
import Stack from '@mui/material/Stack'
import Dialog from '../Dialog'
import Projects from '../Projects'
import useStore from '../Store';
import {ConstructionOutlined} from '@mui/icons-material';


const logo = [<LogoSP/>, <LogoCP/>]

const LeftSide = ({onGoToLocation}) => {
  const {portfolios, portfolioNumber} = useStore();
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
        onClick={()=>onGoToLocation(portfolios[portfolioNumber].coordinates.lat, portfolios[portfolioNumber].coordinates.lng, 14)}
      >
        {logo[portfolioNumber]}
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
