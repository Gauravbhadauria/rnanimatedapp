import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Animated, {
    interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Demo1 = () => {
  const width = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    
    return {
      transform: [
        {scale: width.value},
        {translateX: width.value == 0.5 ? 0 : 80},
        {translateY: width.value == 0.5 ? 0 : -200},
      ],
      borderRadius: width.value == 0.5 ? 0 : 100,
      backgroundColor: width.value == 0.5 ? 'yellow' : 'orange',
      opacity: interpolate(
        width.value,
        [0.5,.7,.9, 1],
        [1,.8,.5, 0]
      ),
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'yellow'},
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
        onPress={() => {
          if (width.value == 1) {
            width.value = withSpring(0.5);
          } else {
            width.value = withSpring(1);
          }
        }}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Demo1;

// step 1- installation
// step 2 create animated component or use built in components
// step 3 shared value or animated state
// step 4 you can pssdirectly or can use useAnimayeStyles
// step 5- animated finctions withTiming() withSpring()
//step 6 - interpolation
