import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

import styles from './styles';

class LanguagePicker extends Component {
    render() {
      let data = [{
        value: 'Portuguese',
      }, {
        value: 'English',
      }, {
        value: 'Spanish',
      }];
  
      return (
        <Dropdown
          label='Pick a Language'
          data={data}
          itemPadding='5'
          itemColor='#174166'
          baseColor='#eee'
        />
      );
    }
  }

export default LanguagePicker;