import { View, Text } from "react-native";
import React from "react";
import { SERVICES_FILTERS_STYLE } from "../../../styling/filters";
import { APP_COLORS } from "../../../styling/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function FilterServiceCard({
  item,
  isSelected = false,
  onClick,
}) {
  return (
    <TouchableOpacity
      style={[
        SERVICES_FILTERS_STYLE.card_container,
        {
          backgroundColor: isSelected
            ? APP_COLORS.PRIMARY_COLOR.color
            : APP_COLORS.LIGHT_COLOR.color,
        },
      ]}
      onPress={() => onClick(item)}
    >
      <View style={SERVICES_FILTERS_STYLE.card_left}>
        <View
          style={[
            SERVICES_FILTERS_STYLE.card_icon_container,
            {
              backgroundColor: isSelected
                ? APP_COLORS.WHITE_COLOR.color
                : APP_COLORS.WHITE_COLOR.color,
            },
          ]}
        >
          <FontAwesome5
            name="server"
            size={24}
            color={
              isSelected
                ? APP_COLORS.SECONDARY_COLOR.color
                : APP_COLORS.BLACK_COLOR.color
            }
          />
        </View>
      </View>
      <View style={SERVICES_FILTERS_STYLE.right}>
        <Text
          style={[
            SERVICES_FILTERS_STYLE.card_label,
            {
              color: isSelected
                ? APP_COLORS.WHITE_COLOR.color
                : APP_COLORS.BLACK_COLOR.color,
            },
          ]}
        >
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
