import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import LogoB from './Logos/LogoB'
import Builder from './Logos/Builder'
import LogoGit from './Logos/LogoGit'
import Notes from './Logos/Notes'
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFullPage() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <IconButton aria-label="edit" size='large' onClick={handleClickOpen} sx={{border:'none'}}>
          {<InfoOutlinedIcon size='inherit'/>}
        </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
        sx={{
        position: 'relative',
        shadow:'none',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${theme.palette.background.paper}`,
        backgroundColor: theme.palette.background.default }}
        >
        <Toolbar>
            <Stack
            sx={{marginLeft:'-10px'}}
            direction={'row' }
            justifyContent={'center'}
            alignItems={'center'}
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
          <Typography  variant={'overline'} color='primary' sx={{marginLeft: 2}}>
            Information
          </Typography>
            </Stack>
          <Box sx={{ flexGrow: 1 }} />
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size='small'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack
          direction={isMobile? 'column' : 'row' }
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'100%', height:'100%'}}
          spacing={4}
        >
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'360px', height:'400px', border:'1px solid white', borderRadius:'20px', backgroundColor:'white'}}
          spacing={3}
        >
          <Typography>
          Bldrs.ai mission
          </Typography>
          <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'100px', height:'100px', border:'1px solid white'}}>
          <LogoB scale={4}/>
          </Stack>
          <Typography sx={{padding:'14px', height:'130px'}}>
            Our mission is to empower builders by developing an open infrastructure and CAD tools that enable modularity and reuse of 3D engineering assets
            Our roll out dvelopment decisions are guided by out mission.
          </Typography>
        </Stack>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'360px', height:'400px', border:'1px solid white', borderRadius:'20px', backgroundColor:'white'}}
          spacing={3}
        >
          <Typography>
          Github enabled Version
          </Typography>
          <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'100px', height:'100px', border:'1px solid white'}}>
          <LogoGit scale={4}/>
          </Stack>
          <Typography sx={{padding:'14px', height:'130px'}}>
          Share is a platform for viewing and editing open source CAD models that is connected to GItHub.
          </Typography>
        </Stack>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'360px', height:'400px', border:'1px solid white', borderRadius:'20px', backgroundColor:'white'}}
          spacing={3}
        >
          <Typography>
          Build for builders
          </Typography>
          <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'100px', height:'100px', border:'1px solid white'}}>
          <Builder scale={4}/>
          </Stack>
          <Typography sx={{padding:'14px', height:'130px'}}>
          Every team of builders needs to:
            Use CAD designs
            Access different versions of the data because things often change
            Share information linked to project context
            Work together using the project data
            Easily find project information

            We exist to simplify each one of the item on the list.
          </Typography>
        </Stack>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'360px', height:'400px', border:'1px solid white', borderRadius:'20px', backgroundColor:'white'}}
          spacing={3}
        >
          <Typography>
          Excellent issue tracking
          </Typography>
          <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{width:'100px', height:'100px', border:'1px solid white'}}>
          <Notes scale={4}/>
          </Stack>
          <Typography sx={{padding:'14px', height:'130px'}}>
          To enable collaboration we leverage GitHub's issue system for note-taking and connecting conversations directly to specific elements of our models.
          </Typography>
        </Stack>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
