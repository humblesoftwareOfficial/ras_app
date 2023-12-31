import { View, Text } from "react-native";
import React, { useState } from "react";
import { APP_COLORS } from "../../styling/colors";
import CustomButton from "../buttons/CustomButton";
import {
  EInstanceIntervalTime,
  getInstancesIntervalTimeTranslation,
} from "../../utils";

export default function InstanceTimeIntervalFilter({
  onClose,
  currentSelected = null,
  onSelectInterval
}) {
  return (
    <View
      style={{ flex: 1, flexDirection: "column-reverse", marginBottom: 50 }}
    >
      <CustomButton
        label={getInstancesIntervalTimeTranslation(
          EInstanceIntervalTime.Last_Quarter_Hour
        )}
        textColor={APP_COLORS.BLACK_COLOR.color}
        bgColor={
          currentSelected === EInstanceIntervalTime.Last_Quarter_Hour
            ? APP_COLORS.PRIMARY_COLOR.color
            : APP_COLORS.WHITE_COLOR.color
        }
        onClick={() => onSelectInterval(EInstanceIntervalTime.Last_Quarter_Hour)}
      />
      <CustomButton
        label={getInstancesIntervalTimeTranslation(
          EInstanceIntervalTime.Last_Half_Hour
        )}
        textColor={APP_COLORS.BLACK_COLOR.color}
        bgColor={
          currentSelected === EInstanceIntervalTime.Last_Half_Hour
            ? APP_COLORS.PRIMARY_COLOR.color
            : APP_COLORS.WHITE_COLOR.color
        }
        onClick={() => onSelectInterval(EInstanceIntervalTime.Last_Half_Hour)}
      />
      <CustomButton
        label={getInstancesIntervalTimeTranslation(
          EInstanceIntervalTime.Last_Hour
        )}
        textColor={APP_COLORS.BLACK_COLOR.color}
        bgColor={
          currentSelected === EInstanceIntervalTime.Last_Hour
            ? APP_COLORS.PRIMARY_COLOR.color
            : APP_COLORS.WHITE_COLOR.color
        }
        onClick={() => onSelectInterval(EInstanceIntervalTime.Last_Hour)}
      />
    </View>
  );
}
