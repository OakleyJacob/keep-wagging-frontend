import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap'

const DogShow = (props) => {
  const { id } = useParams()
  const selectedDog = props.dogs?.find(dog => dog.id === +id)
  const navigate = useNavigate()
  const goToEdit = () => {
    navigate('/dogedit/'+selectedDog.id)
  }

  const handleDelete = () => {
    props.deleteDog(selectedDog, id)
    
  }

  return (
    <div className='card' >
      <Card style={{width: '20rem' }}>
        <img  alt={'photo of '+ selectedDog?.name} src={selectedDog?.image}/>
        <CardBody>
          <CardTitle tag="h5">
          Name: {selectedDog?.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Age: {selectedDog?.age}
          </CardSubtitle>
          <CardText>
          Description: {selectedDog?.description}
          </CardText>
          <CardText>
          Vaccinated: {selectedDog?.vaccination_status?'yes':'no'}
          </CardText>
          <button onClick = {goToEdit}>Edit This Dog</button>
        <button onClick = {handleDelete}>Delete</button>

        </CardBody>
      </Card>

    </div>
  )
}

export default DogShow
// className = "picture"