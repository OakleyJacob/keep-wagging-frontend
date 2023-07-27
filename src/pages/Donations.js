import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const Donations = () => {
  return (
    <div className='donations-form'>
    <ButtonGroup >
      <Button>
        $10.00
      </Button>
      <Button>
      $20.00
     </Button>
      <Button>
      $30.00
      </Button>
      <Button>
        Custom
      </Button>
    </ButtonGroup>
  </div>
  )
}

export default Donations