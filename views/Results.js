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
import SingleResult from './SingleResult';

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

  render() {
    const { navigation } = this.props;
    const mood1 = navigation.getParam('mood1', 'N/A');
    const mood2 = navigation.getParam('mood2', 'N/A');
    const { results, loading, error } = this.state;

    if (loading) {
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
          {results.map(result => (
            <SingleResult key={result.name} result={result} />
          ))}
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
});
