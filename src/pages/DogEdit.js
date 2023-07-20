import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { Form, Input, Button, FormGroup, Label} from 'reactstrap'



const DogEdit = (props) => {
  const { id } = useParams()
  const selectedDog = props.dogs?.find(dog => dog.id === +id)
  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    description: "",
    image: "",
    vaccination_status: false
  })
  useEffect(() => {
    setNewDog(selectedDog)
  }, [])
  const handleChange = (e) => {
    if (e.target.name === "vaccination_status" && newDog.vaccination_status) {
      setNewDog({...newDog,[e.target.name]: false})    
    } else if (e.target.name === "vaccination_status" && !newDog.vaccination_status){
      setNewDog({...newDog,[e.target.name]: true}) 
    } else {
      setNewDog({...newDog,[e.target.name]: e.target.value})
    }
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    props.editDog(newDog)
    navigate('/dogshow/'+id)
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="Dog's-Name">
            Dog's Name
          </Label>
          <Input
            name="name"
            placeholder="Type Dog's Name Here"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Dog's-Age">
            Dog's Age
          </Label>
          <Input
            name="age"
            placeholder="Type Dog's Age Here"
            type="number"
            onChange={handleChange}
            value={newDog.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Dog's-Description">
            Dog's Description
          </Label>
          <Input
            name="description"
            placeholder="Describe Your Buddy Here"
            type="text"
            onChange={handleChange}
            value={newDog.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Dog's-Vaccination">
            Check Here If Dog Is Vaccinated
          </Label>
          <Input
            name="vaccination_status"
            type="checkbox"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Dog's-image">
            Dog's Image
          </Label>
          <Input
            name="image"
            type="text"
            placeholder="URL Here"
            onChange={handleChange}
            value={newDog.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default DogEdit
