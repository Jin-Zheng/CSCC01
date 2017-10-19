import React from 'react'
import ReactDOM from 'react-dom'
import FormatListView from './components/formatListView.js'
import {List} from 'immutable'

class Index extends React.Component {
  render() {
    const dummyList = List(['hi', 'my', 'name', 'is'])

    return (
      <div>
        <FormatListView list={dummyList}/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))
