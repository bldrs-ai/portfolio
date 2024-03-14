import * as React from 'react';
import Typography from '@mui/material/Typography';
import LogoGit from '../../Logos/LogoGit'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Dialog from '../../Dialog'
import GithubPanel from '../GithubPanel'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import useStore from '../../Store';
import { useTheme } from '@emotion/react';
import {colors} from '../../colors'

import Divider from '@mui/material/Divider';

const Colors = () => {
  const { colorTheme, setColorTheme } = useStore()
  const theme = useTheme()
return(
  <Stack
  direction='row'
  sx={{width:'200px'}}
  justifyContent={'center'}
  alignContent={'center'}
  spacing={3}
  >
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      color="inherit"
      onClick={()=>setColorTheme(0)}
      sx={{border:'none', backgroundColor:colors[0].primary}}
    />
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      color="inherit"
      onClick={()=>setColorTheme(1)}
      sx={{border:'none', backgroundColor:colors[1].primary}}
    />
  </Stack>
)
}


const Tutorials = () => {

}

const RightSide = ({onGoToLocation}) => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    sx={{marginRight:'-15px'}}
    >
      <Stack   direction="row">
      <Dialog
        actionTitle={'OK'}
        icon={ <InfoOutlinedIcon size='inherit'/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Story
          </Typography>
        }
        dialogContent={
          <GithubPanel/>
        }
      />
      <Dialog
        actionTitle={'OK'}
        icon={<PlayCircleOutlinedIcon size='inherit'/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Video Tutorials
          </Typography>
        }
        dialogContent={
          <GithubPanel/>
        }
      />
      <Dialog
        actionTitle={'OK'}
        icon={<ColorLensOutlinedIcon size='inherit'/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Colors
          </Typography>
        }
        dialogContent={
          <Colors/>
        }
      />
      </Stack>
      <Dialog
        actionTitle={'OK'}
        icon={<LogoGit/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Github Resources
          </Typography>
        }
        dialogContent={
          <GithubPanel/>
        }
      />
    </Stack>
  )

}

export default RightSide
