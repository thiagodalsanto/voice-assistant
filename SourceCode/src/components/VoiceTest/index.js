import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const VoiceTest = ( ) => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.recordButton} >
                <View>
                    <Icon name="radio" size={24} style={styles.icon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>Oque você falar irá aparecer abaixo:</Text>
        </View>
        <Text style={styles.text}></Text>
    </View>
);

export default VoiceTest;