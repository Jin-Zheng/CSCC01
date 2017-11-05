import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

class ViewApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ViewRouter/>
          <ViewSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

class ViewRouter extends React.Component {
  render() {
    return(
      <div/>
    )
  }
}

class ViewSwitcher extends React.Component {
  render() {
    return(
      <div/>
    )
  }
}

export default ViewApp
