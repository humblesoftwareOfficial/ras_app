import { View, Text } from "react-native";
import React, { useState } from "react";
import { CARD_STATISTICS_STYLE } from "../../../../styling/statistics";
import { getStatusColor, getStatusLabel } from "../../../../utils/system";
import { timing } from "../../../../utils/time";

export default function StatisticCard({ data }) {
  const [statusColor, setStatusColor] = useState(getStatusColor(data.status));
  return (
    <View style={CARD_STATISTICS_STYLE.container}>
      <View style={{ flex: 1 }}>
        <View
          style={[
            CARD_STATISTICS_STYLE.status,
            {
              backgroundColor: statusColor.color,
              borderColor: statusColor.textColor,
            },
          ]}
        >
          <Text
            adjustsFontSizeToFit
            style={[
              CARD_STATISTICS_STYLE.status_text,
              {
                color: statusColor.textColor,
              },
            ]}
          >
            {getStatusLabel(data.status)}
          </Text>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
          <Text>{timing(data.checkdate)}</Text>
        </View>
      </View>
      <View style={CARD_STATISTICS_STYLE.check_duration}>
        <Text style={{ fontSize: 9 }}>{data.duration || ""}</Text>
      </View>
    </View>
  );
}
