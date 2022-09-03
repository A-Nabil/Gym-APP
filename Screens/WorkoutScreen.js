import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import {
  getImageUrl,
  getWorkoutsFromApi,
  getImage,
} from "../Database/WorkoutsData";

export function WorkOutsScreen() {
  const [workouts, setVal] = useState([]);

  useEffect(() => {
    const workoutsCall = async () => {
      const data = await getWorkoutsFromApi();

      setVal(data);
    };

    workoutsCall();
  }, []);

  return (
    <View>
      <ScrollView horizontal>
        {workouts.map((workout, index) => {
          return (
            <TouchableOpacity key={index} style={styles.roundButton}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#f0f0f5",
                  textShadowColor: "black",
                  textShadowRadius: 10,
                }}
              >
                {workout.name_en}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  roundButton: {
    margin: 5,
    width: 150,
    height: 80,
    textAlignVertical: "bottom",
  },
});
