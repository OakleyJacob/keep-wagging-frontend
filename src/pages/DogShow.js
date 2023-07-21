import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DogShow = (props) => {
  const { id } = useParams()
  const selectedDog = props.dogs?.find(dog => dog.id === +id)
  const navigate = useNavigate()
  const goToEdit = () => {
    navigate('/dogedit/'+selectedDog.id)
  }

  const handleDelete = () => {
    props.deleteDog(selectedDog)
    navigate('/dogindex/')
  }

  return (
    <div className='card'>

        <h1>name: {selectedDog?.name}</h1>
        <h2>age: {selectedDog?.age}</h2>
        <h3>vaccinated: {selectedDog?.vaccination_status?'yes':'no'}</h3>
        <p>description: {selectedDog?.description}</p>
        <img src = {selectedDog?.image} alt = {'photo of '+ selectedDog?.name} ></img>
      
        <button onClick = {goToEdit}>Edit This Dog</button>
        <button onClick = {handleDelete}>Delete</button>

    </div>
  )
}

export default DogShow
