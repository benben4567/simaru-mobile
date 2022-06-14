import { StyleSheet, View, useWindowDimensions, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {Header, List, LoadingSpinner} from '../../components';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useEffect } from 'react';
import {api} from '../../utils/api';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#DCE0D9'}}
    style={{ backgroundColor: '#27476E' }}
  />
);

const Nim = ({navigation}) => {
  const layout = useWindowDimensions();
  
  const [loading, setLoading] = useState(true)
  const [gel1, setGel1] = useState([]);
  const [gel2, setGel2] = useState([]);
  const [gel3, setGel3] = useState([]);
  const [gel4, setGel4] = useState([]);
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: '1', title: 'Gel 1' },
    { key: '2', title: 'Gel 2' },
    { key: '3', title: 'Gel 3' },
    { key: '4', title: 'Gel 4' },
  ]);
  
  
  const getData = async () => {
    setLoading(true)
    try {
      const res = await api.nim()
      setLoading(false)
      setGel1(res.gelombang_1)
      setGel2(res.gelombang_2)
      setGel3(res.gelombang_3)
      setGel4(res.gelombang_4)
    } catch (error) {
      setLoading(false)
      ToastAndroid.showWithGravityAndOffset(
        'Data tidak ditemukan',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(error)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  const FirstRoute = () => (
    <List data={gel1}/>
  );
  
  const SecondRoute = () => (
    <List data={gel2}/>
  );
  
  const ThirdRoute = () => (
    <List data={gel3}/>
  );
  
  const ForthRoute = () => (
    <List data={gel4}/>
  );
  
  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: ThirdRoute,
    4: ForthRoute,
  });
  
  return (
    <View style={styles.page}>
      <Header title={'NIM'} onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        {
          loading ? <LoadingSpinner/> :
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        }
      </View>
    </View>
  );
};

export default Nim;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  }
});
