import React from 'react'
import {Link} from 'react-router-dom'

class GenerateRouter extends React.Component {
  render() {
    return(
      <div>
        <Link to='/generateApp/createShortAnswer'>
          short answer|
        </Link>
        <Link to='/generateApp/createMultipleChoice'>
          multiple choice
        </Link>
      </div>
    )
  }
}

export default GenerateRouter
