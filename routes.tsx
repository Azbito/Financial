import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./src/Screens/Home";

const { Navigator, Screen } = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}