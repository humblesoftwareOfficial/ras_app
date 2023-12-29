import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ALARMS_DASHBOARD_STYLE } from "../../styling/headers";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import NetInfo from '@react-native-community/netinfo';

import { APP_COLORS } from "../../styling/colors";

const ICON_SIZE = 18;
export default function HeaderAlarms({ onSearch }) {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={ALARMS_DASHBOARD_STYLE.container}>
      <View style={ALARMS_DASHBOARD_STYLE.left}>
        <Text style={ALARMS_DASHBOARD_STYLE.title}>RAS - MONITORING</Text>
      </View>
      <View style={ALARMS_DASHBOARD_STYLE.right}>
        <TouchableOpacity
          style={[ALARMS_DASHBOARD_STYLE.item]}
          onPress={onSearch}
        >
          <FontAwesome5 name="search" size={ICON_SIZE} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ALARMS_DASHBOARD_STYLE.item,
            {
              backgroundColor: isConnected
                ? APP_COLORS.GREEN_COLOR.color
                : APP_COLORS.RED_COLOR.color,
            },
          ]}
        >
          {/* <SimpleLineIcons name="reload" size={ICON_SIZE} color="white" /> */}
          <MaterialCommunityIcons
            name={isConnected ? "web-check" : "web-cancel"}
            size={ICON_SIZE}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
