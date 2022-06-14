import {StyleSheet, FlatList, View, Text, ToastAndroid} from 'react-native';
import ListItem from '../ListItem';
import LoadingSpinner from '../LoadingSpinner';
import Gap from '../../atoms/Gap';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {api} from '../../../utils/api';

const List = ({data}) => {
  const refRBSheet = useRef();
  const [maba, setMaba] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetail = async (id) => {
    setLoading(true);
    try {
      const res = await api.show(id);
      setLoading(false);
      setMaba(res);
      refRBSheet.current.open();
    } catch (error) {
      setLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        'Gagal mengambil data',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
      console.log(error);
    }
  };

  const Detail = () => (
    <View style={styles.containerDetail}>
      <View>
        <Text style={styles.title}>Nama</Text>
        <Text style={styles.value}>{maba.nama}</Text>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Jalur</Text>
          <Text style={styles.value}>{maba.jalur_pendaftaran}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Gelombang</Text>
          <Text style={styles.value}>{maba.gelombang}</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi 1</Text>
          <Text style={styles.value}>{maba.prodi_1}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi 2</Text>
          <Text style={styles.value}>{maba.prodi_2}</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi Lolos</Text>
          <Text style={styles.value}>{maba.prodi_lulus ?? '-'}</Text>
          <Text style={styles.sub}>{maba.tgl_lulus ?? '-'}</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Rekomendasi</Text>
          <Text style={styles.value}>
            {maba.nama_perekom ?? '-'} {maba.telp_perekom ? '('+maba.telp_perekom+')' : ''}
          </Text>
          <Text style={styles.sub}>{maba.rekomendasi ?? '-'}</Text>
        </View>
      </View>
      <Gap height={10} />
      <View style={{height: 1, backgroundColor: 'black', width: '100%'}} />
      <Gap height={10} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.value}>Validasi</Text>
          <Text style={styles.sub}>{maba.tgl_validasi ?? '-'}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.value}>Pembayaran</Text>
          <Text style={styles.sub}>
            {maba.pembayaran ?? '-'} {maba.tgl_pembayaran ? '- '+maba.tgl_pembayaran : ''}
          </Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.value}>NIM</Text>
          <Text style={styles.sub}>{maba.nim ?? '-'}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.value}>Rekomendasi</Text>
          <Text style={styles.sub}>
            {maba.tgl_pencairan ? 'Selesai - '+maba.tgl_pencairan : (maba.tgl_pengajuan ? 'Diajukan - '+maba.tgl_pengajuan : '-')}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading && <LoadingSpinner />}
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListItem name={item.nama} number={item.no_pendaftaran + (item.nim ? ' / '+item.nim : '')} onPress={() => getDetail(item.no_pendaftaran)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{width: '100%', height: 1, backgroundColor: 'black'}}
            />
          )}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Tidak ada data</Text>
        </View>
      )}
      <RBSheet
        ref={refRBSheet}
        height={550}
        closeOnDragDown={true}
        animationType={'slide'}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: 'black',
          },
        }}>
        <Detail />
      </RBSheet>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  containerDetail: {
    flex: 1,
    marginTop: 9,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  value: {
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
  sub: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
});
