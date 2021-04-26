import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';

import logo from './assets/logo.png';

import Feed from './pages/Feed';
import New from './pages/New';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
      New,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: () => (
          <Image style={{marginHorizontal: 20}} source={logo} />
        ),
        headerBackTitle: null,
      },
      mode: 'modal',
    },
  ),
);

export default Routes;