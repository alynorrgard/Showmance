import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { tags } from '../server/db/tags';

export default class SelectSecondMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  filterUsedTags(arr, used) {
    arr.filter(tag => used.includes(tag));
    return arr;
  }

  getMoreRandomTags(arr) {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      randomArr.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    return randomArr;
  }

  render() {
    const { navigation } = this.props;
    const usedTags = navigation.getParam('usedTags', 'N/A');
    const leftoverTags = this.filterUsedTags(tags, usedTags);
    const moreRandomTags = this.getMoreRandomTags(leftoverTags);

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          What kinds of TV shows are you in the mood to watch?
        </Text>
        <View style={styles.buttonGroup}>
          {moreRandomTags.map(tag => (
            <View key={tag} style={styles.buttonView}>
              <Button
                onPress={() => {
                  Alert.alert(`You tapped the ${tag} button!`);
                }}
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
