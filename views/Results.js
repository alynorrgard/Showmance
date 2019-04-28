import React from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
const database = firebase.firestore();

export default class SelectSecondMood extends React.Component {
  static navigationOptions = {
    title: 'Showmance',
  };

  state = {
    loading: true,
    error: false,
    results: [],
  };

  componentDidMount = async () => {
    try {
      let results = [];
      const response = await firebase
        .firestore()
        .collection('tvshows')
        .doc()
        .get();
      response.docs.forEach(doc => {
        results.push(doc.data());
      });

      this.setState({ loading: false, results });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  renderResult = ({ name, genre, seasons }) => {
    return (
      <View style={styles.resultView}>
        <Text
          style={{
            color: '#EAEAEB',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          {name}
        </Text>
        <Text style={styles.resultText}>Genre: {genre}</Text>
        <Text style={styles.resultText}>Seasons: {seasons}</Text>
      </View>
    );
  };

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
        <ScrollView style={styles.resultView}>
          {results.map(result => this.renderResult)}
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
    padding: 30,
  },
  resultText: {
    color: '#EAEAEB',
    fontSize: 15,
  },
});
