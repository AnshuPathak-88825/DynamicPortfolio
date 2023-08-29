import React from "react";
import TextShpere from "./Header/TextShpere";
import NamePlate from './Header/NamePlate'
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
const Home = ({ timelines, youtubes, skills }) => {
 
  return (
    <div className="home">
      <div className="first">
        <NamePlate />
        <TextShpere/>
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCudeSkillsFace1">
            <img
              src={skills.image1.url}
              alt="Face1"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace2">
            <img
              src={skills.image2.url}
              alt="Face2"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace3">
            <img src={skills.image3.url}
              alt="Face3"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace4">
            <img
              src={skills.image4.url}
              alt="Face4"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace5">
            <img src={skills.image5.url}
              alt="Face5"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace6">
            <img src={skills.image6.url}
              alt="Face6"
              // height="200px"
              // width="200px"
            />
          </div>
        </div>
        <div className="cubeShadow"> </div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">
          {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
