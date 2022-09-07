import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { getMuscleWorkoutsFromApi } from "../Database/WorkoutsData";

class MuscleWorkoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.muscleId = props.route.params.muscleId;
    this.state = { data: [] };
  }

  async componentDidMount() {
    this.workOuts = await getMuscleWorkoutsFromApi(this.muscleId);
    this.setState({ data: this.workOuts });
  }

  render() {
    return (
      <View>
     { this.state.data &&
        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              key={item.Id}
              onPress={() =>
                navigation.navigate("MuscleWorkout", { muscleId: item.Id })
              }
            >
              <View style={styles.listItem}>
                <ImageBackground
                  resizeMode="cover"
                  source={{ uri: item.imageUrl }}>
                  <Text style={styles.title}>{item.Name}</Text>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
        }
      </View>
    );
  }
}

export default MuscleWorkoutScreen;

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexGrow: 1,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
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
