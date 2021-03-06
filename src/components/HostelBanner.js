import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'


export default class HostelBanner extends Component {

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
        console.log('1')
      }


render() {
    return(
    <div className="d-flex justify-content-center">   
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontWeight:'700'}} >COMING SOON !!!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontWeight:'700'}} >HERE IS A SNEAK PEEK OF OUR ROOMS</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>
    </div>
        )
    }
}