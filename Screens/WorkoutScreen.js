import { View, Text,ScrollView,StyleSheet, TouchableOpacity } from 'react-native';


export function WorkOutsScreen()  {
    return (
      <View >

        <ScrollView horizontal>
<TouchableOpacity  style={styles.roundButton1}></TouchableOpacity>
<TouchableOpacity  style={styles.roundButton1}></TouchableOpacity>
<TouchableOpacity  style={styles.roundButton1}></TouchableOpacity>
<TouchableOpacity  style={styles.roundButton1}></TouchableOpacity>
<TouchableOpacity  style={styles.roundButton1}></TouchableOpacity>

</ScrollView>
      </View>
    );
  }

  // Styles
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundButton1: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'blue',
      margin: 10
    },
  });