import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'


export default function GithubPanel({onClose}){
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
        <Chip
          label={'Wiki'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://github.com/bldrs-ai/Share/wiki', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Sample organization'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://github.com/Swiss-Property-AG', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Sample repository'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://github.com/Swiss-Property-AG/Eisvogel-Public', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Sample Project'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://github.com/Swiss-Property-AG/Eisvogel-Public', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Sign up'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://github.com/signup', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
    </Stack>
  </Stack>
)
}
