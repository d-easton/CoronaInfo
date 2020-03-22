import * as React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles, boxStyles } from "./../../styles/styles.js";
import {
  SurveyNavigationButton,
  SurveyNavigationButtonLarge,
  SurveyButton
} from "../../components/Buttons";
import { InfoViewDiagnosis } from "./../../components/InfoViewDiagnosis";

var symptoms = [];

var a;

export function Diagnosis({ navigation, response, retakeSurvey }) {
  for (a in response) {
    if (response[a]["Percentage"]) {
      symptoms.push({
        title: response[a]["Symptom"],
        body: response[a]["Percentage"]
      });
    }
  }
  if (response == "") {
    symptoms = [];
  }
  return (
    <ScrollView>
      <Text style={styles.sectionTitleCenter}> Diagnosis Results</Text>
      <ScrollView style={styles.container}>
        {symptoms.map(symptom => {
          return (
            <View style={{marginLeft: 10, marginRight: 10}}>
            <InfoViewDiagnosis
              title={symptom.title}
              body={
                symptom.body +
                "% of people who tested positive have this symptom."
              }
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
        <View style={boxStyles.container}>
          <Text style={styles.surveyQuestionText}>
            Based on your symptoms, we recommend utlizing the following
            knowledge resources:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <SurveyNavigationButton
                title={"Info Toolkit"}
                navigation={navigation}
                navigationName={"InformationalToolkit"}
              />
            </View>
            <View style={{ flex: 1 }}>
              <SurveyNavigationButton
                title={"Best Practices"}
                navigation={navigation}
                navigationName={"PreventativePractices"}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
        <View style={boxStyles.container}>
          <Text style={styles.surveyQuestionText}>
            You can also find local information on COVID-19 data, and find
            testing centers for help:
          </Text>
          <SurveyNavigationButtonLarge
            title={"Find Center"}
            navigation={navigation}
            navigationName={"TestingCenters"}
          />
        </View>
      </View>
      <SurveyButton title="Retake Symptom Check" action={retakeSurvey} />
    </ScrollView>
  );
}
