import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

  const navigate = useNavigate()
  const goToDogIndex = () => {
    navigate("/dogindex")
  }
  const goToAboutUs = () => {
    navigate("/aboutus")
  }
  const goToHome = () => {
    navigate("/")
  }

  return (
   <>
    <div className='navigation'>
      <button className= 'home' onClick={goToHome}>Home</button>
      <br/>
      <br/>
      <button className= 'dogs' onClick={goToDogIndex}>Dogs</button>
      <br/>
      <br/>
      <button className= 'about_us' onClick={goToAboutUs}>AboutUs</button>
      </div>  
   </>
  )
}

export default Navigation
