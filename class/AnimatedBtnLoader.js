import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedBtnLoader = () => {
  const WIDTH = useSharedValue(220);
  const HEIGHT = useSharedValue(50);
  const RADIUS = useSharedValue(30);
  const [loginClicked, setLoginClicked] = useState(false);
  const ANIMATED_X = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: WIDTH.value,
      height: HEIGHT.value,
      borderRadius: RADIUS.value,
      transform: [{translateX: ANIMATED_X.value}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedBtn
        style={[
          {
            width: 220,
            height: 50,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
        onPress={() => {
          if (WIDTH.value == 220) {
            WIDTH.value = withTiming(60, {duration: 300});
            RADIUS.value = withTiming(30, {duration: 300});
            HEIGHT.value = withTiming(60, {duration: 300});
            setLoginClicked(true);
          } else {
            WIDTH.value = withTiming(220, {duration: 300});
            RADIUS.value = withTiming(30, {duration: 300});
            HEIGHT.value = withTiming(50, {duration: 300});
            setLoginClicked(false);
          }
        }}>
        {!loginClicked ? (
          <Text style={{color: 'white', fontSize: 18}}>Login</Text>
        ) : (
          <ActivityIndicator size={'large'} color={'white'} />
        )}
      </AnimatedBtn>
    </View>
  );
};

export default AnimatedBtnLoader;
