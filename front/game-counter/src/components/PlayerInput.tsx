import { StyleSheet, TextInput, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { Player } from '../mock/mocktypes'
import uuid from 'react-native-uuid';

type PlayerInputProps = {
    lista: Player[],
    updateList: (lista: Player[]) => void
}
const PlayerInput = ({lista, updateList}:PlayerInputProps) => {
  const [text, setText] = useState('');

  function addPlayer(){
    text && updateList([...lista, {nombre: text, player_uuid: uuid.v4().toString()}])

    setText('')
  }

  return (
    <View style={{flexDirection: "row", alignItems:"center" }}>
      <TextInput
        placeholder="Añadir ludópata"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={styles.input}
      />
      <Button title='OK' onPress={() => addPlayer()}  />
    </View>
  )
}

export default PlayerInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%",
    },
})