import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CircleFade} from 'react-native-animated-spinkit';

const Button = ({text, color = '#298EEC', textColor = 'white', onPress, loading = false}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        {loading ? <CircleFade size={25} color={textColor} /> : <Text style={styles.text(textColor)}>{text}</Text> }
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: textColor => ({
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: textColor,
    textAlign: 'center',
    marginHorizontal: 10
  }),
});
