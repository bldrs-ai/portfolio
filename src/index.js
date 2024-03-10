import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import {ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './theme'
import useStore from './Store';




const Sample = () =>{
const [dark, setDark] = useState(false)
const { portfolio} = useStore();

  return(
    <React.StrictMode>
        <ThemeProvider theme={dark ? darkTheme(portfolio.colorTheme) : lightTheme(portfolio.colorTheme)}>
          <App changeTheme={() => setDark(!dark)} darkTheme={dark}/>
        </ThemeProvider>
      </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

reportWebVitals();


