import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";

import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";

import {Typography} from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
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
    pointLight.position.set(8,5,5);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8,-5,-5);



    //  const lightHelper=new THREE.PointLightHelper(pointLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background=spaceTexture;
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
        <Typography variant="h3">
          TIMELINE
        </Typography>
        <TimeLine timelines={[1,2,3,4]}/>
      </div>
    </div>
  );
};

export default Home;
