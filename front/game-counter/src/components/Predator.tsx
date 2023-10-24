import { StyleSheet, Text, Pressable, Alert } from 'react-native'
import React from 'react'

type PredatorProps = {
    hunter: string | undefined,
    prey: string | undefined,
    onTransaction: () => void
}

const Predator = ({hunter, prey, onTransaction}: PredatorProps) => {

  function validateTransaction(){
    Alert.alert(
      "Confirmar transacción",
      hunter + ' 🎯🎯🎯 a ' + prey,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirmar", onPress: () => onTransaction() }
      ]
    );
    
  }
  return (
    <Pressable onPress={validateTransaction} style={({pressed}) => [
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