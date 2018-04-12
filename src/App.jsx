import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent'
import './App.scss'

import Header from 'components/Header'

const Home = AsyncComponent(() => import(/* webpackChunkName: "home" */'pages/Home'))
const About = AsyncComponent(() => import(/* webpackChunkName: "about" */'pages/About'))
const Archives = AsyncComponent(() => import(/* webpackChunkName: "archive" */'pages/Archive'))
const Post = AsyncComponent(() => import(/* webpackChunkName: "post" */'pages/Post'))
const Tags = AsyncComponent(() => import(/* webpackChunkName: "tags" */'pages/Tags'))

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
            <Route path="/tags/:tag" component={Tags} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
