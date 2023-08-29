import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './Animated.js'
import './NamePlateCss.css'
import 'animate.css';
import { Link } from 'react-router-dom'
const NamePlate = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'n', 'k', 'i', 't', 'P', 'a','t','h','a','k']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const asyncFn = async () => { setTimeout(async () => {
      setLetterClass('text-animate-hover')
    }, 4000) };
  asyncFn(); 
  }, [])
const tagg1="<passion>";
const arr="->";

const tagg2="</future>";

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
             <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>{tagg1}DSA{arr}Open Source{tagg2}</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          

        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default NamePlate;