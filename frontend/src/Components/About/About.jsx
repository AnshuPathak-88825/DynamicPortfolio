import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>

      <div className="aboutContainer2">
        <div>
          <img
            className="aboutAvatar"
            src={about.avatar.url}
            alt="AnkitPathak"
          />
          <Typography variant="h4"
          style={{margin:"1vmax 0",color:"black"}}> {about.name}</Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography style={{margin:"1vmax 0"}}>{about.subtitle}</Typography>
        </div>
        <div>
          <Typography className="aboutDescription">
          {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
