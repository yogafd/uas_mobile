import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Menejemen Pertandingan',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      flex: 1
    }
  };
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <View style={{ margin: 10 }}>
          <Button
            title="Mulai"
            onPress={() => this.props.navigation.navigate('Mulai')}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Hasil Pertandingan"
            onPress={() => this.props.navigation.navigate('Lihat')}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Jadwal Pertandingan"
            onPress={() => this.props.navigation.navigate('Jadwal')}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Statistik"
            onPress={() => this.props.navigation.navigate('Statistik')}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Lokasi Lapangan"
            onPress={() => this.props.navigation.navigate('Map')}
          />
        </View>
      </View>
    );
  }
}
