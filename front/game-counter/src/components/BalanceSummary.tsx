import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GameData, Transaction } from '../mock/mocktypes'

type BalanceSummaryProps = {
  data : Transaction[]
  gameStatus: GameData   
}

const BalanceSummary = ({data, gameStatus}: BalanceSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text>Resumen de pago -- Cuentas cerradas</Text>
      <Text>Historial de transacciones</Text>
      <View>
        <FlatList
          contentContainerStyle={styles.lista}
          data={data}
          renderItem={({item}) => <Text style={{fontSize:20}}>{item.prey} paga a {item.hunter}</Text>}
        />
      </View>
    </View>
  )
}

export default BalanceSummary

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lista:{
    backgroundColor: '#fff',
    alignItems: 'center',

  }
})