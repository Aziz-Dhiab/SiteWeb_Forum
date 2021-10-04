import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
function App() {
  return (
  <>
   <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
       
        </Switch>
      </Router> 
  </>
  );
}

export default App;
