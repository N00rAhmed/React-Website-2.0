import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import '../styles/Experience.css';

const isHorizontal = window.innerWidth < 600;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
    
  }  
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  function a11yProps(index) {
    if (isHorizontal) {
      return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
      };
    } else {
      return {
        id: `vertical-tab-${index}`
      };
    }
  }
  
  const experienceItems = {
    Bootcamp: {
      jobTitle: "The Developer Academy",
      duration: "Feb 2022 - May 2022",
      desc: [
          "Collaborated in groups working in an Agile environment as well as individually on projects such as building APIs and full-stack web applications",
          "Created full-stack applications in Rect consuming APIs such as Open Weather API",
          "Used test-driven development",
          "Made websites using JavaScript, React, Bootstrap, HTML/CSS"
      ]
    },
    Hackathon: {
      jobTitle: "BCS, The Chartered Institute for IT",
      duration: "Apr 2022 - Apr 2022",
      desc: [
        "Participated in virtual hackathon and developed a project using JavaScript",
        "Created project which could find the minimum number of fills to completely repaint a picture using 2-dimensional arrays",
        "My project ended up getting 3rd place"
      ]
    },
    "The Sheffield College": {
      jobTitle: "BTECH Business Level 3 National Extended Diploma",
      duration: "Sept 2019 - July 2021",
      desc: [
        "Main subjects included Marketing, Law and Finance",
        "Collaborated in groups on work such as making presentations showing financial data",
        "Completed Analysis on diffrent aspects of business operation and the use of promotional advertising"
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          {/* <span className="joblist-job-company">{key}</span> */}
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                  <li key={i}>{descItem}</li>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};
export default JobList;