import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GameData, Transaction } from '../mock/mocktypes'
import { calculateDebts } from '../utils/debts'

type BalanceSummaryProps = {
  data : Transaction[]
  gameStatus: GameData   
}

const BalanceSummary = ({data, gameStatus}: BalanceSummaryProps) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.header} >Resumen de pagos</Text>
      {gameStatus.size > 0 && 
      <View>
        <FlatList
          contentContainerStyle={styles.lista}
          data={calculateDebts(gameStatus)}
          renderItem={({item}) => <Text style={{fontSize:20}}>{item}</Text>}
        />
      </View>}
      <Text style={styles.header} >Historial de transacciones</Text>
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

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})