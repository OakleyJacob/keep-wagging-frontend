import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

// const DogIndex = (props) => {
//   const navigate = useNavigate()
//   const goToShow = (id) => {
//     navigate('/dogshow/'+ id)
//   }
//   return (
//     <>
//       <ul className='dog-cards'>
//         {props.dogs?.map((value, index) => {
//          return  <li  key = {index} onClick = {() => goToShow(index+1)}>     
//               <h1>name: {value.name}</h1>
//               <h2>age: {value.age}</h2>
//               <h3>vaccinated: {value.vaccination_status?'yes':'no'}</h3>
//               <p>description: {value.description}</p>
//               <img src = {value.image} alt = {'photo of '+ value.name}></img>
//           </li>
//         })}
        
//       </ul>
//     </>
//   )
// }

const DogIndex = ({dogs}) => {
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
