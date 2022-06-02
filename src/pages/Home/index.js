import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';

import Instructions from '../../components/Instructions';

const Home = ( { navigation } ) => (
  <View>
    <Instructions/>
  </View>
)

export default Home;