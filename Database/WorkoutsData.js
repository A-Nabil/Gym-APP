import { AsyncStorage } from "react-native";

export async function getWorkoutsNames() {
  return workoutsList;
}

export const getImage = (name) => {
  return (
    "https://workoutsassets.blob.core.windows.net/images/" +
    name.toLowerCase().replace(/ /g, "_") +
    ".jpg"
  );
};

export const getImageUrl = (url) => {
  return { uri: "https://wger.de" + url };
};

export const getMusclesFromApi = () => {
  //'https://wger.de/api/v2/muscle'
  return fetch("http://gymapp-backend.azurewebsites.net/api/muscles")
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getMuscleWorkoutsFromApi = (muscleId) => {
  //'https://wger.de/api/v2/muscle'
  let apiUrl =
    "https://gymapp-backend.azurewebsites.net/api/workouts?" +
    new URLSearchParams({
      muscleId: muscleId,
      isGym: globalThis.isGym,
    });
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
