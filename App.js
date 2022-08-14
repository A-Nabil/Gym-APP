import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './components/Card';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View >
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centered horizontally
    justifyContent: 'flex-end',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "white",
  },
  card: {
    height: 150,
    width: '95%',
    backgroundColor: '#f18484',
    marginBottom: 16,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally

  },
});
