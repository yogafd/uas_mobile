import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class MulaiScreen extends React.Component {
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
        namatim: '',
        lawan: '',
        tgl: '',
        ActivityIndicator_Loading: false,
      };
    }

    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading: true }, () =>
        {
            fetch('http://www.gusnando.com/mobile/yoga/tambahpertandingan.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  namatim: this.state.namatim,
                  lawan: this.state.lawan,
                  tgl: this.state.tgl,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  namatim: '',
                  lawan: '',
                  tgl: '',
                  ActivityIndicator_Loading: false
                });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading: false });
            });
        });
    }

    render() {
      return (
        <View style={styles.containerMain}>
          <TextInput
              placeholder="Masukan Nama Pemain/Tim"
              onChangeText={(namatim) => this.setState({ namatim })}
              value={this.state.namatim}
          />
          <TextInput
              placeholder="Masukan Nama Lawan"
              onChangeText={(lawan) => this.setState({ lawan })}
              value={this.state.lawan}
          />
          <TextInput
              placeholder="Masukan Tanggal"
              onChangeText={(tgl) => this.setState({ tgl })}
              value={this.state.tgl}
          />
          <Button
            title="Mulai"
            onPress={() => {
              this.props.navigation.navigate('Mulai2', {
              namatim: this.state.namatim,
              lawan: this.state.lawan,
          });
        }}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
	containerMain: {
    flex: 1
  }
});
