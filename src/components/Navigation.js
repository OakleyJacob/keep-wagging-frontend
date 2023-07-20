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
   <button onClick={goToDogIndex}>Dogs</button>
   <button onClick={goToAboutUs}>AboutUs</button>
   <button onClick={goToHome}>Home</button>
   </>
  )
}

export default Navigation
