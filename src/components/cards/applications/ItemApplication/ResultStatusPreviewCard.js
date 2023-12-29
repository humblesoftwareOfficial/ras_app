import { View, Text } from "react-native";
import React from "react";
import { generateKey } from "../../../../utils";
import { ITEM_APPLICATION_CARD_STYLE } from "../../../../styling/cards";
import { getStatusColor, getStatusLabel } from "../../../../utils/system";

export default function ResultStatusPreviewCard({ value }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          ITEM_APPLICATION_CARD_STYLE.preview_status_time,
          {
            backgroundColor: getStatusColor(value?.status).color,
          },
        ]}
      >
        <Text
          adjustsFontSizeToFit
          style={[
            ITEM_APPLICATION_CARD_STYLE.status_text,
            {
              // color: getStatusColor(value?.status).textColor,
            },
          ]}
        >
          {getStatusLabel(value?.status)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {/* <Text style={[ITEM_APPLICATION_CARD_STYLE.duration_text]}>{value?.duration || ""}</Text> */}
        <Text style={[ITEM_APPLICATION_CARD_STYLE.duration_text]}>{` ${
          value?.duration || ""
        }`}</Text>
      </View>
    </View>
  );
}
