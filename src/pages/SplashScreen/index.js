import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ToastAndroid, Image} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {useDispatch} from 'react-redux'
import {setProfile} from '../../redux/reducer/profile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../utils/api';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const authCheck = async () => {
    try {
      const res = await api.profile();
      dispatch(setProfile(res))
      navigation.replace('MainApp');
    } catch (err) {
      if (err.meta.code == 401) {
        try {
          const user = await AsyncStorage.getItem("user");
          const currentUser = JSON.parse(user);
          dispatch(setProfile(currentUser))
          navigation.replace('Login');
        } catch (error) {
          navigation.replace('Login');
        }
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Terjadi Kesalahan',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
        console.log(err)
      }
    }
  }
  
  useEffect(() => {
    // authCheck()
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Gap height={20} />
      <Text style={styles.title}>SIMARU</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#298EEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: 'Exo2-Medium',
  },
});
