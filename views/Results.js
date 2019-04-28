import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { tags } from '../server/db/tags';

export default class SelectSecondMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  render() {
    const { navigation } = this.props;
    const mood1 = navigation.getParam('mood1', 'N/A');
    const mood2 = navigation.getParam('mood2', 'N/A');
    const result = {
      name: 'Breaking Bad',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      genre: 'Drama',
      seasons: 5,
      viewingMethod: ['Netflix', 'Amazon Prime'],
    };

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          Here are some popular shows that would suit your mood!
        </Text>
        <View style={styles.resultView}>
          <Text
            style={{
              color: '#EAEAEB',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            {result.name}
          </Text>
          <Text style={styles.resultText}>
            Where to watch: {result.viewingMethod[1]}
          </Text>
          <Text style={styles.resultText}>Moods: {`${mood1}, ${mood2}`}</Text>
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
  resultView: {
    backgroundColor: '#A2A3A1',
    borderRadius: 20,
    padding: 30,
    // margin: 5,
  },
  resultText: {
    color: '#EAEAEB',
    fontSize: 15,
  },
});
