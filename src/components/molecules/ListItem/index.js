import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcThreeDots} from '../../../assets';

const ListItem = ({name, number, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}>
        <View style={styles.iconContainer}>
          <IcThreeDots />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#27476E',
  },
  number: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#298EEC',
  },
});
