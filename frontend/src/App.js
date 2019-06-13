import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { NavBar, Home, CurbsidePrgm, Depot, RetailerPrgm, RemovalServices, WhereToRecycle } from './components'
import { BackTop } from 'antd'

class App extends Component {
  render() {
    return (
      <div id='override' className='root-div-padding root-background'>
        <NavBar />
        <BackTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/curbsideprgm' render={(routerProps) => <CurbsidePrgm {...routerProps} />} />
          <Route path='/takebackprgm' component={RetailerPrgm} />
          <Route path='/depots' render={(routerProps) => <Depot {...routerProps} />} />
          <Route path='/search' render={(routerProps) => <WhereToRecycle {...routerProps} />} />
          <Route path='/junkremoval' component={RemovalServices} />
        </Switch>
        <footer className='footer'></footer>
      </div>
    )
  }
}

export default App