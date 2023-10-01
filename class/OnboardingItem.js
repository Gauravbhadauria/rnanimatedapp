import {View, Text, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const OnboardingItem = ({item, index, x}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
       
      }}>
     
          <Image
            source={require('../icon1.png')}
            style={{
              width: SCREEN_WIDTH * 0.6,
              height: SCREEN_WIDTH * 0.6,
              tintColor: 'black',
            }}
          />
      

      <Text style={{color: 'white'}}>{'page ' + (index + 1)}</Text>
    </View>
  );
};

export default OnboardingItem;
