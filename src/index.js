import React from 'react'
import ReactDOM from 'react-dom'
import FormatListView from './components/formatListView.js'
import PaneController from './components/paneController.js'
import {List, Map} from 'immutable'
import Styles from './styles.js'
import {Row, Col} from 'react-flexbox-grid'

class Index extends React.Component {
  render() {
    const dummyList = List(['hi', 'my', 'name', 'is'])
    const dummyButtons = List(['these', 'are', 'my', 'buttons']).map((element) => (
      <button>
        {element}
      </button>
    ))
    return (
      <div>
      <Row style={Styles.title}>
        Lambda Work
      </Row>
        <PaneController buttons={dummyButtons}/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))
