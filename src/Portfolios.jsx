import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useStore from './Store';


export default function Portfolios({onClose, onGoToLocation}){
const {portfolios, portfolio, setPortfolio, setPortfolioNumber, portfolioNumber} = useStore();


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
            onGoToLocation(portfolios[index].coordinates.lat, portfolios[index].coordinates.lng, 14)
          }}
          color='primary'
        />
      ))
    }
    </Stack>
  </Stack>
)
}
