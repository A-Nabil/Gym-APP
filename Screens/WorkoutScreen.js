import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  StyleSheet,
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
      <View style={styles.list}>
        {workouts && (
          <FlatList
            data={workouts}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                key={item.id}
                onPress={() => showItemDetails("button" + item.id)}
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
});
