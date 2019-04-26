import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './views/Main';
import SelectFirstMood from './views/SelectFirstMood';

const MainNavigator = createStackNavigator({
  Main: { screen: Main },
  First: { screen: SelectFirstMood },
});

const App = createAppContainer(MainNavigator);

export default App;
