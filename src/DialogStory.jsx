import React from 'react';
import {
  AppBar, Box, Card, CardContent, CardMedia, Dialog, IconButton, Slide, Stack, Toolbar, Typography,
  useMediaQuery, useTheme, CardActions,Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoB_top from './Logos/LogoB';
import Builder from './Logos/Logos_cards/Builder';
import Versions from './Logos/Logos_cards/Versions';
import Notes from './Logos/Logos_cards/Notes';
import Engine from './Logos/Logos_cards/Engine';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const InfoCard = ({ title, logo: LogoComponent, description, readMoreLink }) => (
  <Card sx={{ width: 300, height: 320, borderRadius: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
    <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px' }}>
      <LogoComponent scale={3.5}/>
    </CardMedia>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="body1" component="div" textAlign="center">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end', p: 1 }}>
      <Button size="small" href={readMoreLink}> Read More </Button>
    </CardActions>
  </Card>
);

const DialogFullPage = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = [
    { title: 'Build for builders', logo: Builder, description: 'Our goal is to simplify the access to CAD data and project versions, as well as the sharing and searching of relevant 3D data, to enhance team collaboration in a 3D environment.' },
    { title: 'Git enabled Versions', logo: Versions, description: 'We use github for versioning of the project because it is the best in class versioning system enabling the open source evolution of IT' },
    { title: 'Issue tracking', logo: Notes, description: 'We leverage GitHub\'s issue system for note-taking and connecting conversations directly to specific elements of the CAD models to enable model based collaboration.' },
    { title: 'Engine', logo: Engine, description: 'Our engine is designed from group up, offering quick geometry processing, and detailed access to complex IFC/STEP standards all in the browser.' },
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center', // Align items in the center to ensure vertical centering
            overflow: 'auto',
            width: '100%',
            height: '100%',
            '& > *': { m: 1 }, // Add some spacing around each Card
          }}
        >
          {sections.map((section, index) => (
            <InfoCard key={index} title={section.title} logo={section.logo} description={section.description} />
          ))}
        </Box>
      </Dialog>
    </>
  );
};

export default DialogFullPage;
