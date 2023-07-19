import React from 'react'
import { useNavigate } from 'react-router-dom'

const DogIndex = (props) => {
  const navigate = useNavigate()
  const goToShow = (id) => {
    navigate('/dogshow/'+ id)
  }
  return (
    <>
      <ul>
        {props.dogs?.map((value, index) => {
         return  <li key = {index} onClick = {() => goToShow(index+1)}>     
              <h1>name: {value.name}</h1>
              <h2>age: {value.age}</h2>
              <h3>vaccinated: {value.vaccination_status?'yes':'no'}</h3>
              <p>description: {value.description}</p>
              <img src = {value.image} alt = {'photo of '+ value.name}></img>
          </li>
        })}
        
      </ul>
    </>
  )
}

export default DogIndex
