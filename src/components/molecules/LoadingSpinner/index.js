import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React from 'react';
import {Flow} from 'react-native-animated-spinkit';

var {width, height} = Dimensions.get('window');

const LoadingSpinner = ({text = 'Loading...'}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.spinner}>
          <Flow size={50} color="#298EEC" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 1,
    width: width,
    height: height,
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: 7,
  },
  textContainer: {
    margin: 7,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
