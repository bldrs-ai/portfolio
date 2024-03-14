import * as React from 'react';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined'
import FormHelperText from '@mui/material/FormHelperText';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { useTheme } from '@mui/material/styles';


export function Projects(){
  const [repo, setRepo] = React.useState(20);
  const [org, setOrg] = React.useState('sp');
  const [file, setFile] = React.useState(10);
  const [save, setSave] = React.useState('');
  const [deleteMode, setDeleteMode] = React.useState(false);
  const [version, setVersion] = React.useState(true);
  const theme = useTheme()


  const handleChangeRepos = (event) => {
    setRepo(event.target.value);
  };
  const handleChangeFiles = (event) => {
    setFile(event.target.value);
  };
  const handleOrgSelect = (value) =>{
    if(org === 'sp' && value==='sp'){
      setOrg('')
    }
    if(org === 'bldrs' && value==='bldrs'){
      setOrg('')
    }
    setOrg(value)
  }
  return(
    <Stack
    direction='column'
    justifyContent="center"
    sx={{overflow: 'scroll', width:'270px'}}
    >

      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', padding: '10px 0px'}}
      >
        <Chip label="Open"
          onClick={()=>{
            setSave(false)
            setDeleteMode(false)
          }
          }
          variant={(!save && !deleteMode) ? '' : 'outlined'}
          color='primary'/>
        <Chip label="Save"
         onClick={()=>{
         setSave(true)
         setDeleteMode(false)
         }} variant={save ? '' : 'outlined'} color='primary'/>
        <Chip label="Delete"
        onClick={()=>{
          setSave(false)
          setDeleteMode(true)
        }} variant={deleteMode ? '' : 'outlined'} color='primary'/>
      </Stack>
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Organizations
      </Typography>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', paddingBottom: '10px'}}
      >
        <Chip label="Swiss Property" onClick={()=>handleOrgSelect('sp')} variant={org === 'sp' ? '' : 'outlined'} color='primary'/>
        <Chip label="Bldrs.ai" onClick={()=>handleOrgSelect('bldrs')} variant={org==='bldrs' ? '' : 'outlined'} color='primary'/>
      </Stack>
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Repositories
      </Typography>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={repo}
          onChange={handleChangeRepos}
          size='small'
          sx={{
            borderRadius: '20px',
            // Apply border color using theme
            border: `1px solid ${theme.palette.primary.main}`,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', // Remove default border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.palette.primary.main} !important`, // Maintain border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.palette.primary.main} !important`, // Maintain border color when focused
            },
          }}
        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>

    { repo && !save &&
      <>
    <Typography variant='overline' sx={{textAlign: 'center'}}>
        Folders
      </Typography>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={file}
          onChange={handleChangeFiles}
          size='small'
          sx={{ borderRadius: '20px' }}

        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Files
      </Typography>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={file}
          onChange={handleChangeFiles}
          size='small'
          sx={{ borderRadius: '20px' }}
        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
      </Box>
      {deleteMode &&
        <Button sx={{marginTop:'20px', shadow: 'none'}} variant="contained" disabled={file === 10}>
          Delete
        </Button>
      }
    </>
    }

      { repo && save &&
      <>
    <Typography variant='overline' sx={{textAlign: 'center'}}>
        Folders
      </Typography>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={file}
          onChange={handleChangeFiles}
          size='small'
          sx={{ borderRadius: '20px' }}
        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', padding: '10px 0px 0px 0px'}}
      >
        <Chip label="Create New folder" onClick={()=>setVersion(false)} variant={'outlined'} color='primary'/>
      </Stack>
      </Box>
      <Typography variant='overline' sx={{textAlign: 'center', paddingTop: '20px'}}>
        Action
      </Typography>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', padding: '0px 0px 30px 0px'}}
      >
        <Chip label="Create New Model" onClick={()=>setVersion(false)} variant={version ? 'outlined' : ''} color='primary'/>
        <Chip label="Create a Version" onClick={()=>setVersion(true)} variant={version ? '' : 'outlined'} color='primary'/>
      </Stack>
      {version &&
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={file}
            onChange={handleChangeFiles}
            size='small'
          >
            <MenuItem value={null}>...</MenuItem>
            <MenuItem value={20}>One</MenuItem>
            <MenuItem value={30}>Two</MenuItem>
            <MenuItem value={40}>Three</MenuItem>
          </Select>
          <FormHelperText>Choose model to version</FormHelperText>
        </FormControl>

        </Box>

      }
      {!version &&
        <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start" size = 'small'>
              <UploadFileOutlinedIcon size = 'small'/>
            </InputAdornment>
          }
        />
        <Typography variant='caption'>
          Please include file extension in the name
        </Typography>
      </FormControl>
      }
    </>
    }



{ repo && save &&
      <>

    </>
    }
    </Stack>
  )
}


export function Recent(){
  return(
    <Stack
    direction='column'
    justifyContent="center"
    spacing={1}
    sx={{overflow: 'scroll'}}
  >
  <Typography variant='overline' sx={{textAlign: 'center', paddingTop: '10px'}}>
    Samples
  </Typography>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Schneestock" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='filled' color='primary'/>
  <Typography variant='overline' sx={{textAlign: 'center', paddingTop: '10px'}}>
    Recent
  </Typography>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Schneestock" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
  </Stack>
  )
}
