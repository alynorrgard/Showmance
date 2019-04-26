import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './views/Main';
import SelectFirstMood from './views/SelectFirstMood';
import SelectSecondMood from './views/SelectSecondMood';

const MainNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    First: { screen: SelectFirstMood },
    Second: { screen: SelectSecondMood },
  },
  {
    initialRouteName: 'Main',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
