import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle,CardText, Button } from 'reactstrap'

const DogShow = (props) => {
  const { id } = useParams()
  const selectedDog = props.dogs?.find(dog => dog.id === +id)
  const navigate = useNavigate()
  const goToEdit = () => {
    navigate('/dogedit/'+selectedDog.id)
  }

  const handleDelete = () => {
    props.deleteDog(id)

    
  }

  return (
    <div className='bigcard' >

      <Card style={{width: '20rem', boxShadow: '2px 5px 5px 5px rgba(0,0,0,0.2)' }}>
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
          <Button onClick = {goToEdit}>Edit Dog</Button>
          <NavLink to={'/dogindex'} reloadDocument>
            <Button style = {{marginLeft: '97px'}}onClick = {handleDelete}>Adopt Me!</Button>
          </NavLink>
        </CardBody>
      </Card>
      
    </div>
  )
}

export default DogShow
