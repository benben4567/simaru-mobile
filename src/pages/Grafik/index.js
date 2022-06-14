import {StyleSheet, View, Dimensions, Text, ScrollView, ToastAndroid, RefreshControl} from 'react-native';
import {Gap, Header, LoadingSpinner} from '../../components';
import {PieChart} from "react-native-chart-kit";
import React, {useState, useEffect, useCallback} from 'react';
import {api} from '../../utils/api';

const chartConfig = {
  color: (opacity = 1) => `rgba(123, 111, 222, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
}

const ListJalur = ({data}) => {
  return (
    <View style={styles.box}>
        {data.map(a=>{
          return (
            <View key={a.jalur} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{flex: 2, marginVertical:2, fontFamily: 'Roboto-Regular'}}>{a.jalur}</Text>
              <Gap width={6}/>
              <Text style={{flex: 1, marginVertical:2, textAlign:'center', fontFamily: 'Roboto-Bold' }}>{a.jumlah}</Text>
            </View>
          )
        })}
    </View>
  )
}

const ListLolos = ({data}) => {
  return (
    <View style={styles.box}>
        {data.map(a=>{
          return (
            <View key={a.prodi_lulus} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{flex: 2, marginVertical:2, fontFamily: 'Roboto-Regular'}}>{a.prodi_lulus}</Text>
              <Gap width={6}/>
              <Text style={{flex: 1, marginVertical:2, textAlign:'center', fontFamily: 'Roboto-Bold' }}>{a.jumlah}</Text>
            </View>
          )
        })}
    </View>
  )
}

const ListProdi1 = ({data}) => {
  return (
    <View style={styles.box}>
        {data.map(a=>{
          return (
            <View key={a.prodi_1} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{flex: 2, marginVertical:2, fontFamily: 'Roboto-Regular'}}>{a.prodi_1}</Text>
              <Gap width={6}/>
              <Text style={{flex: 1, marginVertical:2, textAlign:'center', fontFamily: 'Roboto-Bold' }}>{a.jumlah}</Text>
            </View>
          )
        })}
    </View>
  )
}

const ListProdi2 = ({data}) => {
  return (
    <View style={styles.box}>
        {data.map(a=>{
          return (
            <View key={a.prodi_2} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{flex: 2, marginVertical:2, fontFamily: 'Roboto-Regular'}}>{a.prodi_2}</Text>
              <Gap width={6}/>
              <Text style={{flex: 1, marginVertical:2, textAlign:'center', fontFamily: 'Roboto-Bold' }}>{a.jumlah}</Text>
            </View>
          )
        })}
    </View>
  )
}

const Grafik = ({navigation}) => {
  const width = Dimensions.get('window').width - 20

  const [loading, setLoading] = useState(false);
  const [pie1, setPie1] = useState({
    sudah: 0,
    belum: 0
  })
  const [pie2, setPie2] = useState({
    belum: 0,
    setengah: 0,
    lunas: 0
  })
  const [pie3, setPie3] = useState({
    gel1: 0,
    gel2: 0,
    gel3: 0,
    gel4: 0
  })
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  
  const getData = async () => {
    setLoading(true)
    try {
      const data = await api.grafik();
      setLoading(false)
      setPie1(data.pendaftaran)
      setPie2(data.ukt)
      setPie3(data.gelombang)
      setData1(data.jalur_pendaftaran)
      setData2(data.lulus)
      setData3(data.prodi1)
      setData4(data.prodi2)
    } catch (error) {
      setLoading(false)
      ToastAndroid.showWithGravityAndOffset(
        'Gagal mengambil data',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(error)
    }
  }
  
  const onRefresh = useCallback(() => {
    getData()
  })
  
  useEffect(() => {
    getData()
  }, [])
    
  return (
    <View style={styles.container}>
      <Header title={'Grafik'} onPress={() => navigation.goBack()}/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.page}>
          <Text style={styles.title}>Bayar Pendaftaran</Text>
          <PieChart
            data={[
              {
                name: "(Bayar)",
                value: pie1.sudah,
                color: "#06d6a0",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12,
              },
              {
                name: "(Belum)",
                value: pie1.belum,
                color: "#1b9aaa",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12,
              },
            ]}
            width={width}
            height={150}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"none"}
            absolute
            style={styles.pieChart}
          />
          <Gap height={10}/>
          <Text style={styles.title}>Bayar UKT</Text>
          <PieChart
            data={[
              {
                name: "(Belum)",
                value: pie2.belum,
                color: "#d62828",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
              {
                name: "(Setengah)",
                value: pie2.setengah,
                color: "#f77f00",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
              {
                name: "(Lunas)",
                value: pie2.lunas,
                color: "#003049",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
            ]}
            width={width}
            height={150}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"none"}
            absolute
            style={styles.pieChart}
          />
          <Gap height={10}/>
          <Text style={styles.title}>Jumlah Per Gelombang</Text>
          <PieChart
            data={[
              {
                name: "(Gel 1)",
                value: pie3.gel1 ?? 0,
                color: "#1982c4",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
              {
                name: "(Gel 2)",
                value: pie3.gel2 ?? 0,
                color: "#8ac926",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
              {
                name: "(Gel 3)",
                value: pie3.gel3 ?? 0,
                color: "#ffca3a",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              },
              {
                name: "(Gel 4)",
                value: pie3.gel4 ?? 0,
                color: "#ef476f",
                legendFontColor: "#7F7F7F",
                legendFontSize: 12
              }
            ]}
            width={width}
            height={150}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"none"}
            absolute
            style={styles.pieChart}
          />
          <Gap height={10}/>
          <Text style={styles.title}>Jumlah Per Jalur</Text>
          <ListJalur data={data1}/>
          <Gap height={10}/>
          <Text style={styles.title}>Jumlah Lolos Prodi</Text>
          <ListLolos data={data2}/>
          <Gap height={10}/>
          <Text style={styles.title}>Jumlah Prodi Pilihan 1</Text>
          <ListProdi1 data={data3}/>
          <Gap height={10}/>
          <Text style={styles.title}>Jumlah Prodi Pilihan 2</Text>
          <ListProdi2 data={data4}/>
          <Gap height={15}/>
        </View>
      </ScrollView>
      {loading && <LoadingSpinner />}
    </View>
  );
};

export default Grafik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontFamily: 'Roboto-Bold'
  },
  pieChart: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  box: {
    width: Dimensions.get('window').width - 20,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  }
});
