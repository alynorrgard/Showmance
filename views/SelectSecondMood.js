import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class SelectSecondMood extends React.Component {
  render() {
    const { navigation } = this.props;
    const moods = navigation.getParam('moods', 'N/A');

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        {moods.map(mood => (
          <View key={mood} style={styles.buttonView}>
            <Button
              onPress={() => {
                Alert.alert(`You tapped the ${mood} button!`);
              }}
              title={mood}
              color="black"
            />
          </View>
        ))}
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
