import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ALARMS_DASHBOARD_STYLE } from "../../styling/headers";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";

import { APP_COLORS } from "../../styling/colors";
import { getInstancesIntervalTimeTranslation } from "../../utils";

const ICON_SIZE = 18;

export default function HeaderAlarms({ onSearch, interval }) {
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
          style={[
            ALARMS_DASHBOARD_STYLE.item,
            {
              backgroundColor: APP_COLORS.WHITE_COLOR.color,
            },
          ]}
          onPress={onSearch}
        >
          <Text
            style={{ color: APP_COLORS.PRIMARY_COLOR.color, fontSize: 10 }}
          >{`${getInstancesIntervalTimeTranslation(interval)} `}</Text>
          <Ionicons
            name="md-timer-outline"
            size={ICON_SIZE + 5}
            color={APP_COLORS.BLACK_COLOR.color}
          />
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
