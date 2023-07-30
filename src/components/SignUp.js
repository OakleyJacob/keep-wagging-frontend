import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';

function SignUp({modal, toggle, signUp}) {
    const [conPassword, setConPassword] = useState('')
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }
    const handleConfirmChange = (e) => {
        setConPassword(e.target.value)
    }
    const handleSubmit = () => {
        if (conPassword === userInfo.password){

            signUp({'user': {email:userInfo.email, password:userInfo.password}})
        }
        else {
            console.log('didnt confirm password')
        }
    }
  return (
    <div>
     
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Sign on up!</ModalHeader>
        <ModalBody>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter your Email"
                type="email"
                onChange = {handleChange}
                value = {userInfo.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Enter Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="Enter Password Here"
                type="password"
                onChange = {handleChange}
                value = {userInfo.password}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Confirm Password
                </Label>
                <Input
                id="examplePassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"

                onChange = {handleConfirmChange}
                />
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
                Submit!
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignUp;