import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { MusclesScreen, MuscleScreenHeader } from "./Screens/Muscles";
import MuscleWorkoutScreen from "./Screens/MuscleWorkouts";
import WorkoutScreen from "./Screens/Workout";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Workouts" component={MusclesScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="MuscleWorkout" component={MuscleWorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#3F729B" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else {
            iconName = focused ? "dumbbell" : "dumbbell";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        title="Home"
        name="HomeTab"
        component={HomeScreen}
        options={{ headerTitle: "home", title: "Home" }}
      />
      <Tab.Screen
        name="Muscles"
        component={MusclesScreen}
        options={{
          headerRight: () => <MuscleScreenHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Workouts");
        }}
        style={styles.card}
      >
        <ImageBackground
          source={require("./assets/workouts.jpg")}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-around",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Centered horizontally
    justifyContent: "flex-end",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  card: {
    height: 150,
    width: "95%",
    marginBottom: 16,
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },
});
