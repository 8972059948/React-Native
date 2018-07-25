import React, { Component } from 'react';

import { 

  ScrollView, 
  Platform, 
  Image, 
  View, 
  Text, 
  StyleSheet,
  Button,
  Alert, 
  TouchableHighlight,
  TouchableNativeFeedback, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  ActivityIndicator 
  
} from 'react-native';

// import { FBLoginButton } from './src/screens/FBLoginButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double  #### tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {

  _onPressButton() {
      Alert.alert('You tapped the button!'+this.props)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Type your username or email"
          username = {this.props.value}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry = { true }
          placeholder="Type your password"
          value = {this.props.value}
        />
        <View style={styles.buttonContainer}>
             <Button
               onPress={this._onPressButton}
               title="Submit"
             />
        </View>
        <Text style={styles.instructions}>{instructions}</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        {/* <FBLoginButton/> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  textInput: {
    //flex:1,
    height: 40,
    flexDirection:'row',
    alignItems:'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

})


// import React, { Component } from 'react'
// import {
//   AppRegistry,
//   StyleSheet,
//   TouchableHighlight,
//   Text,
//   View,
// } from 'react-native'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }

//   onPress = () => {
//     this.setState({
//       count: this.state.count+1
//     })
//   }

//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text> Touch Here </Text>
//         </TouchableHighlight>
//         <View style={[styles.countContainer]}>
//           <Text style={[styles.countText]}>
//             { this.state.count !== 0 ? this.state.count: null}
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10
//   },
//   countText: {
//     color: '#FF00FF'
//   }
// })
