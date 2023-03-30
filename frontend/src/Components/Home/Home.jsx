import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";

import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";

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
const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new MeshStandardMaterial({ map: moonTexture }); //only respond on light
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new MeshBasicMaterial({ map: venusTexture }); //only respond on light
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8, -5, -5);

    //  const lightHelper=new THREE.PointLightHelper(pointLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    //  scene.add(lightHelper);

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div className="home">

      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCudeSkillsFace1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpz2UhQvvWkHt2O1PuikPCRRoypKobg2V5bA&usqp=CAU"
              alt="Face1"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8fEEw6bXkKjgXkht3_zyHkofafom48XcLyy-b65BcA&s"
              alt="Face2"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace3">
            <img
              src="data:image/png;base64,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"
              alt="Face3"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace4">
            <img
              src="data:image/jpeg;base64,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"
              alt="Face4"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace5">
            <img
              src="data:image/png;base64,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"
              alt="Face5"
              // height="200px"
              // width="200px"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCudeSkillsFace6">
            <img
              src="data:image/jpeg;base64,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"
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
          <YoutubeCard image="https://i9.ytimg.com/vi/Cx2AEH1GWos/mqdefault.jpg?v=60a9e074&sqp=CIyClKEG&rs=AOn4CLBiFA-W_UWJQGTd0m-Z5p0S1YCI1Q" title="WELCOME TO NSUT CAMPUS TOUR"/>
          <YoutubeCard url="https://www.youtube.com/watch?v=FJXCB-Ctvqc" image="https://i9.ytimg.com/vi_webp/FJXCB-Ctvqc/mqdefault.webp?v=61e28500&sqp=CLiElKEG&rs=AOn4CLDzsLfAlwZl6WKMUzZUBlLQC0fG4Q" title="Crying Colours || Code: CRYCOLR "/>
          <YoutubeCard image="https://i9.ytimg.com/vi/Cx2AEH1GWos/mqdefault.jpg?v=60a9e074&sqp=CIyClKEG&rs=AOn4CLBiFA-W_UWJQGTd0m-Z5p0S1YCI1Q" title="WELCOME TO NSUT CAMPUS TOUR"/>
          <YoutubeCard url="https://www.youtube.com/watch?v=FJXCB-Ctvqc" image="https://i9.ytimg.com/vi_webp/FJXCB-Ctvqc/mqdefault.webp?v=61e28500&sqp=CLiElKEG&rs=AOn4CLDzsLfAlwZl6WKMUzZUBlLQC0fG4Q" title="Crying Colours || Code: CRYCOLR "/>
          <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJOj_a8v3N3jfNKnnpg-fvHqfmmVZD53DWw&usqp=CAU" title="WELCOME TO NSUT CAMPUS TOUR"/>
          <YoutubeCard url="https://www.youtube.com/watch?v=FJXCB-Ctvqc" image="https://i9.ytimg.com/vi_webp/FJXCB-Ctvqc/mqdefault.webp?v=61e28500&sqp=CLiElKEG&rs=AOn4CLDzsLfAlwZl6WKMUzZUBlLQC0fG4Q" title="Crying Colours || Code: CRYCOLR "/>
        </div>
        </div>
    </div>
  );
};

export default Home;
