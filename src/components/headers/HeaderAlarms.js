import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ALARMS_DASHBOARD_STYLE } from "../../styling/headers";
import { FontAwesome5, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { APP_COLORS } from "../../styling/colors";

const ICON_SIZE = 18;
export default function HeaderAlarms({ onSearch }) {
  return (
    <View style={ALARMS_DASHBOARD_STYLE.container}>
      <View style={ALARMS_DASHBOARD_STYLE.left}>
        <Text style={ALARMS_DASHBOARD_STYLE.title}>MONITORING</Text>
      </View>
      <View style={ALARMS_DASHBOARD_STYLE.right}>
        <TouchableOpacity
          style={[
            ALARMS_DASHBOARD_STYLE.item,
            {
              backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
            },
          ]}
          onPress={onSearch}
        >
          <FontAwesome5 name="search" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ALARMS_DASHBOARD_STYLE.item,
            {
              backgroundColor: APP_COLORS.SECONDARY_COLOR.color,
            },
          ]}
        >
          <SimpleLineIcons name="reload" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
