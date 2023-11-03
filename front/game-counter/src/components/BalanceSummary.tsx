import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { GameData, Transaction } from '../mock/mocktypes'
import { calculateDebts } from '../utils/debts'
import { BarChart } from 'react-native-chart-kit'
import { getChartData } from '../utils/utils'

type BalanceSummaryProps = {
  data: Transaction[]
  gameStatus: GameData
}
const screenWidth = Dimensions.get("window").width ;

const BalanceSummary = ({ data, gameStatus }: BalanceSummaryProps) => {
  
  const chartConfig = {
    backgroundGradientFrom: '#ecf0f1',
    backgroundGradientTo: 'white',
    // barPercentage: 1.3,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
  
    style: {
      borderRadius: 16,
      fontFamily: 'Bogle-Regular',
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#efefef',
      strokeDasharray: '0',
    },
    propsForLabels: {
      fontFamily: 'Bogle-Regular',
    },

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Resumen de pagos</Text>
      
        <View>
          <BarChart
            style={styles.graphStyle}
            data={getChartData(gameStatus)}
            width={screenWidth}
            height={200}
            yAxisLabel=""
            yAxisSuffix='€'
            chartConfig={chartConfig}
            showValuesOnTopOfBars={true}
            withInnerLines={false}
            withHorizontalLabels={false}
          />
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.lista}
            data={calculateDebts(gameStatus)}
            renderItem={({item}) => <Text style={{fontSize:20}}>{item}</Text>}
          />
        </View>
      <Text style={styles.header} >Historial de transacciones</Text>
      <View>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.lista}
          data={data}
          renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item.prey} paga a {item.hunter}</Text>}
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
  graphStyle: {
    // margin: 15,
    // width: '90%',
    borderRadius: 16,
    // backgroundColor: '#ecf0f1'
  },
  lista: {
    margin: 10,
    // backgroundColor: '#fff',
    alignItems: 'center',

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})