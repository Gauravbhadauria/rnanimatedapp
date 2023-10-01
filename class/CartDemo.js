import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const PuttingIntoCart = () => {
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const badge = useSharedValue(1);
  const [count, setCount] = useState(0);
  const [btnClicked, setBtnclicked] = useState(false);

  const animatStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: width.value},
        {translateX: height.value},
        {scale: opacity.value},
      ],

      // opacity: opacity.value,
    };
  });
  const badgeStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: badge.value}],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('./../shoes.jpg')}
        style={{width: '100%', height: 300}}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '500',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Formal Shoes
      </Text>
      <Text
        style={{
          width: '94%',
          alignSelf: 'center',
          marginTop: 10,
          fontSize: 16,
        }}>
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      </Text>
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginTop: 20,
          marginRight: 20,
          backgroundColor: 'white',
          borderRadius: 30,
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
        <Image
          source={require('../bag.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 15,
              position: 'absolute',
              top: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            },
            badgeStyle,
          ]}>
          <Text style={{color: 'white'}}>{count}</Text>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          {
            width: 30,
            height: 30,
            backgroundColor: 'red',
            alignSelf: 'center',
            borderRadius: 15,
            opacity: 1,
          },
          animatStyle,
        ]}>
        <Text
          style={{
            alignSelf: 'center',

            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {'+1'}
        </Text>
      </Animated.View>
      <TouchableOpacity
        disabled={btnClicked}
        style={{
          alignItems: 'flex-end',
          backgroundColor: 'black',
          width: '90%',

          height: 50,
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          opacity.value = withSpring(0.5);
          //   width.value = -80;
          //   height.value = 120;
          setBtnclicked(true);
          width.value = withTiming(-570, {duration: 1500});
          height.value = withTiming(130, {duration: 1500});
          opacity.value = 1;

          setTimeout(() => {
            badge.value = withSpring(1.5);
            setCount(count + 1);
            opacity.value = withTiming(0, {duration: 0});
            width.value = withTiming(0, {duration: 100});
            height.value = withTiming(0, {duration: 100});

            setBtnclicked(false);
            setTimeout(() => {
              badge.value = withSpring(1);
            }, 150);
          }, 1500);
        }}>
        <Text style={{color: 'white'}}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PuttingIntoCart;
