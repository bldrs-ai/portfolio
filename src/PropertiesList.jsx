import * as React from 'react';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStore from './Store';

export default function PropertiesList() {
  const {portfolios, portfolioNumber, project, setProject} = useStore()

  return (
    <Stack
    justifyContent='center'>
      <List
      spacing={1}
      >
      {
      portfolios[portfolioNumber].projects[project].projectInfo === 0 &&
      <Box sx={{ width:'100%', textAlign:'center', marginTop:'20px'}}>
      <Typography sx={{color: '#C4CDD6'}} >
        Please select a project
      </Typography>
      </Box>
      }
      {portfolios[portfolioNumber].projects[project] && portfolios[portfolioNumber].projects[project].projectInfo.map((project, index) => (
            <ListItem  key={`accordian ${index}`}>
              <Accordion
              key={project.label}
              title={<Box sx={{fontWeight:'bold'}}>{project.label}</Box>}
              content={
                <Stack sx={{width:'320px'}}>
                  <Stack direction='row' justifyContent={'space-between'}>
                    <Box>Calculated Annual Savings: </Box>
                    <Box sx={{fontWeight:'bold'}}>{project.calculatedAnnualSavings} DK</Box>
                  </Stack>
                  <Stack direction='row' justifyContent={'space-between'}>
                    <Box>Investment:  </Box>
                    <Box sx={{fontWeight:'bold'}}> {project.investment} DK</Box>
                  </Stack>
                  <Stack direction='row' justifyContent={'space-between'}>
                    <Box>Simple Repayment: </Box>
                    <Box sx={{fontWeight:'bold'}}>{project.simpleRepaymentPeriod} years</Box>
                  </Stack>
                </Stack>
                }/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
