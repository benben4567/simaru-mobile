import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../Gap';

const SearchDetail = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Nama</Text>
        <Text style={styles.value}>John Doe</Text>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Jalur</Text>
          <Text style={styles.value}>Reguler</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Gelombang</Text>
          <Text style={styles.value}>1</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi 1</Text>
          <Text style={styles.value}>S1 Keperawatan</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi 2</Text>
          <Text style={styles.value}>S1 Keperawatan</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Prodi Lolos</Text>
          <Text style={styles.value}>S1 Keperawatan</Text>
          <Text style={styles.sub}>12-05-2022</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.title}>Rekomendasi</Text>
          <Text style={styles.value}>Foo Bar (081234567890)</Text>
          <Text style={styles.sub}>Internal</Text>
        </View>
      </View>
      <Gap height={10} />
      <View style={{height: 1, backgroundColor: 'black', width: '100%'}} />
      <Gap height={10} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.value}>Validasi</Text>
          <Text style={styles.sub}>10-05-2022</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.value}>Pembayaran</Text>
          <Text style={styles.sub}>Lunas - 13-05-2022</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.value}>NIM</Text>
          <Text style={styles.sub}>2211001</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.value}>Rekomendasi</Text>
          <Text style={styles.sub}>Selesai - 15-05-2022</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchDetail;

const styles = StyleSheet.create({
  container: {
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
    fontSize: 14,
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
