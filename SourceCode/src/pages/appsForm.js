import React, { Component, useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppForm({ navigation }) {

  const [commandName, setCommandName] = useState(''); 
  const [appSelected, setAppSelected] = useState('');
  
  function handleCommandNameChange(commandName){ setCommandName(commandName); } 
  function handleAppSelected(setAppSelected){ setApp(setAppSelected); }
  async function handleButtonPress(){ 
    const listItem = {id: new Date().getTime(), commandName, appSelected: appSelected};
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');
    
    if(response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
   
    await AsyncStorage.setItem('items', JSON.stringify(savedItems));
    navigation.navigate("appList", listItem);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Comando</Text>
      <View style={styles.inputContainer}> 
        
        <TextInput 
          style={styles.input} 
          onChangeText={handleCommandNameChange}
          placeholder="Nome do Comando"
          clearButtonMode="always" /> 
        <TextInput 
          style={styles.input}  
          onChangeText={handleAppSelected}
          placeholder="Aplicativo" 
          clearButtonMode="always" /> 

        <TouchableOpacity style={styles.button} onChangeText={handleButtonPress}> 
          <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity> 
        
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A70AD',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '92%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#174166',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});