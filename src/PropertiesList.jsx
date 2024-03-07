import * as React from 'react';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';


const projects = [
  {'title' : "TurmfalkeSuites, Andermatt"
, 'content':"Modern, elegant and sustainable: the TurmfalkeSuites in Andermatt. The wooden construction combines the latest technology, unique comfort with timeless style. Developed to a new standard: equipped with an indoor swimming pool, its own SPA, integrated fitness studio and an indoor golf simulator, the Kestrel Suites offer living and living on an excellent level. The town of Andermatt lies at 1,444 meters in the middle of the Swiss Alps and offers its residents a unique backdrop and countless leisure opportunities - in summer and winter. A place and a project to fall in love with."},
{'title' : "TurmfalkeSuites, Andermatt"
, 'content':"Modern, elegant and sustainable: the TurmfalkeSuites in Andermatt. The wooden construction combines the latest technology, unique comfort with timeless style. Developed to a new standard: equipped with an indoor swimming pool, its own SPA, integrated fitness studio and an indoor golf simulator, the Kestrel Suites offer living and living on an excellent level. The town of Andermatt lies at 1,444 meters in the middle of the Swiss Alps and offers its residents a unique backdrop and countless leisure opportunities - in summer and winter. A place and a project to fall in love with."},
{'title' : "TurmfalkeSuites, Andermatt"
, 'content':"Modern, elegant and sustainable: the TurmfalkeSuites in Andermatt. The wooden construction combines the latest technology, unique comfort with timeless style. Developed to a new standard: equipped with an indoor swimming pool, its own SPA, integrated fitness studio and an indoor golf simulator, the Kestrel Suites offer living and living on an excellent level. The town of Andermatt lies at 1,444 meters in the middle of the Swiss Alps and offers its residents a unique backdrop and countless leisure opportunities - in summer and winter. A place and a project to fall in love with."},

]
export default function PropertiesList() {
  return (
    <Stack>
      <List
      spacing={1}
      >
        {projects.map((project, index) => (
            <ListItem  key={`accordian ${index}`}>
              <Accordion key={index} title={project.title} content={project.content}/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
