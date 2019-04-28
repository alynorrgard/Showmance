import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class SingleResult extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  render() {
    const result = this.props.result;
    const image = { uri: result.imageUrl };

    return (
      <View key={result.name} style={styles.resultView}>
        <Image source={image} style={{ width: 100, height: 50 }} />
        <Text
          style={{
            color: '#EAEAEB',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          {result.name}
        </Text>
        <Text style={styles.resultText}>Genre: {result.genre}</Text>
        <Text style={styles.resultText}>Seasons: {result.seasons}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultView: {
    backgroundColor: '#A2A3A1',
    borderRadius: 20,
    padding: 20,
    margin: 5,
  },
  resultText: {
    color: '#EAEAEB',
    fontSize: 15,
  },
});
