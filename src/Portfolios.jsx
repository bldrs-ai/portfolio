import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useStore from './Store';


export default function Portfolios({onClose}){
const {portfolios, portfolio, setPortfolio, setPortfolioNumber} = useStore();


return(
  <Stack
  direction='column'
  justifyContent="center"
  spacing={1}
  sx={{overflow: 'scroll', width: '200px'}}
>
  <Stack
    direction='column'
    justifyContent="center"
    spacing={1}
    sx={{ overflow: 'scroll', width: '200px' }}
  >
    {
      portfolios.map((element, index) => (
        <Chip
          key={`portfolio ${index}`}
          label={element.name}
          variant={element.name === portfolio.name ? 'contained':'outlined' }
          onClick={async () => {
            onClose()
            setPortfolio(portfolios[index])
            setPortfolioNumber(index)
          }}
          color='primary'
        />
      ))
    }
    </Stack>
  </Stack>
)
}
