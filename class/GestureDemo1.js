import {View, Text} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const GestureDemo1 = () => {
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.x = animatedX.value;
      c.y = animatedY.value;
    },
    onActive: (e, c) => {
      animatedX.value = e.translationX + c.x;
      animatedY.value = e.translationY + c.y;
    },
    onEnd: (e, c) => {
        
        animatedX.value =withTiming(0,{duration:1000});
        animatedY.value = withTiming(0,{duration:1000});
    },
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {width: 100, height: 100, backgroundColor: 'yellow'},
            animatedStyle,
          ]}></Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default GestureDemo1;
