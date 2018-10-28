import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import MainTabNavigator from './MainTabNavigator';

import store from '../redux/store';

console.ignoredYellowBox = ['Remote debugger'];

let SwitchNav = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNav />
      </Provider>
    );
  }
}
