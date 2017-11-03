import React from 'react'
import {Link} from 'react-router-dom'
import FormatListView from '../components/format/formatListView'
import {List} from 'immutable'

class MainRouter extends React.Component{
  render() {
    const linksList = List([
      <Link to='/'>
        home
      </Link>,
      <Link to='/generateApp'>
        generate
      </Link>,
      <Link to='/viewApp'>
      view
      </Link>,
    ])
    return (
      <FormatListView list={linksList}/>
    )
  }
}

export default MainRouter
