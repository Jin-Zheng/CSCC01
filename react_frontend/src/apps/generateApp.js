import React from 'react'
import {Row} from 'react-flexbox-grid'
import GenerateSwitcher from '../switchers/generateSwitcher'
import GenerateRouter from '../routers/generateRouter'

class GenerateApp extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <GenerateRouter/>
        </Row>
        <Row>
          <GenerateSwitcher/>
        </Row>
      </div>
    )
  }
}

export default GenerateApp
