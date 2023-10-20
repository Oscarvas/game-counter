import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

type PredatorProps = {
    hunter: string | undefined,
    prey: string | undefined
}

const Predator = ({hunter, prey}: PredatorProps) => {
  return (
    <Pressable onPress={() => console.log('la depredació')} style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.item
      ]}>
      <Text style={styles.text}>{hunter + ' 🎯🎯🎯 a ' + prey}</Text>
    </Pressable>
  )
}

export default Predator

const styles = StyleSheet.create({
    item: {
        flex: 1,
        // padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        maxHeight: 70,
        // minHeight: 50,
        justifyContent: 'center',
      },
      text: {
        fontSize: 30,
        color: '#fff',
      }
})