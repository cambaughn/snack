import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import App from './MainTabNavigator';

console.ignoredYellowBox = ['Remote debugger'];

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: App,
});
