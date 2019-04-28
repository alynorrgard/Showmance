import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './views/Main';
import SelectFirstMood from './views/SelectFirstMood';
import SelectSecondMood from './views/SelectSecondMood';
import defaultProject from './server/firebase';

const MainNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    First: { screen: SelectFirstMood },
    Second: { screen: SelectSecondMood },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#141417',
      },
      headerTintColor: '#D100AE',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
  }
);

const App = createAppContainer(MainNavigator);

export default App;
