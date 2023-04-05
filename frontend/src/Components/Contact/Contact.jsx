import React from 'react'
import "./Contact.css"
import {Button,Typography} from "@mui/material"
const Contact = () => {
  return (
    <div className='contact'>
    <div className='contactRightBar'></div>
    <div className='contactContainer'>
        <form className='contactContainerForm'>
            <input type='text' name="" id="" />
            <input type="email" name="" id=''/>
            <textarea name='' id='' cols="30" rows="10"></textarea>
            <Button></Button>
        </form>
    </div> 
    </div>
  )
}

export default Contact