import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedBottom = () => {
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const [selectedTab, setSlectedTab] = useState(0);
  const animateBtn1 = useSharedValue(0);
  const animatedBtn2 = useSharedValue(0);
  const animatedBtn3 = useSharedValue(0);
  const [color1, setColor1] = useState('#000');
  const [color2, setColor2] = useState('#000');
  const [color3, setColor3] = useState('#000');
  const animatedstyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });
  useEffect(() => {
    if (selectedTab == 0) {
      manageTab1();
    } else if (selectedTab == 1) {
      manageTab2();
    } else if (selectedTab == 2) {
      manageTab3();
    }
  }, [selectedTab]);

  const manageTab1 = () => {
    setColor2('#000');
    setColor3('#000');
    animatedY.value = withTiming(50, {duration: 500});
    animatedX.value = withDelay(500, withTiming(0, {duration: 500}));

    setTimeout(() => {
      animateBtn1.value = withDelay(100, withTiming(-150, {duration: 500}));
      animatedY.value = withTiming(-50, {duration: 500});

      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});
        animateBtn1.value = withTiming(0, {duration: 500});
        setTimeout(() => {
          setColor1('#fff');
        }, 500);
      }, 500);
    }, 1000);
  };

  const manageTab2 = () => {
    setColor1('#000');
    setColor3('#000');
    animatedY.value = withTiming(50, {duration: 500});
    animatedX.value = withDelay(500, withTiming(100, {duration: 500}));
    setTimeout(() => {
      animatedBtn2.value = withDelay(100, withTiming(-150, {duration: 500}));
      animatedY.value = withTiming(-50, {duration: 500});

      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});
        animatedBtn2.value = withTiming(0, {duration: 500});
        setTimeout(() => {
          setColor2('#fff');
        }, 500);
      }, 500);
    }, 1000);
  };

  const manageTab3 = () => {
    setColor2('#000');
    setColor1('#000');
    animatedY.value = withTiming(50, {duration: 500});
    animatedX.value = withDelay(500, withTiming(200, {duration: 500}));

    setTimeout(() => {
      animatedBtn3.value = withDelay(100, withTiming(-150, {duration: 500}));
      animatedY.value = withTiming(-50, {duration: 500});

      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});
        animatedBtn3.value = withTiming(0, {duration: 500});
        setTimeout(() => {
          setColor3('#fff');
        }, 500);
      }, 500);
    }, 1000);
  };

  const animatedBtn1Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animateBtn1.value,
        },
      ],
    };
  });

  const animatedBtn2Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedBtn2.value,
        },
      ],
    };
  });
  const animatedBtn3Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedBtn3.value,
        },
      ],
    };
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 80,
          backgroundColor: 'white',
          elevation: 5,
          position: 'absolute',
          alignItems: 'center',
          bottom: 0,
        }}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,
              backgroundColor: 'orange',
              position: 'absolute',
              borderRadius: 30,
            },
            animatedstyle,
          ]}></Animated.View>
        <AnimatedBtn
          style={[
            {
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtn1Style,
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
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtn2Style,
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
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedBtn3Style,
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

export default AnimatedBottom;
