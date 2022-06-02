import React from 'react';

import { View, Text, Switch } from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

const ThemePicker = ( ) => (
    <View style={styles.container}>
        <Text style={styles.text}>Clique para alterar entre Tema Dark/Light</Text>
        <Switch
            trackColor={{ true: colors.black, false: colors.white }}
            thumbColor={ colors.darkerBlue }
        />
    </View>
);

export default ThemePicker;