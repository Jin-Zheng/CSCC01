import React from 'react'
import {Link} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'

class GenerateRouter extends React.Component {
  render() {
    return(
      <Row>
          <Link to='/generateApp/createShortAnswer'>
            short answer|
          </Link>
          <Link to='/generateApp/createMultipleChoice'>
            multiple choice
          </Link>
      </Row>
    )
  }
}

export default GenerateRouter
