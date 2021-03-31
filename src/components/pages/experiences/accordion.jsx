import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>SiSC</Typography>
          <Typography className={classes.secondaryHeading}>IT Back-end Lead, august 2020-present</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Decided to get involved in running the department.
            My role is organizing meetings, trainings and teambuildings for my team.
            We continue developing apps and sites for all of our projects while also growing a new generation of enthusiastic volunteers.
            Another big part of my position is offering relevant feedback to the members of the team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>SiSC</Typography>
          <Typography className={classes.secondaryHeading}>
          SiSC Tutoring Coordinator, april-july 2020
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Coordinated the first online SiSC Tutoring edition, the project where we help students get past the difficult exams.
            Got the chance to bring all of our departments into an efficient team consisting of 32 members and multiple advisors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>SiSC</Typography>
          <Typography className={classes.secondaryHeading}>
            IT Back-end member, november 2019-present
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Was recruited to be a part of the IT department.
            I started working on projects by building apps and sites while getting familiar with Js and NodeJs
            and getting exposure to Python using Django with the help of my team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Ubisoft</Typography>
          <Typography className={classes.secondaryHeading}>
            Js/React course
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Took a course held by Ubisoft in order to expand my skill set.
            The classes were mainly focused on Git, Js/React and AWS.
            I learned the exact steps of development of a web app and got more exposure to JavaScript, especially React.
           Also got some tips and tricks on learning a new programming language and getting the best out of libraries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}