import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({onPress, title = 'Title'}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={[styles.header, {alignItems: 'flex-start', flex: 1}]}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <View style={styles.iconContainer}>
            <IcBack width={16} height={17} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.header, {flex: 3}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={[styles.header, {alignItems: 'flex-end', flex: 1}]}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  iconContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 4,
  },
  titleContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#27476E',
  },
});
