import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useStyle } from "../../../styles/styles.js";
import { SourceItem } from "../../../components/FooterComponents";
import { VisitButton } from "../../../components/Buttons";

export default function AboutLFR({ route, navigation }) {
  const { styles, colors } = useStyle(
    "container",
    "sectionTitle",
    "compactNameSmall",
    "boxContainer"
  );
  const site = {
    title: "Visit LFR's Site",
    source: "https://lfrinternational.org/"
  };
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.backgroundcolor }]}
    >
      <View
        style={[
          styles.boxContainer,
          { marginLeft: 15, marginRight: 15, marginTop: 15 }
        ]}
      >
        <Image
          source={require("./../../../images/LFR/Favicon.png")}
          resizeMode="contain"
          style={{ width: 80, height: 80, alignSelf: "center" }}
        />
        <Text
          style={[styles.sectionTitle, { textAlign: "center", marginTop: 5 }]}
        >
          {" "}
          About LFR{" "}
        </Text>
        <Text
          style={[
            styles.compactNameSmall,
            { marginLeft: 5, marginRight: 5, marginBottom: 20 }
          ]}
        >
          LFR creates scalable networks of emergency first responders in low-
          and middle-income countries to alleviate the global burden of
          traumatic injury disproportionately affecting these countries. We
          establish affordable, sustainable, and locally-informed lay first
          responder programs by deploying emergency medical providers to
          educate, launch, and scale up programs.{" "}
        </Text>
        <Text
          style={[
            styles.compactNameSmall,
            { marginLeft: 5, marginRight: 5, marginBottom: 20 }
          ]}
        >
          LFR has established programs in four low- and middle-income countries.
          Working with local governments and community stakeholders, LFR
          develops sustainable and scalable long-term solutions.
        </Text>
        <Text
          style={[styles.compactNameSmall, { marginLeft: 5, marginRight: 5 }]}
        >
          With over twenty-thousand disability-adjusted life years saved, LFR
          International projects have been serving the global community since
          2016. To date, LFR International has developed programs in Uganda,
          Chad, Guatemala, and Sierra Leone and is targeting other communities
          worldwide.
        </Text>
      </View>
      <VisitButton
        site={site}
        navigation={navigation}
        style={{
          marginLeft: 40,
          marginRight: 40
        }}
      />
    </ScrollView>
  );
}
