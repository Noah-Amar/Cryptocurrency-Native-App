import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { Header } from './src/components';
import Store from './src/Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
      </Provider>
    );
  }
}

