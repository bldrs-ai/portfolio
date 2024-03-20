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

const InfoCard = ({ title, logo: LogoComponent, description, readMoreLink, expandedDescription }) => {
  const [expanded, setExpanded] = React.useState(false);
  return(
    <Card sx={{ width: 300, height: expanded ? 500: 360, borderRadius: 1, display: 'flex', flexDirection: 'column', marginRight:'10px' }}>
      { !expanded &&
        <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginTop:4 }}>
        <LogoComponent scale={3.5}/>
      </CardMedia>
      }
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="overline" component="div" textAlign="center">
            {title}
          </Typography>
          <Typography variant="body2" textAlign="center">
            {expanded? expandedDescription : description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', p: 1 }}>
          <Button size="small" href={readMoreLink} sx={{fontSize:12}} onClick={()=>setExpanded(!expanded)}> Read More </Button>
        </CardActions>
      </Card>
  )
};

const DialogFullPage = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = [
    { title: 'Built for builders',
      logo: Builder,
      description: 'Our goal is to simplify the access to CAD data and project versions, as well as the sharing and searching of relevant BIM data.',
      expandedDescription:
      `Our goal is to transform how teams manage and access CAD data in 3D environments,
      making project versions more accessible and simplifying the sharing and searching of CAD data.
      This initiative aims to eliminate common obstacles in team collaboration, ensuring that members can effortlessly find and utilize project data contained in digital twins.
      By enhancing these processes, we aim to enable a more cohesive and efficient workflows.
      `
    },
    { title: 'Git enabled Versions',
      logo: Versions,
      description: 'Versioning is tough, but Git makes it simpler, and GitHub is the top choice with the best tools for Git; that is why our versioning workflows are based on GitHub toolchain.',
      expandedDescription:
      `We have chosen GitHub for our project versioning due to its unparalleled standing in the versioning system domain, particularly for its pivotal role in the open-source movement within IT.
      GitHub's platform offers a robust set of tools that facilitate not just the management and tracking of changes across project versions, but also foster a collaborative environment where distributed project teams can contribute and workcollectively.
      This adoption aligns with our commitment to leveraging mature and avaialble best-in-class technology tools.
      `
    },
    { title: 'Issue tracking',
      logo: Notes,
      description: 'We leverage GitHub\'s issue system for note-taking and connecting conversations directly to specific elements of the CAD models to enable model based collaboration.',
      expandedDescription:
      `Our approach capitalizes on GitHub's issue tracking system, transforming it into a dynamic tool for note-taking and discussion directly linked to distinct facets of the digital twin models.
      This strategy fosters a model-based collaboration environment where team members can annotate, raise queries, and provide insights right at the source of the subject matter.
      By integrating conversation threads with specific model elements, we ensure clarity and context in our communications, significantly enhancing the efficiency of our collaborative efforts.
      This method not only streamlines problem-solving but also enriches digital twin models with a layer of interactive, collective intelligence, driving more informed decision-making on a project.
      `
    },
    { title: 'Engine',
      logo: Engine,
      description: 'Our engine is designed from group up, offering quick geometry processing, and detailed access to complex IFC/STEP standards all in the browser.',
      expandedDescription:
      `Our engine is built from scratch to make working with digtial twins fast and easy, all from the web browser.
      It's really good at understanding complex rules and formats like IFC and STEP, which are important for building and product designs.
      This means you can get into deep workflows involving BIM models without needing any proprietory desktop based software.
      It's all about making things simpler and more accessible for everyone on the team, whether you're working on a big project or just need to look at a detailed design.
      `
    },
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
            <InfoCard key={index} title={section.title} logo={section.logo} description={section.description} expandedDescription={section.expandedDescription} />
          ))}
        </Box>
      </Dialog>
    </>
  );
};

export default DialogFullPage;
