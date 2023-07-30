import React, { useEffect, useState } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn'
import { Nav, NavLink, NavItem, Button } from 'reactstrap';

const Header = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const toggleSignUp = () => setSignUpModal(!signUpModal);
  const [signInModal, setSignInModal] = useState(false);
  const toggleSignIn = () => setSignInModal(!signInModal);
   
  useEffect(() => {
    if (props.currentUser!== null){
      setSignInModal(false)
      setSignUpModal(false)
    }
  }, [props])
  return (

   <>
      <SignUp modal = {signUpModal} toggle = {toggleSignUp} signUp = {props.signUp} currentUser = {props.currentUser}/>
      <SignIn modal = {signInModal} toggle = {toggleSignIn} signIn = {props.signIn}/> 
      <h1 className='header'>
      <span>Welcome to Keep Wagging</span>      
        <Nav className='nav-header'>
          {props.currentUser === null?<>
          <NavItem>
              <Button className='sign-up' color="success" onClick={toggleSignUp}>
                Sign Up
              </Button >
          </NavItem>
          <NavItem>
              <Button className='sign-in' color="success" onClick={toggleSignIn}>
                Sign In
              </Button >
          </NavItem></>:
          <NavItem>
              <Button  className='sign-in' color="success" onClick={props.signOut}>
                Sign Out
              </Button >
          </NavItem>}
        </Nav>
      </h1>
   </>
  )
}

export default Header
