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
      <SignUp modal = {signUpModal} toggle = {toggleSignUp} signUp = {props.signUp}/>
      <SignIn modal = {signInModal} toggle = {toggleSignIn} signIn = {props.signIn}/>
      <h1 className='header'>Welcome to Keep Wagging   <button onClick={toggleSignUp}>Sign Up</button> <button onClick={toggleSignIn}>Sign In</button></h1>

   </>
  )
}

export default Header
