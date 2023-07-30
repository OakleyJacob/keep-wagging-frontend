import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDog, faPeopleGroup, faPlus, faHandHoldingDollar, faHandLizard } from '@fortawesome/free-solid-svg-icons'


const Navigation = (props) => {

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
  const goToDogNew = () => {
    navigate("/dognew")
  }
  const goToDonate = () => {
    navigate("/donations")
  }

  return (
   <>
    <div className='navigation'>
      <Nav  vertical>
        <NavItem>
          <NavLink data-testid='home-icon' exact="true" activeclassname="active" onClick={goToHome}>

            <FontAwesomeIcon icon={faHome} color="orange" />

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink data-testid='home-icon2' exact="true" activeclassname="active" onClick={goToDogIndex}>

            <FontAwesomeIcon icon={ faDog } color="red" />

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink data-testid='home-icon3' exact="true" activeclassname="active" onClick={goToAboutUs}>

            <FontAwesomeIcon icon={faPeopleGroup} color="purple" />

          </NavLink>
        </NavItem>
       {props.currentUser!== null?<> <NavItem>
           <NavLink data-testid='home-icon4' exact="true" activeclassname="active" onClick={goToDogNew}>

           <FontAwesomeIcon icon={faPlus} style = {{width:"100%"}} />
          </NavLink> 
          <NavLink data-testid='home-icon5' exact="true" activeclassname="active" onClick={goToDonate}>

          <FontAwesomeIcon icon={faHandHoldingDollar} style = {{width:"100%"}} color = 'green' />
          </NavLink> 
        </NavItem> </> :null}
      </Nav>
    </div>
   </>
  )
}

export default Navigation