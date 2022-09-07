import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
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
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              key={item.Id}
              onPress={() =>
                navigation.navigate("MuscleWorkout", { muscleId: item.Id })
              }
            >
              <View style={styles.listItem}>
                <Image
                 style={styles.image}
                  resizeMode="stretch"
                  source={{ uri: item.imageUrl }}>
                </Image>
                <Text style={styles.title}>{item.Name}</Text>
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
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 4,
    height: 100,
    flexDirection: "row"
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    margin:5
  },
});
