import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const CartDemo2 = () => {
  const [count, setCount] = useState(0);
  const animatedY = useSharedValue(0);
  const animateX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(1);
  const [btnClicked, setBtnclicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animateX.value},
        {translateY: animatedY.value},
        {scale: scale.value},
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale2.value}],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../shoes.jpg')}
        style={{width: '100%', height: 300}}
      />
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'white',

          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          right: 10,
          borderRadius: 30,
        }}>
        <Image source={require('../bag.png')} style={{width: 40, height: 40}} />
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              right: 0,
            },
            animatedStyle2,
          ]}>
          <Text style={{color: 'white', fontSize: 16}}>{count}</Text>
        </Animated.View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
          marginTop: 10,
          marginLeft: 10,
        }}>
        Foraml Shoes
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
      <Animated.View
        style={[
          {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
          animatedStyle,
        ]}>
        <Text style={{color: 'white', fontSize: 16}}>{'+1'}</Text>
      </Animated.View>
      <TouchableOpacity
        disabled={btnClicked}
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          if (animateX.value == 0) {
            setBtnclicked(true);
            scale.value = 1;
            animateX.value = withTiming(150, {duration: 1500});
            animatedY.value = withTiming(-580, {duration: 1500});
            setTimeout(() => {
              scale.value = 0;
              scale2.value = withSpring(1.5);
              setCount(count + 1);
              animateX.value = withTiming(0, {duration: 1500});
              animatedY.value = withTiming(0, {duration: 1500});
              setTimeout(() => {
                scale2.value = withSpring(1);
                setBtnclicked(false);
              }, 150);
            }, 1500);
          }
        }}>
        <Text style={{color: 'white'}}>Add TO Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartDemo2;
