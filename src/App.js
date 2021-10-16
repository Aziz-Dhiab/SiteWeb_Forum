import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Auditorium from './Components/Auditorium';
import Navbar from './Components/Navbar';
import { Nav } from 'react-bootstrap';

import Inscription from './Pages/Inscription'
function App() {
  return (
  <>
  
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/programme"><Auditorium/></Route>
          <Route exact path="/inscription"><Inscription/></Route>
       
        </Switch>
      </Router> 
  </>
  );
}

export default App;
