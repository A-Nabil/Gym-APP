import {AsyncStorage } from 'react-native';

initializeData = async () => {
    await AsyncStorage.setItem(
      'Cardio', JSON.stringify({'name':'Cardio'})
    );
    await AsyncStorage.setItem(
        'Biceps',
        JSON.stringify({'name':'Biceps'})
      );
  };

  export async function getWorkoutsNames()
  {
    var workouts = await AsyncStorage.getAllKeys();
    if(workouts.length < 1)
        {
            await initializeData();
            return await AsyncStorage.getAllKeys();
        }
    return workouts;
  }