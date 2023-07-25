import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDog, faPeopleGroup, faShirt } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {

  const navigate = useNavigate()
  const goToDogIndex = () => {
    navigate("/dogindex")
  }
  const goToAboutUs = () => {
    navigate("/aboutus")
  }
  const goToHome = () => {
    navigate("/")
  }

  return (
   <>
    <div className='navigation'>
      <Nav  vertical>
        <NavItem>
          <NavLink exact="true" activeclassname="active" href="/">

            <FontAwesomeIcon icon={faHome} color="orange" />

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact="true" activeclassname="active" href="/dogindex">

            <FontAwesomeIcon icon={ faDog } color="red" />

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact="true" activeclassname="active" href="/aboutus">

            <FontAwesomeIcon icon={faPeopleGroup} color="purple" />

          </NavLink>
        </NavItem>
        <NavItem>
           <NavLink exact="true" activeclassname="active" href="/">

            <FontAwesomeIcon icon={faShirt} color="green" />

          </NavLink>
        </NavItem>
      </Nav>
    </div>
   </>
  )
}

export default Navigation
