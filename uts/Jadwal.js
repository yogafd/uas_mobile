import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class JadwalScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Jadwal Pertandingan',
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
      <View style={{ margin: 10 }}>
        <Button
          title="Tambah"
          onPress={() => this.props.navigation.navigate('Jadwal1')}
        />
      </View>
    );
  }
}
