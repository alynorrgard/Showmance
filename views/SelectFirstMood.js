import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class SelectFirstMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() =>
              navigate('Second', { moods: ['motivational', 'funny'] })
            }
            title="happy"
            color="#EAEAEB"
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() =>
              navigate('Second', { moods: ['documentary', 'romance'] })
            }
            title="sad"
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
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: '#A2A3A1',
    borderRadius: 30,
    padding: 10,
    margin: 5,
  },
});
