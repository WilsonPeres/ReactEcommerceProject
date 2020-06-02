import React from 'react';
import './App.css';
import Products from './Products';
import Homepage from './HomePage';
import ContactPage from './ContactPage';
import { BrowserRouter as Router,
  Route,
  Switch } 
  from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/products" render={(props) => <Products {...props} isAuthed={true} />} />
        <Route path="/contactpage" render={(props) => <ContactPage {...props} isAuthed={true} />} />
        <Route path="/" render={(props) => <Homepage {...props} isAuthed={true} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
