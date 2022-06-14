import {StyleSheet, View, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput, Gap, Button} from '../../components';
import {auth} from '../../utils/api';

const Password = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    old_password: '',
    password: '',
    password_confirmation: ''
  })
  
  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value
    })
  }
  
  const sendData = async (form) => {
    if (form.password.length < 7) {
      ToastAndroid.showWithGravityAndOffset(
        'Password harus lebih dari 6 karakter',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    } else if (form.password != form.password_confirmation){
      ToastAndroid.showWithGravityAndOffset(
        'Password Baru dan Konfirmasi Password harus sama',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    } else {
      setLoading(true);
      try {
        await auth.password(form);
        setLoading(false)
        ToastAndroid.showWithGravityAndOffset(
          'Password berhasil disimpan',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
      } catch (error) {
        setLoading(false)
        if (error.meta.code == 422) {
          ToastAndroid.showWithGravityAndOffset(
            'Isian tidak valid',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            50,
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'Gagal menyimpan password',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            50,
          );
        }
        console.log(error)
      }
    }
  }
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header title={'Change Password'} onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Gap height={14} />
        <TextInput label={'Old Password'} onChangeText={(value) => onInputChange(value, 'old_password')} placeholder={'Old Password'} secureTextEntry={true}/>
        <Gap height={15} />
        <TextInput label={'New Password'} onChangeText={(value) => onInputChange(value, 'password')} placeholder={'New Password'} secureTextEntry={true}/>
        <Gap height={15} />
        <TextInput
          label={'Repeat New Password'}
          onChangeText={(value) => onInputChange(value, 'password_confirmation')} 
          placeholder={'Repeat New Password'}
          secureTextEntry={true}
        />
        <Gap height={30} />
        <Button text={'Save'} loading={loading} onPress={() => sendData(form)} />
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 14,
  },
});
