import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const BottomNav = () => {
  // for changing color
  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');
  const [selectedTab, setSlectedTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);

  // for button

  const animatedBtn1Y = useSharedValue(0);
  const animatedBtn2Y = useSharedValue(0);
  const animatedBtn3Y = useSharedValue(0);

  useEffect(() => {
    if (selectedTab == 0) {
      setColor2('black');
      setColor3('black');
      animatedY.value = withTiming(50, {duration: 500}); //for going down

      setTimeout(() => {
        animatedX.value = withTiming(0, {duration: 500}); //for moving left riht after 500 ms
      }, 500);

      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-150, {duration: 500});
        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));

        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn1Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor1('white');
          }, 500);
        }, 500); // for going up
      }, 1000);
    } else if (selectedTab == 1) {
      setColor1('black');
      setColor3('black');
      animatedY.value = withTiming(50, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(100, {duration: 500});
      }, 500);

      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-150, {duration: 500});
        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn2Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor2('white');
          }, 500);
        }, 500); // for going up
      }, 1000);
    } else {
      setColor1('black');
      setColor2('black');
      animatedY.value = withTiming(50, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(200, {duration: 500});
      }, 500);

      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-150, {duration: 500});
        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn3Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor3('white');
          }, 500);
        }, 500); // for going up
      }, 1000);
    }
  }, [selectedTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });

  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn1Y.value}],
    };
  });
  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn2Y.value}],
    };
  });
  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn3Y.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          elevation: 5,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'orange',
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtnStyle1,
          ]}
          onPress={() => {
            setSlectedTab(0);
          }}>
          <Image
            source={require('../bag.png')}
            style={{width: 30, height: 30, tintColor: color1}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtnStyle2,
          ]}
          onPress={() => {
            setSlectedTab(1);
          }}>
          <Image
            source={require('../bag.png')}
            style={{width: 30, height: 30, tintColor: color2}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtnStyle3,
          ]}
          onPress={() => {
            setSlectedTab(2);
          }}>
          <Image
            source={require('../bag.png')}
            style={{width: 30, height: 30, tintColor: color3}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default BottomNav;
