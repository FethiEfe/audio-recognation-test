import React, { Component } from 'react'

import Recorder from 'react-mp3-recorder'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    _onRecordingComplete = (blob) => {
      console.log('recording', blob)
    }
  
    _onRecordingError = (err) => {
      console.log('recording error', err)
    }
  render () {
    return (
      <Recorder
        onRecordingComplete={this._onRecordingComplete}
        onRecordingError={this._onRecordingError}
      />
    )
  }

}