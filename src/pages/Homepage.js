import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

export default function Home() {

// Dont just Travel...Travel Your Way 

    return <div style={{height:'100vh'}} className=" d-flex justify-content-center " >
    <div  className= "d-flex justify-content-center"style={{position:'relative'}}>

    <h2 style={{position:'absolute', top:'8px', right:'16px', fontSize:'40px'}} className="float-right d-flex justify-content-center" >WHERE TRAVEL MEETS ADVENTURE</h2>

    <h1 style={{position: 'absolute', top: '50%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'70px' }}>H O S T E L L E</h1>
    
    {/* Implement href to countries path */}
    <a className="" style={{ position:'absolute',top: '80%', left:'45%', fontSize:'100px'}}><TiArrowSortedDown /></a>


        <img src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" 
        alt ="long road between hills" 
        style={{width:'100%',height:'100%'}}/>
        {/* <Banner /> */}
        </div>
            </div> 


  
}