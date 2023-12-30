import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import { SCREENS_NAME, VIEWS_NAME } from "../utils/system";
import Home from "../screens";
import Statistics from "../screens/Home/Dashboard/Statistics";

const Stack = createStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS_NAME.Home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS_NAME.Login}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={VIEWS_NAME.Statistics}
          component={Statistics}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
