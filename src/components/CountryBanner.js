import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'


export default class CountryBanner extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: true,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

render() {
    return(
<div onClick={e => e.stopPropagation()} className="d-flex justify-content-center">
<Modal.Dialog  style={{position:'absolute',top:'10%',zIndex:'1000', width:'50%' }} >
  <Modal.Header>
    <Modal.Title style={{fontWeight:'700'}} >COMING SOON!!!</Modal.Title>
  </Modal.Header>

  <Modal.Body style={{fontWeight:'700'}}>
    <p>CHECK OUT THE COUNTRIES WE ARE TARGETING</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={this.handleClose} variant="primary">Close</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
        )
    }
}
