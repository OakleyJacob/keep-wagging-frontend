import React from 'react'
import '../AboutUs.css'
import jacobpic from '../assets/Subject.jpg'
import paulpic from '../assets/Untitled (15).jpg'
import miguelpic from '../assets/Subject (1).jpg'

const AboutUs = () => {
  return (
    <div className = 'aboutUs'>
        <div className = 'myCard'>
          <div className = 'myCard__side myCard__side--front'>
            <img className='card-photos' src= {jacobpic}/>
            <h1 className='title-h1'>Tech Lead</h1>
            <span className='card-name'>
             Jacob Oakley
            </span>
          </div>
          
          <div className = 'myCard__side myCard__side--back'> back</div>
        </div>
          <div className = 'myCard'> 
            <div className = 'myCard__side myCard__side--front'>
            <img className='card-photos' src= {miguelpic}/>
              <h1 className='title-h1'>Project Manager</h1>
              <span className='card-name'>
              Miguel Molina
              </span>
            </div>
            <div className = 'myCard__side myCard__side--back'> back</div>
          </div>
          <div className = 'myCard'> 
            <div className = 'myCard__side myCard__side--front'> 
            <img className='card-photos' src= {paulpic}/>
              <h1 className='title-h1'>Design Lead</h1>
              <span className='card-name'>
              Paul Gooden
              </span>
            </div>
            <div className = 'myCard__side myCard__side--back'> back</div>
          </div>
        </div>
  )
}

export default AboutUs