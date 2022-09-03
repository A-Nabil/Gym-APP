import {AsyncStorage } from 'react-native';

var workoutsList = 
[
  {"displayName": "Cardio"},
  {"displayName": "Chest"},
  {"displayName": "Shoulders"},
  {"displayName": "Traps"},
  {"displayName": "Back"},
  {"displayName": "Lats"},
  {"displayName": "Biceps"},
  {"displayName": "Triceps"},
  {"displayName": "Forearms"},
  {"displayName": "ABS"},
  {"displayName": "Obliques"},
  {"displayName": "Squads"},
  {"displayName": "Abductor"},
  {"displayName": "Adductor"},
  {"displayName": "Hamstring"},
  {"displayName": "Glutes"},
  {"displayName": "Calves"},
]

initializeData = async () => {
   
  await AsyncStorage.setItem(
      'Cardio', JSON.stringify({'name':'Cardio'})
    );
    await AsyncStorage.setItem(
        'Chest',
        JSON.stringify({'name':'Biceps'})
      );

    await AsyncStorage.setItem(
        'Shoulders',
        JSON.stringify({'Chest':'Biceps'})
      );
    
    await AsyncStorage.setItem(
        'Traps',
        JSON.stringify({'Shoulders':'Biceps'})
      );
    
      await AsyncStorage.setItem(
        'Back',
        JSON.stringify({'Traps':'Biceps'})
      );

      await AsyncStorage.setItem(
        'Lats',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Biceps',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Triceps',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Forearms',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'ABS',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Obliques',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Squads',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Abductor',
        JSON.stringify({'Back':'Biceps'})
      );
      await AsyncStorage.setItem(
        'Adductor',
        JSON.stringify({'Back':'Biceps'})
      );

      await AsyncStorage.setItem(
        'Hamstring',
        JSON.stringify({'Back':'Biceps'})
      );

      await AsyncStorage.setItem(
        'Glutes',
        JSON.stringify({'Back':'Biceps'})
      );

      
      await AsyncStorage.setItem(
        'Calves',
        JSON.stringify({'Back':'Biceps'})
      );
  };

  export async function getWorkoutsNames()
  {
    return workoutsList;
  }

  
  export const getImage = name => {
    switch (name) {
      case "Cardio":
        return require("../assets/Cardio.jpg")
      case "Chest":
        return require("../assets/Chest.jpg")
      case "Shoulders":
        return require("../assets/Shoulders.jpg")
        case "Traps":
          return require("../assets/Traps.jpg")
        case "Back":
          return require("../assets/Back.jpg")
        case "Lats":
          return require("../assets/Lats.jpg")
      default:
        return require("../assets/Biceps.jpg")
    }
  }

  export const getImageUrl = url => {

    return { uri: "https://wger.de"+url};

  }


  export const getWorkoutsFromApi = () => {
    //'https://wger.de/api/v2/muscle'
    return fetch('http://gymapp-backend.azurewebsites.net/api/muscles')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };