
'use strict';
import React, { Component } from 'react';
import ApiInstance from './ApiInstance';
import ReactJenkins, { jobs } from './MainScreen';

let FetchData = {
  posting() {
    console.log("I am posting")
    return (
      ApiInstance.post('/classes/jenkins', {
         "name": "PostTests",
         "url": "http://jenkins/job/PostTests/",
         "color": "green"
      }
      )
        .then(function (response) {
    console.log(response);
  })
        // .then(ReactJenkins.getInitialState()) 
        // .then(response => ReactJenkins.jobs.setState({ jobs: response.data.results }))
        .catch(function (err) {
          console.log(err);
        })
    );
  }
}

// class reget extends ReactJenkins {
//   render() {
//     return <div className={this.props.className}/>;
//   }
// }

export default FetchData;
