import React from 'react'
import '../AboutUs.css'

const AboutUs = () => {
  return (
    <div className = 'aboutUs'>
        <div className = 'myCard'>
          <div className = 'myCard__side myCard__side--front'> Jacob Oakley</div>
          <div className = 'myCard__side myCard__side--back'> back</div>
        </div>
        <div className = 'myCard'> 
        <div className = 'myCard__side myCard__side--front'> Miguel Molina</div>
          <div className = 'myCard__side myCard__side--back'> back</div>
        </div>
        <div className = 'myCard'> 
          <div className = 'myCard__side myCard__side--front'> Paul Gooden</div>
          <div className = 'myCard__side myCard__side--back'> back</div>
        </div>
      </div>
  )
}

export default AboutUs