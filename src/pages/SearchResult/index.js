import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Gap, Header, List, LoadingSpinner} from '../../components';
import {api} from '../../utils/api';

const SearchResult = ({route, navigation}) => {
  const {keyword} = route.params;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const getData = async (query) => {
    setLoading(true)
    try {
      const res = await api.search(query);
      setLoading(false)
      setResult(res)
    } catch (err) {
      setLoading(false)
      ToastAndroid.showWithGravityAndOffset(
        'Data tidak ditemukan',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(err)
    }
  }
  
  useEffect(() => {
    getData(keyword)
  }, [])

  return (
    <View style={styles.container}>
      <Header title={'Search Result'} onPress={() => navigation.goBack()}/>
      <View style={styles.page}>
      {result ? 
        <List data={result}/> : 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Data tidak ditemukan</Text>
        </View>
      }
      {loading && <LoadingSpinner />}
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
  },
});
