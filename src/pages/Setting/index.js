import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Gap, Button} from '../../components';
import {auth} from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({onPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={[styles.header, {flex: 1}]}></View>
      <View style={[styles.header, {flex: 1}]}>
        <View style={styles.settingsContainer}>
          <Text style={styles.settings}>Settings</Text>
        </View>
      </View>
      <View style={[styles.header, {flex: 1, alignItems: 'flex-end'}]}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <View style={styles.passwordContainer}>
            <Text style={styles.password}>Password</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Setting = ({navigation}) => {
  const profile = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  }
  
  const logout = async () => {
    setLoading(true)
    try {
      await auth.logout();
      removeToken()
      setLoading(false)
      navigation.replace("Login")
    } catch (error) {
      setLoading(false)
      navigation.replace("Login")
      console.log(error)
    }
  }
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.navigate('Password')} />
      <View style={styles.mainContainer}>
        <Gap height={23} />
        <View style={styles.avatar}></View>
        <Gap height={24} />
        <Text style={styles.name}>{profile.name}</Text>
        <Gap height={11} />
        <Text style={styles.email}>{profile.email}</Text>
        <Gap height={16} />
        <Button
          text="Logout"
          loading={loading}
          onPress={() => logout()}
        />
        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Profile')}>
          <View
            style={{
              width: 126,
              height: 33,
              backgroundColor: '#298EEC',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
              }}>
              Edit
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  settingsContainer: {
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
  settings: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#27476E',
  },
  password: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: '#298EEC',
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 130,
    borderColor: '#298EEC',
    borderWidth: 3,
    backgroundColor: '#C4C4C4',
  },
  name: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#27476E',
  },
  email: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
