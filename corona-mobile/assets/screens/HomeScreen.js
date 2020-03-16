// import React, { Component } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.title}>
                ProjectCorona
              </Text>
              <Image style={styles.titleImage} source={require('./../images/e026047582f6c14e9a6cdfca33e4f20b.png')}></Image>
            </View>
            
            <TouchableOpacity title="Latest News" onPress={() => navigation.navigate('LatestNews')}>
              <Text style={styles.button}>
                Latest News
              </Text>
            </TouchableOpacity>
            <TouchableOpacity title="Global Resources" onPress={() => navigation.navigate('GlobalResources')}>
              <Text style={styles.button}>
                Global Resources
              </Text>
            </TouchableOpacity>
            <TouchableOpacity title="Symptom Check" onPress={() => navigation.navigate('SymptomCheck')}>
              <Text style={styles.button}>
                Symptom Check
              </Text>
            </TouchableOpacity>           
            <TouchableOpacity title="Testing Centers" onPress={() => navigation.navigate('TestingCenters')}>
              <Text style={styles.button}>
                Testing Centers
              </Text>
            </TouchableOpacity> 
            <TouchableOpacity title="Travel Information" onPress={() => navigation.navigate('TravelInformation')}>
              <Text style={styles.button}>
                Travel Information
              </Text>
            </TouchableOpacity> 
            <TouchableOpacity title="Live Tracker" onPress={() => navigation.navigate('LiveTracker')}>
              <Text style={styles.buttonSpecialRed}>
                Live Global Outbreak Tracker
              </Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9bcfa5',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#2c9e93',
    borderRadius: 25,
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    overflow: 'hidden',
    padding: 18,
    margin: 7,
    textAlign:'left',
  },
  buttonSpecialRed: {
    backgroundColor: '#db3a16',
    borderRadius: 25,
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    overflow: 'hidden',
    padding: 18,
    margin: 7,
    textAlign:'center',
  },
  title: {
    flex: 1,
    fontSize: 32,
    // textAlign: 'left',
    // textAlignVertical: 'bottom',
    height: 120,
    // marginLeft: 10,
    // marginVertical: 45,
    // backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 50,
    paddingLeft: 30
  },
  titleImage: {
    // flex: 1,
    width: 120,
    height: 120,
    margin: 10
  }
});
