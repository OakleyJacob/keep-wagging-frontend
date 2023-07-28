import React from 'react'
import video from '../assets/AdobeStock_84822993.mov'

const Home = () => {
  return (
   <>
    <div className='home-page' >
    <video height = '100%' width = '100%' style = {{marginTop : '90px'}} src = {video} autoPlay loop muted/> 
    </div>
   </>
  )
}

export default Home
