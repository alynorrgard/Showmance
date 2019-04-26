import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default class SelectSecondMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
    headerStyle: {
      backgroundColor: '#141417',
    },
    headerTintColor: '#D100AE',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

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
              color="#EAEAEB"
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
