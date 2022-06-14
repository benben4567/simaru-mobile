import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, Button} from '../../components';

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header title={'Edit Profile'} onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Gap height={14} />
        <TextInput label={'Name'} placeholder={'Name'} />
        <Gap height={15} />
        <Button text={'Save'} onPress={() => alert('Saved')} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 14,
  },
});
