import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Auditorium from './Components/Auditorium';
import Articles from "./Pages/Articles"
import Article from "./Pages/ArticlePage"
import Navbar from './Components/Navbar';
import { Nav } from 'react-bootstrap';
function App() {
  return (
  <>
  
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/programme"><Auditorium/></Route>
          <Route exact path="/articles"><Articles/></Route>
          <Route exact path="/articles/:articleId"><Article/></Route>

       
        </Switch>
      </Router> 
  </>
  );
}

export default App;
