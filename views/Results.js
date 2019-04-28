import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class Results extends React.Component {
  state = {
    loading: true,
    error: false,
    results: [],
  };

  static navigationOptions = {
    title: 'Showmance',
  };

  async componentDidMount() {
    try {
      let results = [];
      let response = await firebase
        .firestore()
        .collection('tvshows')
        .get();
      response.docs.forEach(doc => {
        results.push(doc.data());
      });
      console.log('RESULTS:', results);

      this.setState({ loading: false, results });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  renderResult = result => {
    return (
      <View key={result.name} style={styles.resultView}>
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
  };

  render() {
    const { navigation } = this.props;
    const mood1 = navigation.getParam('mood1', 'N/A');
    const mood2 = navigation.getParam('mood2', 'N/A');
    const { results, loading, error } = this.state;

    if (loading) {
      console.log('LOADING???');
      return (
        <View style={styles.mainView}>
          <Text style={styles.mainText}>Fetching results...</Text>
          <ActivityIndicator animating={true} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.mainView}>
          <Text style={styles.mainText}>Failed to load results!</Text>
        </View>
      );
    }

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          Here are some popular shows that might suit your mood!
        </Text>
        <ScrollView>
          {results.map(result => this.renderResult(result))}
        </ScrollView>
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
    padding: 20,
    margin: 5,
  },
  resultText: {
    color: '#EAEAEB',
    fontSize: 15,
  },
});
