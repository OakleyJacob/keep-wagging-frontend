import React from 'react'
import { useParams } from 'react-router-dom'

const DogShow = (props) => {
  const { id } = useParams()
  const selectedDog = props.dogs?.find(dog => dog.id === +id)
  return (
    <div>

        <h1>name: {selectedDog?.name}</h1>
        <h2>age: {selectedDog?.age}</h2>
        <h3>vaccinated: {selectedDog?.vaccination_status?'yes':'no'}</h3>
        <p>description: {selectedDog?.description}</p>
        <img src = {selectedDog?.image} alt = {'photo of '+ selectedDog?.name} ></img>
      
  

    </div>
  )
}

export default DogShow
