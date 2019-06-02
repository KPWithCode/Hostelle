import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HostelBanner from '../components/HostelBanner'

const Hostels = () => {
  return (
    <Container style={{height:'100vh', width:'100vh'}} >
      <HostelBanner />
    <Row className="my-1">
    <Col lg={4}><img src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1530334580314-1e7a340426a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    </Row>
    <Row className="my-1">
    <Col lg={4}><img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1551133988-1ca0f12a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1551133988-6a0047afdffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    </Row >
    <Row className="my-1">
    <Col lg={4}><img src="https://images.unsplash.com/photo-1556202957-14b2c5353604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1553444809-3ae9d004d7d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1554237966-882505276d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    </Row>
    <Row className="">
    <Col lg={4}><img src="https://images.unsplash.com/photo-1551133989-6a6512ad3915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    <Col lg={4}><img src="https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80" style={{width:'100%', height:'180px'}} alt="hostel pic" /></Col>
    </Row>
</Container>
  )
}

export default Hostels
