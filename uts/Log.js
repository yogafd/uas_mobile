import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LogScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Menejemen Pertandingan',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1
    }
  };
    render() {
      return (
        <View style={{ marginTop: 150, alignItems: 'center' }}>
          <Text>WELCOME</Text>
          <View style={{ margin: 10 }}>
            <Button
              title="sign with google"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
	containerMain: {
    flex: 1
  }
});
