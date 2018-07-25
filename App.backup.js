import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://media.vogue.com/r/pass/2017/08/08/00-MOBILE-jennifer-lawrence.jpg'
    };
    return (
      <Image source={pic} style={{width: 220, height: 380}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// // type Props = {};
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import React, { Component } from 'react';
// import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
// export default class App extends Component {

// handlePress = async () => {
//   fetch('http://localhost:3000/save/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         "temperature": "56",
//       })
//   })
//   .then((response) => response.json())
//   .then((responseJson) => {
//       console.log(responseJson);
//       Alert.alert("Temparature at 0th index:  " + responseJson[0].temperature);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }
// render(){
// return(
//   <View style={{paddingTop: 50, paddingLeft: 50 }}>
//   <Text> Some other text </Text>
//   <TouchableOpacity onPress={this.handlePress.bind(this)}>
//     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the temperature </Text>
//   </TouchableOpacity>
//   </View> 
// );
// }
// }

class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }
  
  export default class LotsOfGreetings extends Component {
    
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    render() {
      let pic = {
        uri: 'https://media.vogue.com/r/pass/2017/08/08/00-MOBILE-jennifer-lawrence.jpg'
      };
      return (
        <ScrollView>
        <View style={styles.container}>
  
          <Greeting name='Jannifer🍕' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera'/>
  
          {/* <Image opacity={0.2}
            source={pic} style={{width: 420, height: 680}}/> */}
            
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />
          </View>
          
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback
              onPress={this._onPressButton}
              >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
  
        </View>
        </ScrollView>
      );
    }
  }
  
  // export default class ButtonBasics extends Component {
  //   _onPressButton() {
  //     Alert.alert('You tapped the button!')
  //   }
  
  //   render() {
  //     return (
  //       <View style={styles.container}>
  //         <View style={styles.buttonContainer}>
  //           <Button
  //             onPress={this._onPressButton}
  //             title="Press Me"
  //           />
  //         </View>
  //         <View style={styles.buttonContainer}>
  //           <Button
  //             onPress={this._onPressButton}
  //             title="Press Me"
  //             color="#841584"
  //           />
  //         </View>
  //         <View style={styles.alternativeLayoutButtonContainer}>
  //           <Button
  //             onPress={this._onPressButton}
  //             title="This looks great!"
  //           />
  //           <Button
  //             onPress={this._onPressButton}
  //             title="OK!"
  //             color="#841584"
  //           />
  //         </View>
  //       </View>
  //     );
  //   }
  // }
  