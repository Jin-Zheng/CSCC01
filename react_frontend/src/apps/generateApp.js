import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import GenerateSwitcher from '../switchers/generateSwitcher'
import GenerateRouter from '../routers/generateRouter'
import {BrowserRouter} from 'react-router-dom'

class GenerateApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <GenerateRouter/>
          <GenerateSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

export default GenerateApp
