import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className='Content'>
          {/* <h1>This is the H1 text in App.js</h1>
          <p>This is the para text in Content div</p> */}
        </div>

        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/" />
          <Route path="/" />
        </Switch>

      </div>
    );
  }
}

export default App;
