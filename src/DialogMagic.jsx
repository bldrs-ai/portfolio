import React from 'react';
import {
  AppBar, Box, Dialog, IconButton, Slide, Stack, Toolbar, Typography,
  useMediaQuery, useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LogoB_top from './Logos/LogoB';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const DialogMagic = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <IconButton aria-label="info" size="large" onClick={() => setOpen(true)} sx={{ border: 'none' }}>
        <SmartToyOutlinedIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', boxShadow: 'none', borderBottom: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.default }}>
          <Toolbar>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ ml: '-10px' }}>
              <IconButton edge="end" aria-label="logo" color="inherit" sx={{ border: 'none' }}>
                <LogoB_top />
              </IconButton>
              <Typography variant="overline" color="primary" sx={{ ml: 2 }}>
                AI render
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>

        </AppBar>
          {/* Inserting the image */}
          <Stack
          direction="column" justifyContent="center" alignItems="center" sx={{ width:'100%', height:'100%'}}>
            <Box sx={{width:'300px', height:'300px'}}>
              <img src={`${process.env.PUBLIC_URL}/Simpsons.gif`} alt="Example" style={{width:'300px', height:'300px', borderRadius:'20px'}} />
            </Box>
          </Stack>
      </Dialog>
    </>
  );
};

export default DialogMagic;
