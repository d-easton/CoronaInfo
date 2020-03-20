import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import axios from 'axios';

export async function registerForPushNotifications() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== "granted") {
    console.log("Permissions not granted for notifications.");
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();

  // post to server
  const body = { token };
}

export async function sendSymptoms(symptoms) {
  return (
    await axios.post('./../backend/routes/symptomCheck', { symptoms: symptoms })
  ).data;
}
