import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './apps/mainApp'

class Index extends React.Component {
  render() {
    return (
      <MainApp/>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))
