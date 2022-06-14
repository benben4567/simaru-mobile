import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, ToastAndroid, Keyboard} from 'react-native';
import {Logo} from '../../assets';
import {Gap, Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux'
import {setProfile} from '../../redux/reducer/profile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth} from '../../utils/api';

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: profile.email,
    password: '',
  })
  
  const storeUserdata = async (value) => {
    try {
      dispatch(setProfile(value.user))
      await AsyncStorage.setItem('user', JSON.stringify(value.user))
      await AsyncStorage.setItem('token', value.token)
    } catch (e) {
      ToastAndroid.showWithGravityAndOffset(
        'Kesalahan dalam penyimpanan',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(e)
    }
  }
  
  const sendData = async (data) => {
    Keyboard.dismiss();
    if (validation(form)) {
      setLoading(true)
      try {
        const res = await auth.login(data);
        if (res) {
          storeUserdata(res)
          setLoading(false)
          navigation.replace('MainApp');
        }
      } catch (err) {
        setLoading(false)
        console.log(err);
        ToastAndroid.showWithGravityAndOffset(
          err.meta.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Email dan Password harus diisi',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    }
  }
  
  const validation = (form) => {
    if( form.email.length < 1 || form.password.length < 1 ) {
      return false
    } else {
      return true
    }
  }
  
  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value
    })
  }
  
  return (
    <View style={styles.page}>
      <View style={{alignItems: 'center'}}>
        <Logo width={64} height={64} />
        <Gap height={3} />
        <Text style={styles.title}>SIMARU</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#C4C4C4"
          value={form.email}
          keyboardType={'email-address'}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <Gap height={20} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          value={form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <Gap height={25} />
        <Button
          text="Sign In"
          color="#001D4A"
          loading={loading}
          onPress={() => sendData(form)}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#298EEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Exo2-Medium',
  },
  container: {
    paddingTop: 37,
    paddingHorizontal: 42,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
});
