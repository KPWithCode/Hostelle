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
        console.log('1')
      }
    //   toggleModal = () => {
    //     this.setState(prevState => ({ showModal: !prevState.showModal }))
    //   }
  

render() {
    return(
    <div className="d-flex justify-content-center">   
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontWeight:'700'}} >COMING SOON !!!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontWeight:'700'}} >CHECKOUT THE COUNTRIES WE ARE LOOKING TO LIST</Modal.Body>
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
