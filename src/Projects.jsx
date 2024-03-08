import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useStore from './Store'


 export default function Projects({onGoToLocation, onClose}){
  const {portfolios, portfolioNumber, project, setProject} = useStore()
  console.log('project', project)

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
        portfolios[portfolioNumber].projects.map((project, index) => (
          <Chip
            key={`project ${index}`}
            label={`${project.name}`}
            variant='contained'
            onClick={async () => {
              // onGoToLocation(project.lat, project.lng, 14)
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
