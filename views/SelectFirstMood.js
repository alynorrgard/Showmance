import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class SelectFirstMood extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>TEST VIEW</Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the happy button!');
            }}
            title="happy"
            color="black"
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the sad button!');
            }}
            title="sad"
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
    margin: 5,
  },
});
