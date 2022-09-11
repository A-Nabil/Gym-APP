import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
} from "react-native";
import DifficultyLevel from "../Components/DifficultyLevel";
import ImageSwitcher from "../Components/ImageSwitcher";

class WorkoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.workOutData = props.route.params.workOut;
    props.navigation.setOptions({ headerTitle: this.workOutData.Name });

    this.images = props.route.params.workOut.gif.split(",");
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <View>
              <ImageSwitcher images={this.images}></ImageSwitcher>
              <Text
                style={{
                  margin: 10,
                  alignContent: "center",
                  fontWeight: "bold",
                }}
              >
                {this.workOutData.BodyParts}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Button style={{ margin: 5 }} title="Is gym"></Button>
                <Button title="Is home"></Button>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    flex: 4,
                    fontWeight: "bold",
                  }}
                >
                  {this.workOutData.Equipment}
                </Text>
                <View style={{ width: 40, paddingRight: 10 }}>
                  <DifficultyLevel
                    level={this.workOutData.difficulty}
                  ></DifficultyLevel>
                </View>
              </View>
            </View>
          }
          data={this.workOutData.steps.split(";")}
          renderItem={({ item }) => (
            <Text
              style={{
                margin: 10,
                fontSize: 18,
                backgroundColor: "lightgray",
              }}
            >
              {item}
            </Text>
          )}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

export default WorkoutScreen;

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexGrow: 1,
  },
});
