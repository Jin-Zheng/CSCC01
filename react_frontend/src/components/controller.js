import React from 'react'
import {Link} from 'react-router-dom'

class Controller extends React.Component{
  render() {
    return (
      <ul>
        <li>
          <Link to='/'>
            home
          </Link>
        </li>
        <li>
          <Link to='/instructorSignUp'>
            isu
          </Link>
        </li>
      </ul>
    )
  }
}

export default Controller
