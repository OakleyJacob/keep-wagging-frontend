import React from 'react'
import { Card, CardBody, CardTitle, Button,CardSubtitle, CardText, CardGroup, CardImg } from 'reactstrap'

const AboutUs = () => {
  return (
    <>
      <CardGroup className='card-group'>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle className='card-title-name' tag="h5">
              Miguel Molina
            </CardTitle>
            <CardSubtitle
              className="card-text"
              tag="h6"
            >
              Project Manager/Product Manager
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Contact Me
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle className='card-title-name' tag="h5">
              Jacob Oakley
            </CardTitle>
            <CardSubtitle
              className="card-text"
              tag="h6"
            >
              Tech Lead
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Contact Me
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle className='card-title-name' tag="h5">
              Paul Gooden
            </CardTitle>
            <CardSubtitle
              className="card-text"
              tag="h6"
            >
              Design Lead
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>
              Contact Me
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  )
}

export default AboutUs
