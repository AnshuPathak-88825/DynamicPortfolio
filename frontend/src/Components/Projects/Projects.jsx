import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {deleteProject,getUser} from "../../actions/user"

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,id
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
            onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            url="https://ankit-11525.github.io/e-commerce_redstore.github.io/"
            projectImage="https://user-images.githubusercontent.com/75976169/193442392-76cea148-631a-4d45-9cf3-2db27c32c1b0.png"
            projectTitle="RedStore - An eCommerce Website"
            description="RedStore is a fully responsive ecommerce website, built using HTML, CSS, and JavaScript."
            technologies="html css js react"
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default ProjectCard;
