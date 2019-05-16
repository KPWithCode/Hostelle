import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Hostels from './pages/Hostels';
import SingleHostel from './pages/Singlehostel';
import Error from './pages/Error';
import Navbar from './Nav/Navbar';

function App() {

  return (
   <Router>
     <>
     <Navbar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/hostels" component={Hostels} />
   <Route exact path="/singlehostel" component={SingleHostel} />
   <Route component={Error} />
   </Switch>
   </>
   </Router>

  );
}

export default App;
