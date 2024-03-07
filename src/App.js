import {Box} from '@mui/material'
import './App.css';
import Map from './MapBox'
import AppBar from './AppBar/AppBar'

function App() {
  return (
<Box
        sx={{
          position:'fixed',
          width:'100%',
          height: '100%',

          zIndex:-100}}
      >
        <Map />
        <AppBar/>
      </Box>
  );
}

export default App;
