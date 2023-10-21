import { StyleSheet, TextInput, Text, View, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Player } from '../mock/mocktypes'
import uuid from 'react-native-uuid';

type PlayerInputProps = {
    lista: Player[],
    updateList: (lista: Player[]) => void
}
const PlayerInput = ({lista, updateList}:PlayerInputProps) => {
  const [text, setText] = useState('');
  const input = useRef<TextInput>(null);

  function addPlayer(){
    text && updateList([...lista, {nombre: text.trim(), player_uuid: uuid.v4().toString()}])
    setText('')
    input.current?.clear()
    input.current?.focus()
  }

  return (
    <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center" }}>
      <TextInput
        ref={input}
        placeholder="... Pobre alma en desgracia ..."
        placeholderTextColor={'#7f8c8d'}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={styles.input}
        enterKeyHint='done'
        clearButtonMode='while-editing'
        autoFocus={true}
        onSubmitEditing={() => addPlayer()}
        clearTextOnFocus={true}
      />
      {/* <Pressable
        onPress={() => addPlayer()}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          }
        ]}>
          <Text style={styles.text}>➕</Text>
      </Pressable> */}
    </View>
  )
}

export default PlayerInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "80%",
    },text: {
      fontSize: 20,
    },
})