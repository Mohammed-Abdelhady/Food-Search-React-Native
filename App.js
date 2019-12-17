import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScren from './src/screens/ResultShowScreen';
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    resultShow: ResultShowScren
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food Search'
    }
  }
);

export default createAppContainer(navigator);
