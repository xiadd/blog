import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import Header from 'components/Header'

import Home from 'pages/Home'
import About from 'pages/About'
import Archives from 'pages/Archive'
import Post from 'pages/Post'

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="ui container post-container" style={{marginTop: '2rem', width: '760px'}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/archives" component={Archives} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
