import React from 'react'
import {Route, Switch} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'

class MainSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/'/>
        <Route
          exact path='/generateApp'
          component={GenerateApp}/>
      </Switch>
    )
  }
}

export default MainSwitcher
