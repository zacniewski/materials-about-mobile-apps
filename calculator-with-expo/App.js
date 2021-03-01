import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput,Alert } from 'react-native';
import Constants from 'expo-constants';


export default class App extends Component {
  state = {
    text: 0,
    input: '',
    inputValue: 0,
    inputValue2: 0,
    result: 0
  }
  onButtonPressed = function() { this.setState({ text:this.state.inputValue })}
  _handleTextChange = inputValue => { this.setState({ inputValue }); 
  };
  _handleTextChange2 = inputValue2 => { this.setState({ inputValue2 }); 
  };

  add = function() {
    let x = parseFloat(this.state.inputValue);
    let y = parseFloat(this.state.inputValue2);
    let result = x + y;
    this.setState({ text: result})
  }

  subtract = function() {
    let x = parseFloat(this.state.inputValue);
    let y = parseFloat(this.state.inputValue2);
    let result = x - y;
    this.setState({ text: result})
  }

  divide = function(){
    let x = parseFloat(this.state.inputValue);
    let y = parseFloat(this.state.inputValue2);
    let result = x / y;
    this.setState({ text: result})
  }

  multiplicate = function(){
    let x = parseFloat(this.state.inputValue);
    let y = parseFloat(this.state.inputValue2);
    let result = x * y;
    this.setState({ text: result})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}> 
          Pierwsza liczba
        </Text>

        <TextInput
          value={this.state.inputValue}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={{ height: 40, 
            borderColor: 'gray', 
            borderWidth: 2, 
            autoFocus: true,
            textAlign: 'center',
            marginBottom:20}}
        />

        <Text style={{fontWeight: 'bold'}}> 
          Druga liczba
        </Text>

        <TextInput
          value={this.state.inputValue2}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={{ height: 40, 
            borderColor: 'gray', 
            borderWidth: 2, 
            autoFocus: true,
            textAlign: 'center',
            marginBottom: 30}}
        />
        Wynik: 
        <Text style={styles.paragraph}>
          {this.state.text}
        </Text>
      
        <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button title='+' onPress={this.add.bind(this)} style={styles.buttonStyle}/>
            </View>
            <View style={styles.buttonStyle}>
              <Button title='-' onPress={this.subtract.bind(this)} style={styles.buttonStyle}/>
            </View>
            <View style={styles.buttonStyle}>
              <Button title='/' onPress={this.divide.bind(this)} style={styles.buttonStyle}/>
            </View>
            <View style={styles.buttonStyle}>
              <Button title='*' onPress={this.multiplicate.bind(this)} style={styles.buttonStyle}/>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    width: 200,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    borderWidth: 4, backgroundColor: 'yellow'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  buttonStyle: {
    margin: 19,
  },

});
