import React from 'react';
import { View, StatusBar, Text, Button, StyleSheet } from 'react-native';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.mainText}>Showmance</Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() => navigate('First')}
            title="CHOOSE YOUR MOOD"
            color="#EAEAEB"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    padding: 20,
    color: '#D100AE',
    fontWeight: 'bold',
    fontSize: 50,
  },
  buttonView: {
    backgroundColor: '#A2A3A1',
    borderRadius: 30,
    padding: 10,
  },
});
