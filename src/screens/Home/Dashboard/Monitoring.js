import { View, Text } from "react-native";
import React from "react";
import ApplicationsList from "../../../components/lists/ApplicationsList";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Monitoring({ selectedService = null }) {
  return (
    <View style={{ flex: 1 }}>
      {selectedService !== null ? (
        <ApplicationsList />
      ): (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ }}>
            <MaterialCommunityIcons name="gauge-empty" size={75} color="black" />
          </Text>
          <Text style={{}}>
            Séléctionner un service pour commencer la supervision.
          </Text>
        </View>
      )}
    </View>
  );
}
