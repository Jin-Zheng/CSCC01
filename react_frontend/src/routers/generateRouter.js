import React from 'react'
import {Link} from 'react-router-dom'

class GenerateRouter extends React.Component {
  render() {
    return(
      <div>
        <Link to='/generate/shortAnswer'>
          short answer|
        </Link>
        <Link to='/generate/multipleChoice'>
          multiple choice
        </Link>
      </div>
    )
  }
}

export default GenerateRouter
