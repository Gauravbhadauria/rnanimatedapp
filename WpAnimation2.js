import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const WpAnimation2 = () => {
  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animatedScale = useSharedValue(0);
  const animatedMobileView = useSharedValue(0);
  const animatedBottomX=useSharedValue(0)

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{translateY: animatedImgY.value}],
    };
  });
  const animatedMobileStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedMobileView.value}],
    };
  });
  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedBottomX.value}],
    };
  });
  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: '#1c1c1c'}}>
      <AnimatedBtn
        style={[
          {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginTop: 20,
          },
          animatedBtnStyle,
        ]}
        onPress={() => {
          animatedMobileView.value = withTiming(0, {duration: 300});
          animatedBottomX.value = withTiming(0, {duration: 300});
          animatedScale.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(70, {duration: 500});
          animatedImgHeight.value = withTiming(70, {duration: 500});
          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Image
          source={require('./close.png')}
          style={{width: 24, height: 24, tintColor: 'white'}}
        />
      </AnimatedBtn>
      <TouchableOpacity
        onPress={() => {
          if (animatedImgWidth.value == 70) {
            animatedMobileView.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 200},
            );
            animatedBottomX.value = withTiming(
                -Dimensions.get('window').width,
                {duration: 200},
              );
            animatedScale.value = withTiming(1, {duration: 500});
            animatedImgWidth.value = withTiming(300, {duration: 500});
            animatedImgHeight.value = withTiming(300, {duration: 500});
            animatedImgY.value = withTiming(150, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={require('./profile_pic.png')}
          style={[
            {
              width: 70,
              height: 70,
              marginLeft: 20,
              marginTop: 20,
              resizeMode: 'contain',
            },
            animatedImgStyle,
          ]}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            width: '90%',
            height: 100,
            backgroundColor: '#292929',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
          },
          animatedMobileStyle,
        ]}>
        <Text style={{color: 'white', marginLeft: 20, marginTop: 10}}>
          {'Mobile : +91943XXXXXX'}
        </Text>
      </Animated.View>
      <Animated.View 
        style={[{
            width: '100%',
            height: 70,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 0.4,
            borderTopColor: '#9e9e9e',
          },animatedBottomStyle]}>
        <Image
          source={require('./icon1.png')}
          style={{tintColor: 'white', width: 30, height: 30}}
        />
        <Image
          source={require('./icon2.png')}
          style={{tintColor: 'white', width: 30, height: 30}}
        />
        <Image
          source={require('./icon3.png')}
          style={{tintColor: 'white', width: 30, height: 30}}
        />
        <Image
          source={require('./icon4.png')}
          style={{tintColor: 'white', width: 30, height: 30}}
        />
        <Image
          source={require('./icon5.png')}
          style={{tintColor: 'white', width: 30, height: 30}}
        />
      </Animated.View>
    </View>
  );
};

export default WpAnimation2;
