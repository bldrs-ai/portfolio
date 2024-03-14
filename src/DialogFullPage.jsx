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
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';


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
          {<PlayCircleOutlinedIcon size='inherit'/>}
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
            Tutorials
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
          alignContent={'center'}
        >
        <List>
          <ListItem>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TDHzYiibbP8?si=EYlLNsTM5myceSxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ListItem>
        <ListItem>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TDHzYiibbP8?si=EYlLNsTM5myceSxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ListItem>
        </List>
        <List>
          <ListItem>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TDHzYiibbP8?si=EYlLNsTM5myceSxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ListItem>
        <ListItem>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TDHzYiibbP8?si=EYlLNsTM5myceSxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ListItem>
        </List>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
