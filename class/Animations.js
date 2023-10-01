import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const Animations = () => {
  const animatedX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}],
    };
  });
  const pan = Gesture.Pan()
  .onChange((event) => {
    animatedX.value += event.changeX;
  })
  .onFinalize((event) => {
    animatedX.value = withDecay({
      velocity: event.velocityX,
      rubberBandEffect: true,
      clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
    });
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}
        onPress={() => {
          animatedX.value = withDecay({velocity:100,rubberBandEffect:true,clamp: [100, -100]})
        }}>
        <Text style={{color: 'white'}}> Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animations;
