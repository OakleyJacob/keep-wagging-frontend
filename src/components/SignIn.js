import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

function SignIn({modal, toggle, signIn, currentUser}) {
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
 
        signIn({'user': {email:userInfo.email, password:userInfo.password}})
   }
    useEffect(() => {
        if (currentUser != null){
            toggle()
            console.log('toggle');
        }
    }, [currentUser])
  return (
    <div>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Sign In</ModalHeader>
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
                Password
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
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
                Submit
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignIn;