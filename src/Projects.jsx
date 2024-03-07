import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useStore from './Store';


 export default function Projects({onGoToLocation, onClose}){
  const {res} = useStore()

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
        res.map((project, index) => (
          <Chip
            key={index}
            label={`${project.iri}`}
            variant='contained'
            onClick={async () => {
              onGoToLocation(project.lat, project.lng, 14)
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
