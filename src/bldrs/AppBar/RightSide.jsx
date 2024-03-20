import * as React from 'react';
import Typography from '@mui/material/Typography';
import LogoGit from '../../Logos/LogoGit'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Dialog from '../../Dialog'
import GithubPanel from '../GithubPanel'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import useStore from '../../Store';
import {colors} from '../../colors'
import DialogFullPage from '../../DialogFullPage';
import DialogStory from '../../DialogStory'
import DialogMagic from '../../DialogMagic'



const Colors = () => {
  const { setColorTheme } = useStore()
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
      onClick={()=>setColorTheme(3)}
      sx={{border:'none', backgroundColor:colors[3].primary}}
    />
      <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      color="inherit"
      onClick={()=>setColorTheme(2)}
      sx={{border:'none', backgroundColor:colors[2].primary}}
    />
  </Stack>
)
}

const RightSide = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    sx={{marginRight:'-15px'}}
    >
      <Stack   direction="row">
      <DialogFullPage/>
      <DialogStory/>
      <DialogMagic/>
      <Dialog
        actionTitle={'OK'}
        icon={<ColorLensOutlinedIcon size='inherit'/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography>
            Choose color theme
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
          <Typography variant='overline'>
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
