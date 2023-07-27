import React from 'react'
import { Nav, NavLink, NavItem } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <h1 className='footer'>
        <Nav className='nav-header'>
          <NavItem className="donate-footer">
          <NavLink className='donate-footer'  href='/donations' active>
              Donate
          </NavLink>
          </NavItem>
        </Nav>
      </h1>
    </>
  )
}

export default Footer