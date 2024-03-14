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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined'
import FormHelperText from '@mui/material/FormHelperText';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { useTheme } from '@mui/material/styles';
import Accordian from '../Accordian';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


export function Projects(){
  const [repo, setRepo] = React.useState(20);
  const [org, setOrg] = React.useState('sp');
  const [file, setFile] = React.useState(10);
  const [save, setSave] = React.useState(false);
  const [deleteMode, setDeleteMode] = React.useState(false);
  const [version, setVersion] = React.useState(true);

  const SaveAction = () => {
    return(
      <>
        <Stack
          direction='row'
          justifyContent="center"
          spacing={1}
          sx={{padding: '0px 0px 10px 0px'}}
        >
          <Chip label="New model" onClick={()=>setVersion(false)} variant={version ? 'outlined' : ''} color='primary'/>
          <Chip label="New version" onClick={()=>setVersion(true)} variant={version ? '' : 'outlined'} color='primary'/>
        </Stack>
        {version &&
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
        }
        {!version &&
          <FormControl variant="standard">
          <TextField
        fullWidth
        variant="outlined"
        size="small"
        multiline
        placeholder="Model name"
        helperText='Please include the extension'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" size="small" sx={{border:'none', width:20, height:20}}>
                <ArrowForwardOutlinedIcon color='primary'/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green', // Increased specificity
          },
        }}
      />
        </FormControl>
        }
    </>
    )
  }
  const DeleteComponent = () => {
    return(
      <>
        {deleteMode &&
          <Button sx={{marginTop:'20px', shadow: 'none'}} variant="contained" disabled={file === 10}>
            Delete
          </Button>
        }
      </>
    )
  }
  const LocationComponent = ({includeCreate}) => {
    return(
      <Stack>
        <Typography variant='overline' sx={{textAlign: 'center'}}>
          Repositories
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={repo}
            onChange={handleChangeRepos}
            size='small'
          >
            <MenuItem value={10}>...</MenuItem>
            <MenuItem value={20}>One</MenuItem>
            <MenuItem value={30}>Two</MenuItem>
            <MenuItem value={40}>Three</MenuItem>
          </Select>
        </FormControl>
        <Typography variant='overline' sx={{textAlign: 'center'}}>
          Folders
        </Typography>
        <FormControl fullWidth >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={file}
            onChange={handleChangeFiles}
            size='small'
          >
            <MenuItem value={10}>...</MenuItem>
            <MenuItem value={20}>One</MenuItem>
            <MenuItem value={30}>Two</MenuItem>
            <MenuItem value={40}>Three</MenuItem>
          </Select>
        </FormControl>
        <Typography variant='overline' sx={{textAlign: 'center'}}>
          Files
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={file}
            onChange={handleChangeFiles}
            size='small'

          >
            <MenuItem value={10}>...</MenuItem>
            <MenuItem value={20}>One</MenuItem>
            <MenuItem value={30}>Two</MenuItem>
            <MenuItem value={40}>Three</MenuItem>
          </Select>
        </FormControl>
        {includeCreate &&
          <Stack
            direction='row'
            justifyContent="center"
            spacing={1}
            sx={{overflow: 'scroll', padding: '10px 0px 0px 0px'}}
            >
            <Chip label="Create New folder" onClick={()=>setVersion(false)} variant={'outlined'} color='primary'/>
          </Stack>
        }
      </Stack>
    )
  }
  const NavComponent = () => {
    return(
      <Stack
      direction='row'
      justifyContent="center"
      spacing={1}
      sx={{overflow: 'scroll'}}
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
    )
  }
  const Organizations = () => {
    return(
      <>
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
      </>
    )
  }
  const handleChangeRepos = (event) => {
    setRepo(event.target.value);
  }
  const handleChangeFiles = (event) => {
    setFile(event.target.value);
  }
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
    sx={{overflow: 'scroll'}}
    >
      <NavComponent/>
      <Organizations/>
      <Stack spacing={1}>
        <Accordian
          key={1}
          title={<Typography variant = 'overline'>Location</Typography>}
          content={<LocationComponent includeCreate = {save}/>}
          width={270}
        />
        { repo && !save &&
          <DeleteComponent/>
        }
        { repo && save &&
          <Accordian
          key={1}
          title={<Typography variant = 'overline'>Action</Typography>}
          content={<SaveAction/>}
          width={270}
        />
        }
      </Stack>
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



