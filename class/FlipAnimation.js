import {View, Text, Image} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const FlipAnimation = () => {
  const spin = useSharedValue(0);
  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  });
  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              backgroundColor: '#D8D9CF',
              borderRadius: 16,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            },
            frontAnimatedStyle,
          ]}>
          <Image
            source={require('../joker.png')}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              backgroundColor: '#FF8787',
              borderRadius: 16,
              backfaceVisibility: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            },
            backAnimatedStyle,
          ]}>
            <Image
            source={require('../batman.webp')}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </Animated.View>
      </View>

      <Text
        style={{
          marginTop: 50,
          borderWidth: 1,
          padding: 10,
          color: 'black',
          borderRadius: 10,
        }}
        onPress={() => {
          spin.value = spin.value ? 0 : 1;
        }}>
        Flip Card
      </Text>
    </View>
  );
};

export default FlipAnimation;
