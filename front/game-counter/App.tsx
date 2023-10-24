// import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, StyleSheet, SafeAreaView, View } from 'react-native';
import { GameData, Player, Transaction } from './src/mock/mocktypes';
import PlayerView from './src/components/PlayerView';
import React, { useState } from 'react';
import BalanceSummary from './src/components/BalanceSummary';
import PlayerInput from './src/components/PlayerInput';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Predator from './src/components/Predator';


export default function App() {
  const [selectedId, setSelectedId] = useState<string[]>([])
  const [players, setPlayers] = useState<Player[]>([])
  const [transactions, setTransaction] = useState<Transaction[]>([])
  const [game, setGame] = useState<GameData>()

  function updateSelectedId(id: string) {

    if (selectedId?.includes(id)){
      setSelectedId(selectedId.filter((item) => item !== id))
    }
    else{
      selectedId?.length < 2 && setSelectedId([...selectedId, id])
    }
  }

  function updateGame(hunter: string, prey: string){
    if (game){
      const newGame : Map<string, Map<string, number>> = new Map(game)

      if (!newGame.get(hunter)){ // first time hunting
        newGame.set(hunter, new Map<string, number>().set(prey, 1))
      }

      else{
        if (!newGame.get(hunter)!.get(prey)){ // first time hunting this prey
          newGame.get(hunter)!.set(prey, 1)
        }
        else{
          newGame.get(hunter)!.set(prey, newGame.get(hunter)!.get(prey)! + 1)
        }
      }
      setGame(newGame)
    }

    else{ // first time playing
      const newGame: GameData = new Map<string, Map<string, number>>();
      newGame.set(hunter, new Map<string, number>().set(prey, 1))
      setGame(newGame)
    }
  }

  function newTransaction(){

    const hunter = players.find((item) => item.player_uuid === selectedId.at(0))!.nombre 
    const prey = players.find((item) => item.player_uuid === selectedId.at(1))!.nombre
    setTransaction([...transactions, {hunter: hunter, prey: prey}])
    setSelectedId([])

    updateGame(hunter, prey)
  }

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PlayerInput lista={players} updateList={setPlayers} />

        <FlatList
          data={players}
          style={{backgroundColor: '#ecf0f1', flexGrow: 0}}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.player_uuid}
          renderItem={({ item }: ListRenderItemInfo<Player>) =>
            <PlayerView
              name={item.nombre}
              id={item.player_uuid}
              onPress={() => updateSelectedId(item.player_uuid)}
              onDelete={(id: string) => setPlayers(players.filter((item) => item.player_uuid !== id))}
              selection={selectedId}/>
            } />
            {selectedId.length === 2 && 
              <Predator 
                hunter={players.find((item) => item.player_uuid === selectedId.at(0))!.nombre } 
                prey={players.find((item) => item.player_uuid === selectedId.at(1))!.nombre } 
                onTransaction={newTransaction}
                />}

              <BalanceSummary data={transactions}/>
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
