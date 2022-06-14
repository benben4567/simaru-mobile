import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Gap, Header, List, LoadingSpinner} from '../../components';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {api} from '../../utils/api';

const prodi2 = ["D3 Keperawatan", "D3 Kebidanan", "D3 Akupunktur", "D3 Farmasi", "D3 RMIK", "Sarjana Terapan Kebidanan", "Profesi Bidan", "S1 Farmasi Klinis", "S1 Fisioterapi", "S1 Informatika", "S1 Ilmu Keperawatan", "Profesi Ners", "Sarjana Terapan Anestesiologi"];

const Lolos = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();
  const [result, setResult] = useState();
  const [jumlah, setJumlah] = useState(0);

  const getData = async () => {
    setLoading(true)
    try {
      const res = await api.lolos(selected)
      setLoading(false)
      setResult(res)
      setJumlah(res.length)
    } catch (error) {
      setLoading(false)
      ToastAndroid.showWithGravityAndOffset(
        'Data tidak ditemukan',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(err)
    }
  }
  
  useEffect(() => {
    if (selected) {
      getData()
    }
  }, [selected])
  
  return (
    <View style={styles.page}>
      <Header title={'Lolos Seleksi'} onPress={() => navigation.goBack()} />
      <View>
        <View style={styles.dropdownContainer}>
          <SelectDropdown
            data={prodi2}
            onSelect={(selectedItem) => {
              setSelected(selectedItem);
            }}
            defaultButtonText={'Pilih Prodi'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
          <Gap height={5} />
          <Text style={{ color: '#001D4A', fontFamily: 'Roboto-Regular', fontSize: 15}}>Jumlah Maba: {jumlah}</Text>
          <Gap height={5} />
        </View>
        <Gap height={7} />
      </View>
      {result && <List data={result}/>}
      {loading && <LoadingSpinner />}
    </View>
  );
};

export default Lolos;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  dropdownContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    textAlign: 'left', 
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  dropdown1DropdownStyle: {backgroundColor: '#001D4A'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  }
});
