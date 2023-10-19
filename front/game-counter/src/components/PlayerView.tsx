import { StyleSheet, Text, Pressable, I18nManager, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import React from 'react'

type PlayerViewProps = {
    name: string,
    id: string,
    onPress: () => void,
    selection?: string[]
}

const PlayerView = ({name, id, onPress, selection}: PlayerViewProps) => {

  const backgroundColor = !selection?.includes(id) ? '#95a5a6' : selection?.at(0) ===  id ? '#2ecc71' : '#e74c3c';
  const textColor = !selection?.includes(id) ? '#7f8c8d' : 'white';
  
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#dd2c00',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 15,
          marginVertical: 8,
          // width: "80%",
          marginHorizontal: 16,
          borderRadius: 10,
        }}
        onPress={() => console.log('Borrar: '+ name + ' ' + id )}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            // paddingHorizontal: 30,
            // paddingVertical: 10,
          }}
        >
          Borrar
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
    friction={2}
    // rightThreshold={21}
    renderRightActions={renderRightActions}
    // onSwipeableWillOpen={(direction: 'left' | 'right') => console.log('onSwipeableWillOpen', direction)}
    >
      <Pressable onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{name}</Text>
        {/* render next text component if it's in selection  */}
        {selection?.includes(id) && <Text style={styles.subtitle} >
          {selection?.at(0) ===  id ? '🤑🤑🤑' : '🤬🤬🤬'}
          </Text>}
      </Pressable>
    </Swipeable>
  )
}

export default PlayerView

const styles = StyleSheet.create({
    item: {
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
    },
    subtitle: {
      fontSize: 26,
    },
    rightAction: {
      alignItems: 'center',
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      backgroundColor: '#dd2c00',
      flex: 1,
      justifyContent: 'flex-end'
    }
})