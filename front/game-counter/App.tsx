// import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, StyleSheet, SafeAreaView, View } from 'react-native';
import { DATA } from './src/mock/mockdata';
import { Player } from './src/mock/mocktypes';
import PlayerView from './src/components/PlayerView';
import React, { useState } from 'react';
import BalanceSummary from './src/components/BalanceSummary';
import PlayerInput from './src/components/PlayerInput';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [selectedId, setSelectedId] = useState<string[]>([])
  const [players, setPlayers] = useState<Player[]>([])

  function updateSelectedId(id: string) {

    if (selectedId?.includes(id)){
      setSelectedId(selectedId.filter((item) => item !== id))
    }
    else{
      selectedId?.length < 2 && setSelectedId([...selectedId, id])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PlayerInput lista={players} updateList={setPlayers} />

        <FlatList
          data={players}
          // style={{flex:1}}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }: ListRenderItemInfo<Player>) =>
            <PlayerView
              name={item.nombre}
              id={item.player_uuid}
              onPress={() => updateSelectedId(item.player_uuid)}
              selection={selectedId}/>
            } />
            {/* <BalanceSummary/> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
});
