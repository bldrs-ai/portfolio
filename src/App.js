import logo from './logo.svg';
import {Box} from '@mui/material'
import './App.css';
import Map from './MapBox'

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
      </Box>
  );
}

export default App;
