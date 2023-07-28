import React, { useEffect } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const DogIndex = ({readDogs, dogs}) => {
  useEffect(() => {
    readDogs()
  }, [])
  return (
    <div className='dog-cards'>
      {dogs?.map((dog, index) => {
        return (
          <>
          <Card className='cards-of-dog' key={index} style={{width: '18rem'}}>
            <img alt={`profile of a dog named ${dog.name}`} src={dog.image} />
            <CardBody className='card-body'>
              <CardTitle tag="h5">
                {dog.name}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                I am {dog.age} doggy years old.
              </CardSubtitle>
              <NavLink to={`/dogshow/${dog.id}`} className="nav-link">
                Click to love
              </NavLink>
            </CardBody>
          </Card>
          </>
        )
      })}
    </div>
  )
}

export default DogIndex
