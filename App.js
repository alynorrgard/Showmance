import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Showmance</Text>
        <View style={styles.buttonView}>
          <Button
            style={styles.buttonText}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="CHOOSE YOUR MOOD"
            color="black"
            titleProps={styles.buttonText}
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
  buttonText: {
    color: 'black',
  },
});
