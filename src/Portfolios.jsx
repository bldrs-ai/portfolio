import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'


export default function Portfolios({onClose}){
const res = [{iri:'SP'}, {iri:'Denmark Proptech'}]

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
          key={index} // Use a unique identifier for `key` if available
          label={`${project.iri}`} // Convert `project.iri` to a string, if it's not already
          variant='contained'
          onClick={async () => {
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
