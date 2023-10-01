import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const YoutubeDemo = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const animatedImageH = useSharedValue(200);
  const getsture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(e => {
      console.log('update', e.translationY);
    //  if (e.translationY < 0) {
        translateY.value = e.translationY + context.value.y;
       // animatedImageH.value = -1 * -e.translationY;
     // }
    });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      height: 400 - translateY.value,
    };
  });
//   const animateImageStyle = useAnimatedStyle(() => {
//     return {
//       height: animatedImageH.value,
//     };
//   });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <GestureDetector gesture={getsture}>
          <Animated.View
            style={[
              {
                width: '100%',
                height: Dimensions.get('window').height,
                backgroundColor: 'black',
                position: 'absoulte',
                top: Dimensions.get('window').height / 3,
              },
              animatedStyle,
            ]}>
            <AnimatedImage
              source={require('./youtube.jpg')}
              style={[{width: '100%', height: '40%'}]}
            />
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default YoutubeDemo;
