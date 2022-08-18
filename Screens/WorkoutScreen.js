import React, { useEffect, useState } from 'react';
import { View, ScrollView,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import {getWorkoutsNames} from '../Database/WorkoutsData'


export function WorkOutsScreen()  {

  const [workouts, setVal] = useState([]);



  useEffect(() => {
    const workoutsCall = async () => {
      const  data  = await getWorkoutsNames();
      setVal(data);
    }

   workoutsCall();

  }, []);

  return (
      <View >
              <ScrollView horizontal>
   { 
    workouts.map((workoutName, index) => 
    <TouchableOpacity key={index}  style={styles.roundButton}>
      <ImageBackground
            source={require("../assets/workouts.jpg")}
            style={{
              height: "100%",
              width: "100%",
            } }
            imageStyle={{ borderRadius: 100}}
          >
          </ImageBackground></TouchableOpacity>
      
      )}
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
    roundButton: {
      margin: 10,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'gray',
    },
  });