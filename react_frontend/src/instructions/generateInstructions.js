import React from 'react'
import Styles from '../styles'

class GenerateInstructions extends React.Component {
  render() {
    const instruction = 'Welcome';
    console.log('hi mom')
    return(
      <div style={Styles.viewText}>
        these are the generate app instrutions
      </div>
    )
  }
}

export default GenerateInstructions
