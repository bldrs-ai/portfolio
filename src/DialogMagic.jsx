import React from 'react';
import {
  AppBar, Box, Dialog, IconButton, Slide, Stack, Toolbar, Typography,
  useMediaQuery, useTheme,Link
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LogoB_top from './Logos/LogoB';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import Button from '@mui/material/Button';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const DialogMagic = () => {
  const [open, setOpen] = React.useState(false)
  const [instruction, setInstruction] = React.useState(false)
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
          direction="column" justifyContent="center" alignItems="center" sx={{ width:'100%', height:'100%'}}
          spacing={4}
          >
            <Box sx={{width:'340px', height:'340px'}}>
              {instruction ?
                <Stack
                direction="column"
                alignItems='center'
                justifyContent='center'
                sx={{width:'340px', height:'340px', borderRadius:'20px', color:theme.palette.background.primary}}
                >
                  <Typography variant="overline" sx={{ fontWeight:'bold'}}>
                    1.Go to <Link href="https://www.bldrs.ai/share/v/gh/Swiss-Property-AG/Schneestock-Public/main/ZGRAGGEN.ifc#c:80.66,11.66,-94.06,6.32,2.93,-8.72">Bldrs.ai</Link>
                  </Typography>
                  <Typography variant="overline" sx={{ fontWeight:'bold'}}>
                    2. Click on the magic wand
                  </Typography>
                  <Typography variant="overline" sx={{ fontWeight:'bold'}}>
                    3. Input the image description
                  </Typography>
                  <Typography variant="overline" sx={{ fontWeight:'bold'}}>
                    4. Click create
                  </Typography>
              </Stack>:
              <img src={`${process.env.PUBLIC_URL}/Simpsons.gif`} alt="Example" style={{width:'340px', height:'340px', borderRadius:'20px'}} />

            }
            </Box>
            <Button variant={instruction?'contained':'outlined'} size='small' sx={{borderRadius:'30px', fontWeight:'bold'}}  color='primary'  onClick={()=>setInstruction(!instruction)}>
              Instructions
            </Button>
          </Stack>
      </Dialog>
    </>
  );
};

export default DialogMagic;
