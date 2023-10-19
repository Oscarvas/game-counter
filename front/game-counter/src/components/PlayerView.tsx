import { StyleSheet, Text, Pressable, Alert } from 'react-native'
import React from 'react'

type PlayerViewProps = {
    name: string,
    id: string,
    onPress: () => void,
    selection?: string[]
}

const PlayerView = ({name, id, onPress, selection}: PlayerViewProps) => {

  const backgroundColor = !selection?.includes(id) ? '#95a5a6' : selection?.at(0) ===  id ? '#2ecc71' : '#e74c3c';
  const textColor = !selection?.includes(id) ? '#7f8c8d' : 'white';

  return (
    <Pressable onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{name}</Text>
      {/* render next text component if it's in selection  */}
      {selection?.includes(id) && <Text style={styles.subtitle} >
        {selection?.at(0) ===  id ? '🤑🤑🤑' : '🤬🤬🤬'}
        </Text>}
    </Pressable>
  )
}

export default PlayerView

const styles = StyleSheet.create({
    item: {
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
    },
    subtitle: {
      fontSize: 26,
    }
})