import React from 'react'
import web from '../Imges/img4.jpg'
import Common from './Common'

const About = () => {
  return (
    <>
      <Common
       name='Welcome to About page'
       btnName = 'Click me!'
       imgsrc = {web} 
      />
  </>
  )
}

export default About
