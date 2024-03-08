import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery';
import Autocomplete from '../AutoComplete'
import { useTheme } from '@mui/material/styles';
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const searchElements = [
  { title: 'address 1' },
  { title: 'address 2' },
  { title: 'address 3' },
  { title: 'address 4' },
]


export default function PrimaryAppBar({ darkTheme, changeTheme, onGoToLocation }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme()

  return (
    <AppBar
      color='secondary'
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: `1px solid ${theme.palette.background.paper}`, backgroundColor: theme.palette.background.default }}
    >
    <Toolbar>
      <LeftSide onGoToLocation={onGoToLocation}/>
      {!isMobile &&
        <Stack
          direction='row'
          alignItems="center"
          justifyContent="center"
          sx={{width:'72%'}}
          spacing={1}
        >
          <Autocomplete title={"Search"} elements={searchElements}/>
        </Stack>
      }
      <Box sx={{ flexGrow: 1 }} />
      <RightSide onGoToLocation={onGoToLocation}/>
      </Toolbar>
    </AppBar>
  );
}
