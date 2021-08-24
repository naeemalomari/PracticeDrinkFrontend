import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './Profile';
import Main from './Main'
import Favorite from './Favorite'
class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
            <Main/>
              </Route>
              <Route exact path="/profile">
            <Profile/>
            </Route>
            <Route exact path="/favorite">
            <Favorite/>
            </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default App;
