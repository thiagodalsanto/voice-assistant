import React, { useContext } from 'react';

import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import CommandsContext from '../../context/CommandContext'

export default props => {

  const  { state, dispatch } = useContext(CommandsContext)

  function confirmCommandDeletion(commands) {
    Alert.alert('Excluir Comando', 'Deseja excluir o comando?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteCommand',
            payload: commands,
          })
        }
      },
      {
        text: 'Não'
      },
    ])
  }

  const getCommandItem = ({ item: commands }) => {
    return (
      <ListItem 
        bottomDivider 
        onPress={() => props.navigation.navigate('Add', commands)}
      >
        <Avatar source={{ uri: commands.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{ commands.command }</ListItem.Title>
          <ListItem.Subtitle>{ commands.name }</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          name="edit"
          size={24}
          color="lightblue"
          onPress={() => props.navigation.navigate('Add', commands)}
        />
        <ListItem.Chevron
          name="delete"
          size={24}
          color="lightblue"
          onPress={() => confirmCommandDeletion(commands)}
        />
      </ListItem>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={commands => commands.id.toString()}
        data={state.commands}
        renderItem={getCommandItem}
      />
    </View>
  )
}