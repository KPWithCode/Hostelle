import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'


export default class Countries extends Component {

render() {
    return(
//         <div className=" border border-success d-flex align-content-center">
//     <div className="container border border-warning d-flex-content-center">
//   <div className="row">
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//   </div>
//   {/* end of first row */}
//   <div className="row">
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//   </div>
//   {/* End of second row */}
//   <div className="row">
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//     <div className="col-md-3 m-1">
//      <img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" />
//     </div>
//   </div>

// </div>  
//  </div>

        <Container className="" style={{height:'100vh', width:'100vh'}} >
            <Row className="my-1">
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Brazil</a>
                <img src="https://images.unsplash.com/photo-1536082555308-99948d5c8ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" style={{width:'100%', height:'100%'}} alt="Brazil" /></Col>

            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>India</a>
                <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="India" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Bhutan</a>
                <img src="https://images.unsplash.com/photo-1553351234-d0eb4feecb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80" style={{width:'100%', height:'100%'}} alt="Bhutan" /></Col>
            </Row>

            <Row className="my-1">
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>England</a>
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="England London, UK" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Germany</a>
                <img src="https://images.unsplash.com/photo-1527142573877-7d395d8fa568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" style={{width:'100%', height:'100%'}} alt="Berlin, Germany" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Switzerland</a>
                <img src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="Switzerland" /></Col>
            </Row >

            <Row className="my-1">
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Australia</a>
                <img src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="Australia" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Senegal</a>
                <img src="https://images.unsplash.com/photo-1524518910477-9a1dc078365e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>France</a>
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" /></Col>
            </Row>

            <Row className="">
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Argentina</a>
                <img src="https://images.unsplash.com/photo-1521058798685-39dd95c33314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Poland</a>
                <img src="https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2118&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" /></Col>
            <Col lg={4}>
            <a style={{position: 'absolute', top: '10%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px' }}>Panama</a>
                <img src="https://images.unsplash.com/photo-1538800933850-8c7ba3538694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" style={{width:'100%', height:'100%'}} alt="hostel pic" /></Col>
            </Row>

        </Container>
    )
}

}
