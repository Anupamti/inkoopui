import React from 'react'
import styled from 'styled-components'
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Commingsoon from './components/commingsoon/commingsoon';
import NotFound from './components/notfound/NotFound';
function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/cusine" exact component={Commingsoon} />
          <Route path="/services" exact component={Commingsoon} />
          <Route path="/contact" exact component={Commingsoon} />
          <Route path="/book" exact component={Commingsoon} />
          <Route path="/book" exact component={Commingsoon} />
          <Route><NotFound /></Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App


const Container = styled.div`
  display:flex;
  height:95vh;
  padding:20px 0px;
  background-color:#f7f5f5; 

  @media only screen and (max-width: 1023px) {
    flex-direction:column;
      padding:10px 10px;
      height:fit-content;
}
`;
