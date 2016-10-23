/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  RefreshControl
} from 'react-native';
import { fetch } from 'fetch';
import axios from 'axios';
import Card from './Card';
import ApiInstance from './ApiInstance';
import FetchData from './FetchData';
import Button from 'react-native-button';


class ReactJenkins extends Component {
  // state = {text: 'Jaden', fontWeight: 'bold', fontSize: 15, textShadowColor: 'blue', jobs: [], refreshing: false};
   constructor(props) {
    super(props);
    this.state = 
    {text: 'Jaden', fontWeight: 'bold', fontSize: 15, textShadowColor: 'blue', jobs: [], refreshing: false};
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetching().then(() => {
      this.setState({refreshing: false});
    });
  }

  fetching () {
return(
  ApiInstance.get('/classes/jenkins')
    .then(response => this.setState( { jobs: response.data.results }))
        .catch(function(err) {
          console.log(err);
        })
        )
}
  componentWillMount() {
    console.log("getting results")
this.fetching()
  // ApiInstance.get('/classes/jenkins')
  //   .then(response => this.setState( { jobs: response.data.results }))
  //       .catch(function(err) {
  //         console.log(err);
  //       })
  }

  renderJobs() {
    return this.state.jobs.map(job => <Text key={job.name}>{job.url}</Text>
    );
  }
  renderJobsColor() {
    return this.state.jobs.map(job => <Text key={job.name}>{job.color}</Text>
    );
  }
  renderJobsName() {
    return this.state.jobs.map(job => <Text key={job.name}>{job.name}</Text>
    );
  }

  toggleWeight = () => {
    this.setState({
      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
    });
  };

  decreaseSize = () => {
    this.setState({
      fontSize: this.state.fontSize - 1
    });
  };

  increaseSize = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  };

  resetSize = () => {
    this.setState({
      fontSize: this.state.fontSize = 15
    });
  };

  

  render() {
    console.log(this.state);
    var curStyle = {fontWeight: this.state.fontWeight, fontSize: this.state.fontSize};
    return (
       
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
       />
      }
      >
        <View style={styles.container}>
     
          <View>
            <Image style={styles.foxImage} source={require('./img/jenkins.jpeg')}/>

            <Text style={curStyle} >
              <Text> Hello {this.state.text}  </Text>
            </Text>
            <Text>
              <Text>Sister:<Text style={curStyle}>Mikayla cantik</Text></Text>
            </Text>
            <Text>
              <Text onPress={this.toggleWeight}>Toggle Weight</Text>
            </Text>
            <Text onPress={this.decreaseSize} suppressHighlighting={false}>
              Decrease Size
            </Text>
            <Text onPress={this.increaseSize} suppressHighlighting={false}>
              Increase Size
            </Text>
            <Text onPress={this.resetSize} suppressHighlighting={false}>
              Reset Size
            </Text>

          </View>
          <View>
          {this.renderJobsName().map((word) => <Card><Text key={word}>{word}</Text></Card>)}
          </View>
          <View>
          {this.renderJobs().map((word) => <Card><Text key={word}>{word}</Text></Card>)}
          </View>
          <View>
          {this.renderJobsColor().map((word) => <Card><Text key={word}>{word}</Text></Card>)}
          </View>
          <View>
        
          </View>
          <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type your name"
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>
          </View>
<Button style={{borderWidth: 2, borderColor: 'blue', alignSelf: 'stretch', marginLeft: 5, marginRight: 5, borderRadius: 8, marginBottom: 50}} 
onPress={FetchData.posting}>
              POST ANOTHER JOB
            </Button>
        </ScrollView>
    )
       }
  }



var IMAGE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foxImage: {
    borderRadius: IMAGE_SIZE / 2,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginTop: 30,
  },
  helloText: {
    fontSize: 32,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
});

var PostButton = React.createClass({
  render() {
    return (
      <Button
        style={{borderWidth: 1, borderColor: 'blue'}}
        onPress={this._handlePress}>
        Press Me!
      </Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
});

export default ReactJenkins;
