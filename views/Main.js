import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SelectFirstMood from './SelectFirstMood';

export default class Main extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Showmance</Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() => navigate('First')}
            title="CHOOSE YOUR MOOD"
            color="black"
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
    color: 'fuchsia',
    fontWeight: 'bold',
    fontSize: 50,
  },
  buttonView: {
    backgroundColor: 'fuchsia',
    borderRadius: 30,
    padding: 10,
  },
});
