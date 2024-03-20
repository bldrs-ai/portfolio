import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import LeftSide from './LeftSide'
import RightSide from './RightSide'


export default function PrimaryAppBar({ darkTheme, changeTheme, onGoToLocation }) {
  const theme = useTheme()

  return (
    <AppBar
      color='secondary'
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: `1px solid ${theme.palette.background.paper}`, backgroundColor: theme.palette.background.default }}
    >
    <Toolbar>
      <LeftSide onGoToLocation={onGoToLocation}/>
      <Box sx={{ flexGrow: 1 }} />
      <RightSide onGoToLocation={onGoToLocation}/>
      </Toolbar>
    </AppBar>
  );
}
