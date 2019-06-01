import React from 'react'
import Banner from './Banner'

export default function Error() {
  return (
    <div className="darkOcean " style={{height:'100vh'}}>
<div style={{width:'80%',position: 'relative'}} 
className="container d-flex justify-content-center">
      <img src="https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      className="d-flex align-content-center border border-primary rounded"
      style={{width:'80%',height:'50%',background:'center/cover'}} alt="error page"/>
      <Banner />
    </div>
    </div>
    
  )
}
