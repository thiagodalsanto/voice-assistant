import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';

import Header from '../../components/Header';
import Instructions from '../../components/Instructions';

const Home = ( { navigation } ) => (
  <View>
    <Header/>
    <Instructions/>
  </View>
)

export default Home;