import React, { useState } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn'

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
      {props.currentUser === null?<> 
      <button onClick={toggleSignUp}>Sign Up</button> <button onClick={toggleSignIn}>Sign In</button> </>:
       <button onClick = {props.signOut}> Sign Out</button>}</h1>

   </>
  )
}

export default Header
