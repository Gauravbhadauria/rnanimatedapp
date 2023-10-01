import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const WpDemo = () => {
  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animatedBottomX = useSharedValue(0);
  const animatedMobileX = useSharedValue(0);
  const animatedBackScale = useSharedValue(0);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{translateY: animatedImgY.value}],
    };
  });
  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedBottomX.value}],
    };
  });
  const animatedMobileStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedMobileX.value}],
    };
  });
  const backBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedBackScale.value}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: '#1c1c1c'}}>
      <StatusBar backgroundColor={'#1c1c1c'} barStyle={'light-content'} />
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
          backBtnStyle,
        ]}
        onPress={() => {
          animatedMobileX.value = withTiming(0, {duration: 200});
          animatedBackScale.value = withTiming(0, {duration: 300});
          animatedBottomX.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(70, {duration: 300});
          animatedImgHeight.value = withTiming(70, {duration: 300});

          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Image
          source={require('./close.png')}
          style={{width: 24, height: 24, tintColor: 'white'}}
        />
      </AnimatedBtn>
      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 20}}
        onPress={() => {
          if (animatedImgWidth.value == 70) {
            animatedMobileX.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 200},
            );
            animatedBottomX.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 500},
            );
            animatedBackScale.value = withTiming(1, {duration: 300});
            animatedImgWidth.value = withTiming(300, {duration: 300});
            animatedImgHeight.value = withTiming(300, {duration: 300});

            animatedImgY.value = withTiming(150, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={require('./profile_pic.png')}
          style={[
            {
              width: 70,
              height: 70,

              resizeMode: 'contain',
            },
            animatedImageStyle,
          ]}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            backgroundColor: '#292929',
            width: '90%',
            height: 100,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
          },
          animatedMobileStyle,
        ]}>
        <Text
          style={{color: 'white', marginLeft: 20, fontSize: 18, marginTop: 20}}>
          {'Mobile: +919484XXXXXXX'}
        </Text>
        <Text
          style={{color: 'white', marginLeft: 20, fontSize: 18, marginTop: 10}}>
          {'Email: gaurav@gmail.com'}
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            width: '100%',
            height: 70,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 0.4,
            borderTopColor: '#9e9e9e',
          },
          animatedBottomStyle,
        ]}>
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

export default WpDemo;
