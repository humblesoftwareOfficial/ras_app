import { View, Text } from "react-native";
import React from "react";
import { APP_COLORS } from "../../../styling/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SERVICE_CARD } from "../../../styling/cards";
import { truncateText } from "../../../utils";
import { FONTS } from "../../../styling/polices";

export default function ServiceCard({ data, isSelected = false, onClick }) {
  const getFirstChar = (nom = "") => {
    try {
      const parts = data.nom.includes("_")
        ? data.nom.split("_")
        : data.nom.includes(" ")
        ? data.nom.split(" ")
        : [];

      if (parts?.length) {
        let value = "";
        for (const part of parts) {
          value += part.charAt(0).toUpperCase();
        }
        return value;
      } else {
        return data.nom.charAt(0).toUpperCase();
      }
    } catch (error) {
      return "";
    }
  };

  return (
    <TouchableOpacity
      style={[
        SERVICE_CARD.main,
        {
          
        },
      ]}
      onPress={() => onClick(data)}
    >
      <View style={[SERVICE_CARD.over_container, {
        borderColor: isSelected ? APP_COLORS.PRIMARY_COLOR.color : APP_COLORS.BLACK_COLOR.color
      }]}>
        <View
          style={[
            SERVICE_CARD.container,
            {
              backgroundColor: isSelected
                ? APP_COLORS.SECONDARY_COLOR.color
                : APP_COLORS.WHITE_COLOR.color,
            },
          ]}
        >
          <Text style={[SERVICE_CARD.pseudo, {
            ...(isSelected && {
              color: APP_COLORS.WHITE_COLOR.color
            })
          }]}>{getFirstChar()}</Text>
        </View>
      </View>
      <Text style={[SERVICE_CARD.service_name, {
        // color: isSelected ? APP_COLORS.SECONDARY_COLOR.color : APP_COLORS.BLACK_COLOR.color,
        ...(isSelected && {
          fontFamily: FONTS.bold,
        })
      }]}>
        {truncateText(data.nom, 14)}
      </Text>
    </TouchableOpacity>
  );
}
