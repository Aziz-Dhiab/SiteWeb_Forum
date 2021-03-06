import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'

import Auditorium from './Components/Auditorium';
import Articles from "./Pages/Articles"
import Article from "./Pages/ArticlePage"


import Programmepage from './Pages/Programmepage';

import Navbar from './Components/Navbar';
import { Nav } from 'react-bootstrap';
import Inscription from './Pages/Inscription'

import BlogEditor from './Pages/BlogEditor';
import BlogDelete from './Pages/BlogDelete';

function App() {
  return (
  <>
  
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>

          <Route exact path="/programme"><Programmepage/></Route>

          <Route exact path="/articles"><Articles/></Route>
          <Route exact path="/articles/:articleId"><Article/></Route>



          <Route exact path="/inscription"><Inscription/></Route>

       

          <Route exact path="/ejeBLog"><BlogEditor/></Route>
          <Route exact path="/ejeDelete"><BlogDelete/></Route>
  
          <Route exact path="/auditorium"><Auditorium/></Route>

        </Switch>
      </Router> 
  </>
  );
}

export default App;
