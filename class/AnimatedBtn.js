import {View, Text, TouchableOpacity, Dimensions, Alert} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedBtn = () => {
  const ANIMATED_WIDTH = useSharedValue(200);
  const ANIMATED_HEIGHT = useSharedValue(50);
  const ANIMATED_RADIUS = useSharedValue(10);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: ANIMATED_WIDTH.value,
      height: ANIMATED_HEIGHT.value,
      borderRadius: ANIMATED_RADIUS.value,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedButton
        style={[
          {
            width: 200,
            height: 50,
            borderRadius: 10,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
        onPress={() => {
          if (ANIMATED_WIDTH.value == 200) {
            ANIMATED_WIDTH.value = withTiming(
              Dimensions.get('window').width * 4,
              {duration: 1000},
            );
            ANIMATED_HEIGHT.value = withTiming(
              Dimensions.get('window').width * 4,
              {duration: 1000},
            );
            ANIMATED_RADIUS.value = withTiming(
              Dimensions.get('window').width * 2,
              {duration: 1000},
            );
          } else {
            ANIMATED_WIDTH.value = withTiming(200, {duration: 1000});
            ANIMATED_HEIGHT.value = withTiming(50, {duration: 1000});
            ANIMATED_RADIUS.value = withTiming(10, {duration: 1000});
          }
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </AnimatedButton>
    </View>
  );
};

export default AnimatedBtn;
