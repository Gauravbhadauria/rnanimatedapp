import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Demo2 = () => {
  const animation=useSharedValue(-200)
  const animatedStyle=useAnimatedStyle(()=>{
    return{
        transform:[{translateY:animation.value}]
    }
  })
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: '100%',
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius:20,
            backgroundColor: 'green',
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:-200
          },
          animatedStyle,
        ]}>
      
      </Animated.View>

      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={() => {
         if(animation.value==0){
            animation.value=withTiming(-200,{duration:500})
         }else{
            animation.value=withTiming(0,{duration:500})
         }
        }}>
        <Text style={{color: 'white'}}>Increase Size</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Demo2;

// step 1 - installation
// step 2 components - View,Image,Text,Flatlist,Scrollview
// <Animated.Text/>
// convert uisng const AnimatedTextInput= createAnimatedComponent(TextInput)
//<AnimatedTextInput/>
// step3 shared value using useSharedValue() (number,string,boolean,array,object)
//step 4 animated function ex; withSpring(),withTiming()
//step 5 animated style ==> useAnimatemStyle

//step 6 interpolate use
