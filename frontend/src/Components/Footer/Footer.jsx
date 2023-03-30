import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hey , I'm Ankit!
        A Frontend Webdeveloper and Open source enthusiast from India india 
        <br></br>
        <b> Ankit Pathak</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Ankit-11525" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCT6c0Uy0GuBfUp2-A1m06xQ" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/ankitk_ig/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ankitpathak11525/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;