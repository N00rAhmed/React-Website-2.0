import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import '../styles/Experience.css';
import Experience from "./Experience";

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
// GirlsandBoysinTech

"GirlsandBoysinTech":{
  jobTitle: "Application Developer",
  duration: "Oct 2023 - present",
  desc: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    // "Developed a responsive React web application from scratch on both client and server side",
    // "Created MSSQL database and imported data from excel spreadsheet and queried data for integration with API",
    // "Created API using node.js, express.js for routing and used GET requests and query method to access data from DataBase",
    // "Fetched data from API in react.js"
            
  ]
},


   
  "Flytag Flight Support":{
      jobTitle: "Software Engineer Intern",
      duration: "July 2022 - Oct 2023",
      desc: [
        "Developed a responsive React web application from scratch on both client and server side",
        "Achieved 50% reduction in React code size by optimizing data storage with unique IDs in MSSQL Table and implementing streamlined Node.js API query for efficient data retrieval and integration in React.js via GET requests",
        "Created MSSQL database and imported data from excel spreadsheet into database and queried data",
        "Integrated API with MSSQL database using node.js, express.js for routing and used GET requests and query method to access data from DataBase",
                        
      ]
    },

    "Suhbah Collective":{
      jobTitle: "Full-Stack Developer",
      duration: "May 2023 - July 2023",
      desc: [
        "Made CRUD API using Node.js, Express.js and MongoDB/Mongoose",
        "Used GET, POST, PUT and DELETE requests to manipulate data",
        "Designed UI using React.js and fetched data from API here",
        "Created user authentication for admin using json web tokens",
        "Added functionaluty such as adding announcements, add businesses and delete businesses etc."
      ]
    },

    "Opengenus":{
      jobTitle: "Software Developer Intern",
      duration: "May 2023 - July 2023",
      desc: [
        "Authored 10 highly-viewed blog articles on diverse topics, reaching a wide audience of thousands on the OpenGenus IQ platform: https://iq.opengenus.org/author/noor/",
        "Designed and implemented a Python language translation program by making API calls to Google Translate API",
        "Developed a Python, Flask, and HTML-based prime number generator which accepts user input",
        "Made substantial contributions to OpenGenus IQ, including articles covering essential algorithmic topics, such as using adjacency lists and matrices in Python",
        // "Worked on multiple projects involving HTML/CSS, and JavaScript, including the creation of a car racing game and a bubble shooter game"
      ]
    },



    Bootcamp: {
      jobTitle: "The Developer Academy",
      duration: "Feb 2022 - May 2022",
      desc: [
          "Collaborated in groups working in an Agile environment as well as individually on projects such as building APIs and full-stack web applications",
          "Created full-stack applications in React consuming APIs such as Open Weather API",
          "Used test-driven development",
          "Made websites using JavaScript, React.js, Bootstrap, HTML/CSS and more"
      ]
    },

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
      <div className="space"></div>
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