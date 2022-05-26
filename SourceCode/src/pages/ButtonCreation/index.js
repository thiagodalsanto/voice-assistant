import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Header from '../../components/Header';
import CommandForm from '../../components/CommandForm';
import styles from './styles';

const ButtonCreation = ( { navigation } ) => (
  <View>
    <Header/>
    <CommandForm/>
  </View>
)

export default ButtonCreation;