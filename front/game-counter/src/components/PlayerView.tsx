import { StyleSheet, Text, Pressable, I18nManager } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import React from 'react'

type PlayerViewProps = {
    name: string,
    id: string,
    onPress: () => void,
    onDelete: (player_uuid: string) => void,
    selection?: string[]
}

const PlayerView = ({name, id, onPress, selection, onDelete}: PlayerViewProps) => {

  const backgroundColor = !selection?.includes(id) ? '#95a5a6' : selection?.at(0) ===  id ? '#2ecc71' : '#e74c3c';
  const textColor = !selection?.includes(id) ? '#7f8c8d' : 'white';
  
  const renderRightActions = () => {
    return (
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          }
          ,
          styles.deleteButton
        ]}
        onPress={() => onDelete(id)}
      >
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontSize: 20,
          }}
        >
          Borrar
        </Text>
      </Pressable>
    );
  };

  return (
    <Swipeable
      friction={2}
      // rightThreshold={21}
      // active renderRightActions if it's not in selection
      renderRightActions={selection?.includes(id) ? undefined : renderRightActions}
      enabled={!selection?.includes(id)}
      containerStyle={styles.container}
    >
      <Pressable onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{name}</Text>
        {/* render next text component if it's in selection  */}
        {selection?.includes(id) &&
          <Text style={styles.title} >
            {selection?.at(0) === id ? '🤑' : '🤬'}
          </Text>
        }
      </Pressable>
      
    </Swipeable>
  )
}

export default PlayerView

const styles = StyleSheet.create({
    container: {
      width: '50%',
    },
    item: {
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 26,
    },
    rightAction: {
      alignItems: 'center',
      // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      backgroundColor: '#dd2c00',
      flex: 1,
      justifyContent: 'flex-end'
    },
    deleteButton: {
      backgroundColor: '#dd2c00',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 15,
      marginVertical: 8,
      // width: "80%",
      marginHorizontal: 16,
      borderRadius: 10,
    },
})