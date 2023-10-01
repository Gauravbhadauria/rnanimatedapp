import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import OnboardingItem from './OnboardingItem';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedOnboarding = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  const circleScale = useSharedValue(1);

  const ref = useAnimatedRef();
  const x = useSharedValue(0);

  const circleAnimateStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: circleScale.value}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: '#6f00ff'}}>
      <Animated.View
        style={[
          {
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
            backgroundColor: 'white',
            borderRadius: SCREEN_WIDTH / 2,
            position: 'absolute',
            alignSelf: 'center',
            marginTop: 50,
          },
          circleAnimateStyle,
        ]}></Animated.View>
      <FlatList
        data={[1, 1, 1, 1]}
        onScroll={e => {
          const ind = e.nativeEvent.contentOffset.x / SCREEN_WIDTH.toFixed(0);
        //   if (ind == 0 || ind == 1 || ind == 2 || ind == 3) {
            circleScale.value = withSpring(4);
            setTimeout(() => {
              circleScale.value = withSpring(1);
            }, 200);
        //   }
        }}
        scrollEventThrottle={16}
        pagingEnabled
        horizontal
        renderItem={({item, index}) => {
          return <OnboardingItem item={item} index={index} x={x} />;
        }}
      />
    </View>
  );
};

export default AnimatedOnboarding;
