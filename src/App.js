import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Auditorium from './Components/Auditorium'
import Programmepage from './Pages/Programmepage';
import Navbar from './Components/Navbar';
import { Nav } from 'react-bootstrap';
function App() {
  return (
  <>
  
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/programme"><Programmepage/></Route>
          <Route exact path="/auditorium"><Auditorium/></Route>
        </Switch>
      </Router> 
  </>
  );
}

export default App;
