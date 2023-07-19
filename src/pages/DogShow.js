import React from 'react'
import { useParams } from 'react-router-dom'

const DogShow = (props) => {
  const { id } = useParams()
 
  return (
    <div>
      {props.dogs?.map((value, index) => {
        if (+id === index){
        return  <li key = {index} >     
        <h1>name: {value.name}</h1>
        <h2>age: {value.age}</h2>
        <h3>vaccinated: {value.vaccination_status?'yes':'no'}</h3>
        <p>description: {value.description}</p>
        <img src = {value.image} alt = {'photo of '+ value.name} ></img>
      
    </li>
        } else return
        
      })}
    </div>
  )
}

export default DogShow
