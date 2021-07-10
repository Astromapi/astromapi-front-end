// Outstanding work! It was obvious from the presentation not only that y'all really meshed as a team, but that you also established organizing systems to manage all your competing work in a very strategic way. This app is a huge accomplishment--visually and functionally. It's very cool that you managed multiple data models belonging to users, and that you used that data in a front-end that's beautiful to look at and simple to use. The best apps are the ones that sound complicated on paper, but are easy to use in execution, and this one fits the bill. Congratulations on such an accomplishment! I'm looking forward to seeing all that y'all do in career track :) I don't have a ton of feedback on the code aside from the changes I offer in this PR--you broke your work down into lots of reusable components, which makes maintaining this codebase easy if you were to end up wanting to put more work into it in the future.

import React, { Component } from 'react'
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AboutUs from './AboutUs';
import AstroList from './AstroList';
import CreateJournal from './CreateJournal';
import Footer from './Footer';
import Header from './Header.js';
import JournalDetail from './JournalDetail';
import Journal from './Journal';
import LandingPage from './LandingPage';
import LoggedInHeader from './LoggedInHeader';
import Main from './Main';
import SignUp from './SignUp';
import Wishlist from './Wishlist';

const TOKEN = 'TOKEN';
export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN)
  }

  login = (token) => {
    this.setState({ token: token })
    localStorage.setItem(TOKEN, token)
  }

  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }

  render() {
    return (
      <Router>
          { this.state.token ?  <LoggedInHeader logout={this.logout} /> : <Header /> }
          <Switch>
            <Route exact path='/' render={
              (routerProps) => 
              <LandingPage login={this.login} {...routerProps} />
            } />

            <Route exact path='/signup' render={
              (routerProps) => 
              <SignUp login={this.login} {...routerProps} />
            } />

            <Route exact path="/main" render={
              (routerProps) =>
              this.state.token ? 
              <Main token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/astro-list" render={
              (routerProps) =>
              this.state.token ? 
              <AstroList token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal" render={
              (routerProps) =>
              this.state.token ? 
              <Journal token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/create" render={
              (routerProps) =>
              this.state.token ? 
              <CreateJournal token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal-detail/:entryId" render={
              (routerProps) =>
              this.state.token ? 
              <JournalDetail token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/wishlist" render={
              (routerProps) =>
              this.state.token ? 
              <Wishlist token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path='/about-us' component={AboutUs}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
