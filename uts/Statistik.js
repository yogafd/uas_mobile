import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class StatistikScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Statistik',
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            win rate 53% {'\n'}
            kemenangan 53 dari 100
          </Text>
        </View>
    );
  }
}
