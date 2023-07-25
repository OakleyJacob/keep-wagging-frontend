import React, { useState } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn'
import { Nav, NavLink, NavItem } from 'reactstrap';

const Header = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);

  const toggleSignUp = () => setSignUpModal(!signUpModal);
  const [signInModal, setSignInModal] = useState(false);

  const toggleSignIn = () => setSignInModal(!signInModal);
  return (
   <>
      <SignUp modal = {signUpModal} toggle = {toggleSignUp} signUp = {props.signUp} currentUser = {props.currentUser}/>
      <SignIn modal = {signInModal} toggle = {toggleSignIn} signIn = {props.signIn}/> 
      <h1 className='header'>Welcome to Keep Wagging      
        <Nav className='nav-header'>
          <NavItem>
              <NavLink active onClick={toggleSignUp}>
                Sign Up
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink onClick={toggleSignIn}>
                Sign In
              </NavLink>
          </NavItem>
        </Nav>
      </h1>
   </>
  )
}

export default Header
