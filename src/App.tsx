import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Heroes } from './compontents/Heroes';
import { Hello, Welcome } from './compontents/Welcome';
import { Hero } from './compontents/Hero';
import { Footer } from './compontents/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
         
      
 

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/heroes">
            <Heroes></Heroes>
          </Route>
          <Route path="/hero/:id" component={Hero}>
          </Route>
          <Route path="/">
            <Welcome name = "home" />
          </Route>
        </Switch>
      </div>
    </Router>
    </header>
    </div>
  );
}

export default App;