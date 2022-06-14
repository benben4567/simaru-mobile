import {StyleSheet, Text, View, TextInput, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {Gap, MenuButton} from '../../components';

const Home = ({navigation}) => {
  const [input, setInput] = useState()
  const profile = useSelector((state) => state.profile)
  
  const onInputChange = (value) => {
    setInput({...input, value})
  }
  
  useEffect(() => {
    setInput()
  }, [])
  
  return (
    <View>
      <View style={{backgroundColor: '#298EEC', height: 100}}>
        <View style={styles.header}>
          <Text style={styles.name}>Hi, {profile.name}!</Text>
          <View style={styles.avatar}></View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.search} 
          returnKeyType="search" 
          placeholder="Nomor / Nama Pendaftar" 
          onChangeText={(value) => onInputChange(value)} 
          onSubmitEditing={() => {
            (input && (input.value.length >= 3 ? 
              navigation.navigate('SearchResult', {keyword: input}) : 
              ToastAndroid.showWithGravityAndOffset('Minimal 3 huruf untuk pencarian',ToastAndroid.SHORT,ToastAndroid.BOTTOM,0,50,)
            ))}}
          />
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <MenuButton
            icon={'validasi'}
            name={'Validasi'}
            onPress={() => navigation.navigate('Validasi')}
          />
          <MenuButton
            icon={'lolos'}
            name={'Lolos Seleksi'}
            onPress={() => navigation.navigate('Lolos')}
          />
          <MenuButton
            icon={'pembayaran'}
            name={'Pembayaran'}
            onPress={() => navigation.navigate('Pembayaran')}
          />
        </View>
        <Gap height={15} />
        <View style={styles.menuRow}>
          <MenuButton
            icon={'internal'}
            name={'Rekomendasi Internal'}
            onPress={() => navigation.navigate('RekomInternal')}
          />
          <MenuButton
            icon={'external'}
            name={'Rekomendasi Eksternal'}
            onPress={() => navigation.navigate('RekomEksternal')}
          />
          <MenuButton
            icon={'nim'}
            name={'NIM'}
            onPress={() => navigation.navigate('Nim')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#F3F3F3',
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  searchContainer: {
    flexDirection: 'row',
    height: 60,
    marginTop: -30,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  menuContainer: {
    height: '100%',
    marginHorizontal: 15,
    marginTop: 18,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
