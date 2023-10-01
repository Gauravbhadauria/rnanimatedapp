import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

const App = () => {
  const animatedValue = useSharedValue(100); //number,string,boolean,array,object
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          width: animatedValue,
          height: animatedValue,
          backgroundColor: 'red',
        }}></Animated.View>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}
        onPress={() => {
          animatedValue.value = withTiming(animatedValue.value + 50,{duration:2000});
        }}>
        <Text style={{color: 'white'}}>Scale View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

//View ,Flatlist,Image,Text,ScrollView
//custom compoennt using createAnimatedComponent
//Shared Value

//animated functions
