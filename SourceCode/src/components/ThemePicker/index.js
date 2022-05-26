import React from 'react';

import { View, Text, Switch } from 'react-native';

import styles from './styles';

const ThemePicker = ( ) => (
    <View style={styles.container}>
        <Text style={styles.text}>Clique para alterar entre Tema Dark/Light</Text>
        <Switch
            trackColor={{ false: "#174166", true: "#174166" }}
            thumbColor={"#2A70AD"}
        />
    </View>
);

export default ThemePicker;