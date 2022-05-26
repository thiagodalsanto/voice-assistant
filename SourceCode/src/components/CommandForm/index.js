import React from 'react';
import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const CommandForm = ( ) => (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Criar Comando</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={Text} placeholder="Comando" />
                <TextInput style={styles.input} value={Text} placeholder="Aplicativo" />
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.viewButton} >
                        <Text style={styles.textButton}>Criar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default CommandForm;