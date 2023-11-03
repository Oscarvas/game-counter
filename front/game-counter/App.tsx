// import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { GameData, GameSummary, Player, Transaction } from './src/mock/mocktypes';
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
  const [game, setGame] = useState<GameData>(new Map())

  function updateSelectedId(id: string) {

    if (selectedId?.includes(id)) {
      setSelectedId(selectedId.filter((item) => item !== id))
    }
    else {
      selectedId?.length < 2 && setSelectedId([...selectedId, id])
    }
  }

  function updateGame(hunter: string, prey: string) {
    let newGame: GameData = new Map(game) // copy existing game

    if (!newGame.get(prey)) { // first time hunted, generates debt
      newGame.set(prey, { saldo_total: -1, deudores: new Map<string, number>() })
    } else { // prey already exists
      newGame.get(prey)!.saldo_total -= 1
    }

    if (!newGame.get(hunter)) { // first time hunting
      let summary: GameSummary = {
        saldo_total: 1, // 1 because hunter hunted prey
        deudores: new Map<string, number>().set(prey, 1)
      }
      newGame.set(hunter, summary)
    }
    else { // hunter already exists
      newGame.get(hunter)!.saldo_total += 1

      let deuda_acumulada = newGame.get(prey)?.deudores.get(hunter) // me obtengo de la lista de deudores de prey

      if (deuda_acumulada) { // opposite transaction exists. Prey hunted hunter before and got advantage
        deuda_acumulada === 1 ?
          newGame.get(prey)!.deudores.delete(hunter) : // even transaction, delete from list
          newGame.get(prey)!.deudores.set(hunter, newGame.get(prey)!.deudores.get(hunter)! - 1)

      }
      else { // hunter hunted before but not this prey

        !newGame.get(hunter)!.deudores.get(prey) ? // first time hunting this prey
          newGame.get(hunter)!.deudores.set(prey, 1) : // hunted this prey before
          newGame.get(hunter)!.deudores.set(prey, newGame.get(hunter)!.deudores.get(prey)! + 1)
      }
    }
    setGame(newGame) // update game
  }

  function newTransaction() {

    const hunter = players.find((item) => item.player_uuid === selectedId.at(0))!.nombre
    const prey = players.find((item) => item.player_uuid === selectedId.at(1))!.nombre
    setTransaction([...transactions, { hunter: hunter, prey: prey }])
    setSelectedId([])

    updateGame(hunter, prey)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <PlayerInput lista={players} updateList={setPlayers} /> */}
      <ScrollView>

        <GestureHandlerRootView>
          <FlatList
            scrollEnabled={false}
            ListHeaderComponent={() => <PlayerInput lista={players} updateList={setPlayers} />}
            data={players}
            style={{ backgroundColor: '#ecf0f1', flexGrow: 0 }}
            // ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item.player_uuid}
            renderItem={({ item }: ListRenderItemInfo<Player>) =>
              <PlayerView
                name={item.nombre}
                id={item.player_uuid}
                onPress={() => updateSelectedId(item.player_uuid)}
                onDelete={(id: string) => setPlayers(players.filter((item) => item.player_uuid !== id))}
                selection={selectedId} />
            } />
        </GestureHandlerRootView>
        {selectedId.length === 2 &&
          <Predator
            hunter={players.find((item) => item.player_uuid === selectedId.at(0))!.nombre}
            prey={players.find((item) => item.player_uuid === selectedId.at(1))!.nombre}
            onTransaction={newTransaction}
          />
        }

        <BalanceSummary data={transactions} gameStatus={game} />
      </ScrollView>


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
