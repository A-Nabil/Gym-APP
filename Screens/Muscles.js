import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getMusclesFromApi, getImage } from "../Database/WorkoutsData";

export function MusclesScreen({ navigation }) {
  const [workouts, setVal] = useState([]);

  useEffect(() => {
    const workoutsCall = async () => {
      const data = await getMusclesFromApi();

      setVal(data);
    };
    workoutsCall();
  }, []);

  return (
    <View>
      <View style={styles.list}>
        {workouts && (
          <FlatList
            data={workouts}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                key={item.Id}
                onPress={() =>
                  navigation.navigate("MuscleWorkout", {
                    muscleId: item.Id,
                    muscleName: item.name_en,
                  })
                }
              >
                <View style={styles.listItem}>
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.image}
                    source={{ uri: getImage(item.name_en) }}
                  >
                    <Text style={styles.title}>{item.name_en}</Text>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>
    </View>
  );
}

export function MuscleScreenHeader() {
  [globalThis.isGym, setVal] = useState(true);

  return (
    <View style={{ flexDirection: "row", marginRight: 10 }}>
      <TouchableOpacity
        title="Home"
        style={
          globalThis.isGym
            ? styles.headerInactiveButtons
            : styles.headerActiveButtons
        }
        onPress={() => {
          setVal(false);
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Gym"
        style={
          globalThis.isGym
            ? styles.headerActiveButtons
            : styles.headerInactiveButtons
        }
        onPress={() => {
          setVal(true);
        }}
      >
        <Text>Gym</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexGrow: 1,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    flex: 0.5,
    margin: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 4,
    height: 100,
  },
  image: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  roundButton: {
    margin: 5,
    width: 150,
    height: 80,
    textAlignVertical: "bottom",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f0f5",
    textShadowColor: "black",
    textShadowRadius: 4,
    textAlignVertical: "center",
  },
  headerInactiveButtons: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginStart: 5,
  },
  headerActiveButtons: {
    alignItems: "center",
    backgroundColor: "#3F729B",
    padding: 10,
    marginStart: 5,
  },
});
