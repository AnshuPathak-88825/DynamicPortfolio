import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Hello this is quote section ,thanks!!</Typography>
      </div>

      <div className="aboutContainer2">
        <div>
          <img
            className="aboutAvatar"
            src="https://avatars.githubusercontent.com/u/76417084?v=4"
            alt="AnkitPathak"
          />
          <Typography variant="h4"
          style={{margin:"1vmax 0",color:"black"}}> Ankit Pathak</Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography style={{margin:"1vmax 0"}}>I am a student from NSUT</Typography>
        </div>
        <div>
          <Typography className="aboutDescription">
            This is description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt molestias repudiandae dolorum id ratione
            rem dignissimos nobis nemo doloremque sequi perferendis, voluptates
            eveniet iusto doloribus dolore excepturi quidem, consectetur sed.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
