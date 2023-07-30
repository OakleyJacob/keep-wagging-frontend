import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, FormGroup, Label, Input } from 'reactstrap';
import notFound from '../assets/type here'
const Donations = ({donate, donations}) => {
  const [modal, setModal] = useState(false);
  const [tYModal, setTYModal] = useState(true);
  const [amount, setAmount] = useState(0)
  const toggle = () => setModal(!modal);
  const toggleTY = () => {
    setTYModal(!tYModal);
  }
  const handleChange = (e) => {
   
      setAmount(e.target.value)
    
  }
  return (
    <div className='donations-form'>
      {/* custom donation modal */}
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Thanks!</ModalHeader>
        <ModalBody>
          We appreciate all of our donations. How much would you like to give?
          <FormGroup>
          <Label  for="Dog's-Name">
            Amount in Dollars
          </Label>
          <Input
            name="name"
            placeholder="Type Dog's Name Here"
            type="number"
            onChange={handleChange}
            value={amount}
          />
        </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            donate(amount);
            toggle();
            toggleTY()
          }}>
            Donate!
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel 😔
          </Button>
        </ModalFooter>
      </Modal>
{/* thank you modal */}
      <Modal isOpen={tYModal} onClick= {toggleTY} >
        <ModalHeader toggle={toggleTY}>You are amazing!</ModalHeader>
        <ModalBody>
          Thank you so much for your donation!!
          <img height = '500px' src = {thankYou} alt = 'thankYou'/>
        </ModalBody>
        <ModalFooter  >
       
              Click anywhere to go back to the site!
         
        </ModalFooter>
      </Modal>

      <h1> Current Donations received! ${donations}</h1>
    <ButtonGroup >
      <Button onClick = {() => {
        donate(10)
        toggleTY();
      }}>
        $10.00
      </Button>
      <Button onClick = {() => {
        donate(20)
        toggleTY();
      }}>
      $20.00
     </Button>
      <Button onClick = {() => {
        donate(30)
        toggleTY();
      }}>
      $30.00
      </Button>
      <Button onClick = {toggle}>
        Custom
      </Button>
    </ButtonGroup>
  </div>
  )
}

export default Donations