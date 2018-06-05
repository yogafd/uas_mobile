import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Mulai2Screen extends React.Component {
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
          score: 0,
          score2: 0,
          status: ''
        };
    }

  render() {
    const { params } = this.props.navigation.state;
    const namatim = params ? params.namatim : null;
    const lawan = params ? params.lawan : null;
    return (
      <View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text>
                      {JSON.stringify(namatim)} { '\n' }
                      score = { this.state.score }
                    </Text>
                            <View style={{ flexDirection: 'row' }}>
                                          <View style={{ margin: 10 }}>
                                            <Button
                                              title="+"
                                              onPress={() => this.setState({
                                              score: (this.state.score + 1)
                                            })}
                                            />
                                          </View>
                                                        <View style={{ margin: 10 }}>
                                                          <Button
                                                            title="-"
                                                            onPress={() => this.setState({
                                                            score: (this.state.score - 1)
                                                          })}
                                                          />
                                                        </View>
                            </View>
                  </View>

                  <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text>
                      {JSON.stringify(lawan)} { '\n' }
                      score = { this.state.score2 }
                    </Text>
                            <View style={{ flexDirection: 'row' }}>
                                          <View style={{ margin: 10 }}>
                                            <Button
                                              title="+"
                                              onPress={() => this.setState({
                                              score2: (this.state.score2 + 1)
                                              })}
                                            />
                                          </View>
                                                        <View style={{ margin: 10 }}>
                                                          <Button
                                                            title="-"
                                                            onPress={() => this.setState({
                                                            score2: (this.state.score2 - 1)
                                                            })}
                                                          />
                                                        </View>
                            </View>
                  </View>

                  <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Button
                      title="Selesai"
                      onPress={() => {
                        this.props.navigation.navigate('Hasil', {
                        score: this.state.score,
                        score2: this.state.score2
                      });
                    }}
                    />
                  </View>
      </View>

    );
  }
}
