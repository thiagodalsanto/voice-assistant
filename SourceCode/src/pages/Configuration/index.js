import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';

import Header from '../../components/Header';
import ThemePicker from '../../components/ThemePicker';
import VoiceTest from '../../components/VoiceTest';
import LanguagePicker from '../../components/LanguagePicker';

const Home = ( { navigation } ) => (
  <View style={{ flex: 1 }}>
    <Header/>
    <ThemePicker/>
    <VoiceTest/>
    <LanguagePicker/>
  </View>
)

export default Home;