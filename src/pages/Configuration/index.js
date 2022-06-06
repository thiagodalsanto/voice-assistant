import React, { Component } from 'react';

import { View, Button } from 'react-native';

import ThemePicker from '../../components/ThemePicker';
import VoiceTest from '../../components/VoiceTest';
import LanguagePicker from '../../components/LanguagePicker';

import styles from './styles';

const Home = ( { navigation } ) => (
  <View>
    <ThemePicker/>
    <VoiceTest/>
    <LanguagePicker/>
    <View style={styles.container}/>
  </View>
)

export default Home;