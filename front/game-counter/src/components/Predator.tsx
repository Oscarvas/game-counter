import { StyleSheet, Text, Pressable, Alert, Platform } from 'react-native'
import React from 'react'

type PredatorProps = {
    hunter: string,
    prey: string,
    onTransaction: () => void
}
const headline = ' 🎯🎯🎯 a '
const Predator = ({hunter, prey, onTransaction}: PredatorProps) => {

  function validateTransaction(){
    if (Platform.OS === 'web'){
      let accept  = confirm(hunter + headline + prey)
      if (accept) {
        onTransaction()
      }
    }
    else{
      Alert.alert(
        "Confirmar transacción",
        hunter + headline + prey,
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
    
  }
  return (
    <Pressable onPress={validateTransaction} style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.item
      ]}>
      <Text style={styles.text}>{hunter + headline + prey}</Text>
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