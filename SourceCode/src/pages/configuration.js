import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';

import Header from '../components/Header';

const Home = ( { navigation } ) => (
  <View style={{ flex: 1 }}>
    <Header/>
  </View>
)

export default Home;