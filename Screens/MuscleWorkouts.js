import React from "react";

import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { getMuscleWorkoutsFromApi } from "../Database/WorkoutsData";
import DifficultyLevel from "../Components/DifficultyLevel";

class MuscleWorkoutScreen extends React.Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      headerTitle: props.route.params.muscleName + " workouts",
    });
    this.muscleId = props.route.params.muscleId;
    this.navigation = props.navigation;
    this.state = { data: [] };
  }

  async componentDidMount() {
    this.workOuts = await getMuscleWorkoutsFromApi(this.muscleId);

    this.setState({ data: this.workOuts });
  }

  render() {
    return (
      <View>
        {this.state.data && (
          <FlatList
            data={this.state.data}
            numColumns={1}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                key={item.Id}
                onPress={() =>
                  this.navigation.navigate("Workout", { workOut: item })
                }
              >
                <View style={styles.listItem}>
                  <Image
                    style={styles.image}
                    resizeMode="stretch"
                    source={{ uri: item.imageUrl }}
                  ></Image>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.title}>{item.Name}</Text>
                    <View
                      style={{
                        flex: 1,
                        width: "12%",
                        height: "20%",
                        alignSelf: "flex-end",
                        padding: 5,
                      }}
                    >
                      <DifficultyLevel
                        level={item.difficulty}
                      ></DifficultyLevel>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
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
    flexDirection: "row",
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    margin: 5,
  },
});
