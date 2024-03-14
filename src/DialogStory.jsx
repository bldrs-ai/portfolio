import React from 'react';
import {
  AppBar, Box, Dialog, IconButton, Slide, Stack, Toolbar, Typography,
  useMediaQuery, useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoB from './Logos/Logos_cards/LogoB';
import LogoB_top from './Logos/LogoB';
import LogoGit from './Logos/Logos_cards/LogoGit';
import Builder from './Logos/Logos_cards/Builder';
import Notes from './Logos/Logos_cards/Notes';
import Engine from './Logos/Logos_cards/Engine';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const InfoCard = ({ title, logo: LogoComponent, description }) => (
  <Stack
    justifyContent="center"
    alignItems="center"
    sx={{ width: '300px', height: '400px', border: '1px solid white', borderRadius: '20px', backgroundColor: 'white' }}
    spacing={3}
  >
    <Typography>{title}</Typography>
    <Box sx={{ width: '100px', height: '100px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LogoComponent  scale={3.5}/>
    </Box>
    <Typography sx={{ padding: '14px', height: '130px' }}>{description}</Typography>
  </Stack>
);

const DialogFullPage = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = [
    // { title: 'Bldrs.ai mission', logo: LogoB, description: 'Our mission is to empower builders by developing an open infrastructure and CAD tools that enable modularity and reuse of 3D engineering assets. Our roll out development decisions are guided by our mission.' },
    { title: 'Build for builders', logo: Builder, description: 'We aim to simplify access to CAD data and project versions, sharing and searching of relevant 3D data, team collaboration in 3D.' },
    { title: 'Git enabled Versions', logo: LogoGit, description: 'Share is a platform for viewing and editing open source CAD models that is connected to GitHub.' },
    { title: 'Issue tracking', logo: Notes, description: 'We leverage GitHub\'s issue system for note-taking and connecting conversations directly to specific elements of the CAD models to enable collaboration.' },
    { title: 'Engine', logo: Engine, description: 'Our engine is designed to be speedy and impressive, offering quick geometry processing, and detailed access to complex IFC/STEP standards all in the browser' },
  ];

  return (
    <>
      <IconButton aria-label="info" size="large" onClick={() => setOpen(true)} sx={{ border: 'none' }}>
        <InfoOutlinedIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', boxShadow: 'none', borderBottom: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.default }}>
          <Toolbar>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ ml: '-10px' }}>
              <IconButton edge="end" aria-label="logo" color="inherit" sx={{ border: 'none' }}>
                <LogoB_top />
              </IconButton>
              <Typography variant="overline" color="primary" sx={{ ml: 2 }}>
                Information
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="center" alignItems="center" sx={{ width: '100%', height: '100%' }} spacing={4}>
          {sections.map((section, index) => (
            <InfoCard key={index} title={section.title} logo={section.logo} description={section.description} />
          ))}
        </Stack>
      </Dialog>
    </>
  );
};

export default DialogFullPage;
