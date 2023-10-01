import {View} from 'react-native';

const {
  useAnimatedSensor,
  useAnimatedStyle,
  SensorType,
  withTiming,
  default: Animated,
} = require('react-native-reanimated');

const SensorDemo = () => {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  }); // <- initialization
  const style = useAnimatedStyle(() => {
    console.log(animatedSensor.sensor.value.yaw);
    console.log(animatedSensor.sensor.value.pitch);
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      transform: [{translateX: pitch * 100}, {translateY: yaw * 100}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[{backgroundColor: 'white', width: '90%', height: 200}, style]}
      />
    </View>
  );
};

export default SensorDemo;
