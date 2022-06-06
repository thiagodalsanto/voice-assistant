import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import CommandsContext from '../../context/CommandContext';

export default ({route, navigation}) => {
  const [commands, setCommands] = useState(route.params ? route.params: {})
  const {dispatch} = useContext(CommandsContext)

  return (
    <View style={style.form}>
      <Text>Command Name</Text>
      <TextInput
        style={style.input}
        onChangeText={command => setCommands({...commands, command})}
        placeholder="Informe o Nome do Comando"
        value={commands.command}
      />

    <Text>App Name</Text>
    <TextInput
      style={style.input}
      onChangeText={name => setCommands({...commands, name})}
      placeholder="Informe o Nome do App"
      value={commands.name}
    />

    <Text>Avatar</Text>
    <TextInput
      style={style.input}
      onChangeText={avatarUrl => setCommands({...commands, avatarUrl})}
      placeholder="Informe o Url do Avatar"
      value={commands.avatarUrl}
    />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: commands.id ? 'updateCommand' : 'createCommand',
            payload: commands,
          })
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1, 
    marginBottom: 10,
  },
  form: {
    padding: 12,
  },
})