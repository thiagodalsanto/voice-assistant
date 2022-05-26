import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const Instructions = ( ) => (
    <View style={styles.container}>
        <Text style={styles.title}>Como utilizar o App</Text>
        <View style={styles.textContainer}>
            <Text style={styles.text}>1. Crie um botão clicando no botão Azul na barra inferior</Text>
            <Text style={styles.text}>2. Escolha o App a ser aberto</Text>
            <Text style={styles.text}>3. Escolha a chamada escolhida para abrir o App</Text>
            <Text style={styles.text}>4. O App será aberto :D</Text>
        </View>
    </View>
);

export default Instructions;