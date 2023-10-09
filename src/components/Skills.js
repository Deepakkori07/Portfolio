import React from 'react'
import NavBar from './NavBar'
import img1 from '../assets/html_logo.png'
import img2 from '../assets/css_logo.png'
import img3 from '../assets/javascript_logo.png'
import img4 from '../assets/react_logo1.gif'
import img5 from '../assets/redux_logo.png'
import img6 from '../assets/github_logo.jpg'
import SocialLinks from './SocialLinks'

export default function Skills() {
  return (
    <div className="background ">
        <NavBar/>
        <div className='belowSticky'>
        <SocialLinks />
        <h1 className='head'>Experience</h1>
        <p style={{fontSize:'20px'}}>These are the technologies I've worked with</p>
        <div className='skillslogo'>
            <span >
            <img src={img1} alt='html'style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>HTML 5</p>
            </span>
            <span>
            <img src={img2} alt='css' style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>CSS</p>
            </span>
            <span>
            <img src={img3} alt='javscript'style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>JAVASCRIPT</p>
            </span>
        </div>
        <div className='skillslogo'>
            <span>
            <img src={img4} alt='react'style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>REACT JS</p>
            </span>
            <span>
            <img src={img5} alt='redux'style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>REDUX</p>
            </span>
            <span>
            <img src={img6} alt='gitgub'style={{height:'200px'}}></img>
            <p style={{textAlign:'center'}}>GITHUB</p>
            </span>
        </div>
        </div>
    </div>
  )
}
