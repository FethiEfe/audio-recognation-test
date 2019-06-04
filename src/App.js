import React, { Component } from 'react';
import axios from "axios"
import MicRecorder from 'mic-recorder-to-mp3';
import unirest from 'unirest';
import { ReactMic } from 'react-mic';
import fs from 'fs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      recordedBlob: null,
      file: null
    }

  }
  handleFileUpload = (e) => {
    this.setState({file: e.target.files});
  }

  sendMusic = () => {
    const formData = new FormData();
    formData.append('file', this.state.file[0]);

    axios({
      method: "POST",
      url: "https://audd.p.rapidapi.com",
      headers: {
        "X-RapidAPI-Host": "audd.p.rapidapi.com",
        "X-RapidAPI-Key": "d772e50aaemsh2fd2a2482f3c99fp1e2349jsn501b72a30639",
      },
      data: formData
    }).then(response => {
      console.log(response);
    })

  }

  startRecording = () => {
    this.setState({
      record: true,
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
    this.setState({
      recordedBlob: recordedBlob.blobURL
    })

  }

  onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({
      recordedBlob: recordedBlob.blobURL
    })

  }

  render() {
    // console.log(this.state.file ? this.state.file[0] : null)
    console.log(this.state.recordedBlob);
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>

        <audio controls src={this.state.recordedBlob} />
        <button onClick={this.sendMusic} type="button">audd</button>
        <input type="file" name="myFile" onChange={this.handleFileUpload} ></input>
      </div>
    );
  }
}