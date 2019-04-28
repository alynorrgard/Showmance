import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { tags } from '../server/db/tags';

export default class SelectFirstMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  getRandomTags(arr) {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      randomArr.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    return randomArr;
  }

  render() {
    const { navigate } = this.props.navigation;
    const randomTags = this.getRandomTags(tags);

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        <View style={styles.buttonGroup}>
          {randomTags.map(tag => (
            <View key={tag} style={styles.buttonView}>
              <Button
                onPress={() =>
                  navigate('Second', { usedTags: randomTags, mood1: tag })
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
