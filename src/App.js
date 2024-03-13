import React, {useState, useRef} from 'react'
import './App.css';
import useStore from './Store';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AppBar from './AppBar/AppBar'
import Drawer from './SideDrawer3'
import PropertiesList from './PropertiesList'
import MobileDrawer from './DrawerMobile'
import Dialog from './Dialog'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import ChatUI from './ChatUI'
import Close from '@mui/icons-material/Close';
import Map from './MapBox'
import CircularProgress from '@mui/material/CircularProgress';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import Logo from './LogoSP'
import Portfolio from './Portfolio'
import Share from './Share'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App({changeTheme, darkTheme}) {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/share" element={<Share/>} />
      </Routes>
    </Router>
  )
}

export default App
