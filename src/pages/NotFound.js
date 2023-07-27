import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from '../assets/404.webp'
import { Button } from 'reactstrap'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
  
    <div className = 'notFound'>   <img height = '500px' src = {notFound} alt = '404'/>
    <br/>You seem to have lost your way!<br/>
    <Button onClick = {() => {navigate('/')}}> Click here to return home!</Button></div>
    </>
  )
}

export default NotFound
