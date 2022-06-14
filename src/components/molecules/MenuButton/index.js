import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IcExternal,
  IcInternal,
  IcLolos,
  IcNim,
  IcPembayaran,
  IcValidasi,
} from '../../../assets';

const Icon = ({icon}) => {
  switch (icon) {
    case 'validasi':
      return <IcValidasi />;
    case 'lolos':
      return <IcLolos />;
    case 'pembayaran':
      return <IcPembayaran />;
    case 'internal':
      return <IcInternal />;
    case 'external':
      return <IcExternal />;
    case 'nim':
      return <IcNim />;
    default:
      return <IcNim />;
  }
};

const MenuButton = ({icon, name = 'button-name', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Icon icon={icon} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: 'center',
  },
  nameContainer: {
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: 'black',
    textAlign: 'center',
  },
});
