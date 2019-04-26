import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SelectFirstMood extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() => navigate('Second', { moods: ['chill', 'funny'] })}
            title="happy"
            color="black"
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() =>
              navigate('Second', { moods: ['documentary', 'romance'] })
            }
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
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: 'fuchsia',
    borderRadius: 30,
    padding: 10,
    margin: 5,
  },
});
