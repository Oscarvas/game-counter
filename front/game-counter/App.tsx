// import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, StyleSheet, SafeAreaView } from 'react-native';
import { DATA } from './src/mock/mockdata';
import { Player } from './src/mock/mocktypes';
import PlayerView from './src/components/PlayerView';
import React, { useState } from 'react';

export default function App() {
  const [selectedId, setSelectedId] = useState<string[]>([])

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

      <FlatList
        data={DATA}
        // ItemSeparatorComponent={() => <View style={{marginVertical:10}}/>}
        renderItem={({ item }: ListRenderItemInfo<Player>) =>
          <PlayerView
            name={item.nombre}
            id={item.uuid}
            onPress={() => updateSelectedId(item.uuid)}
            selection={selectedId}/>
          } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
