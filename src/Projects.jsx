import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useStore from './Store'


 export default function Projects({onGoToLocation, onClose}){
  const {portfolios, portfolioNumber, project, setProject} = useStore()

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
        portfolios[portfolioNumber].projects.map((element, index) => (
          <Chip
            key={`project ${index}`}
            label={`${element.name}`}
            variant= {project===index ? 'contained':'outlined'}
            onClick={async () => {
              onGoToLocation(element.lat, element.lng, 14)
              setProject(index)
              onClose()
            }}
            color='primary'
          />
        ))
      }
      </Stack>
    </Stack>
  )
}
