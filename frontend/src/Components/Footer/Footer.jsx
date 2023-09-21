import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey , I'm Anshu Pathak! Full stack developer 🧑🏻‍💻 | Open Source
          Enthusiast | Technical writer ✍<br></br>
          <b> Anshu Pathak</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/AnshuPathak-88825" target="black">
          <BsGithub />
        </a>
        <a
          href="https://anshupathak.hashnode.dev/"
          target="black"
        >
          <SiHashnode />
        </a>
        <a href="https://www.instagram.com/shubhanshusig/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/anshu-kumar-pathak/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
