import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = ( ) => (
    <View style={styles.container}>
        <Icon name="ios-arrow-back" size={24} style={styles.icon}/>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Home</Text>
        </View>
    </View>
);

export default Header;