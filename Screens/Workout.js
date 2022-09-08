import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
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
        <ScrollView>
          <ImageSwitcher images={this.images}></ImageSwitcher>
          <Text
            style={{
              margin: 10,
              alignContent: "center",
            }}
          >
            {this.workOutData.BodyParts}
          </Text>
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
          {/* <Text>{this.workOutData.gif}</Text> */}

          <Text
            style={{
              margin: 10,
            }}
          >
            {this.workOutData.steps}
          </Text>
        </ScrollView>
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
