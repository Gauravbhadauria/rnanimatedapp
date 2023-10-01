import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InterpolateDemo = () => {
  const aniamted = useSharedValue(1);
  const animatedstyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      aniamted.value,
      [1, 1.3, 1.5, 1.8, 2],
      [1, 0.8, 0.5, 0.3, 0.2],
    );
    return {
      opacity: opacity,
    };
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'red'},
          animatedstyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          aniamted.value = withTiming(2, {duration: 2000});
        }}>
        <Text style={{color: 'white'}}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterpolateDemo;
