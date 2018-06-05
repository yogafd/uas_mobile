import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Hasil1Screen extends React.Component {
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

  constructor(props) {
      super(props);
      this.state = {
        status: ''
      };
    }
  render() {
    const { params } = this.props.navigation.state;
    const score = params ? params.score : null;
    const score2 = params ? params.score2 : null;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
          m
            HASIL { '\n' }
            {JSON.stringify(score)} { ':' } {JSON.stringify(score2)}
          </Text>
          <Button
            title="Kembali"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
    );
  }
}
