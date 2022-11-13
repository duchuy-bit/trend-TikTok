import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

import Lottie from 'lottie-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setDelay: true,
    };
  }

  UNSAFE_componentWillMount(){
    setTimeout(() => {
      this.setState({setDelay: false})
  }, 4500);
  }

  render() {
    return (
      <View style={{backgroundColor:'black', justifyContent:'center',alignItems:'center',flex:1}}>
        {
          this.state.setDelay? 
            <Lottie source={require('./assets/loading.json')} autoPlay loop 
              style={{width: width,height:width}}/>
          :
            <Image
              source={require('./assets/thanhtam.gif')}
              style={{height:width, width: width}}/>
        }
        
        {/* <Image
        source={require('./assets/thanhtam.gif')}
        style={{height:width, width: width}}
        /> */}
      </View>
    );
  }
}
