import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { themeTags } from '../server/db/tags';

export default class SelectSecondMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  // filterUsedTags(arr, used) {
  //   arr.filter(tag => used.includes(tag));
  //   return arr;
  // }

  getRandomThemeTags(arr) {
    let randomArr = [];
    for (let i = 0; i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      randomArr.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    return randomArr;
  }

  render() {
    const { navigation } = this.props;
    // const usedTags = navigation.getParam('usedTags', 'N/A');
    const mood1 = navigation.getParam('mood1', 'N/A');
    // const leftoverTags = this.filterUsedTags(tags, usedTags);
    const randomThemeTags = this.getRandomThemeTags(themeTags);

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        <View style={styles.buttonGroup}>
          {randomThemeTags.map(tag => (
            <View key={tag} style={styles.buttonView}>
              <Button
                onPress={() =>
                  navigation.navigate('Results', { mood1: mood1, mood2: tag })
                }
                title={tag}
                color="#EAEAEB"
              />
            </View>
          ))}
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
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonView: {
    backgroundColor: '#A2A3A1',
    borderRadius: 30,
    padding: 10,
    margin: 5,
  },
});
