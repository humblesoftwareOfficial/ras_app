import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SAFE_AREA_VIEW } from "../../../styling/screnn";
import { SafeAreaView } from "react-native-safe-area-context";
import RasLoading from "../../../components/loaders/RasLoading";
import {
  HEIGHT_BAR,
  MAX_INNER_BAR_HEIGHT,
  STATISTICS_STYLE,
  WIDTH_INNER_BAR,
} from "../../../styling/statistics";
import { APP_COLORS } from "../../../styling/colors";
import { generateKey, getStatusCount } from "../../../utils";
import { EApplicationStatus } from "../../../utils/system";
import StatisticCard from "../../../components/cards/applications/statistics";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Statistics({ navigation, route }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusCount, setStatusCount] = useState(
    getStatusCount(route.params?.data?.tests || [])
  );

  useEffect(() => {
    if (!route.params?.data) {
      navigation.goBack();
    } else {
      setData(route.params.data);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const renderRecapStatistic = (
    containerColor,
    backgroundColor,
    value = "",
    legend = "",
    height = WIDTH_INNER_BAR //HEIGHT_BAR - 15,
  ) => (
    <View style={STATISTICS_STYLE.stats_recap}>
      <View
        style={[
          STATISTICS_STYLE.recap_bar,
          {
            backgroundColor: containerColor,
          },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={STATISTICS_STYLE.legend}>{legend}</Text>
        </View>
        <View
          style={[
            STATISTICS_STYLE.recap_inner_bar,
            {
              backgroundColor,
              height,
            },
          ]}
        >
          <Text style={{ color: "#FFF"}}>{value}</Text>
        </View>
      </View>
      <View style={[STATISTICS_STYLE.float_icon, {
              bottom: 15,
              // left: 0
            }]}>
              <AntDesign name="dashboard" size={24} color="rgba(255,255,255, 0.2)" />
            </View>
    </View>
  );

  const renderStatusFailed = () => {
    try {
      const result =
        (statusCount[EApplicationStatus["service-failure"]] || 0) +
        (statusCount[EApplicationStatus["internal-failure"]] || 0);
      return result;
    } catch (error) {
      return "";
    }
  };

  const getBarHeight = (value = 0) => (
    !value ? WIDTH_INNER_BAR : (
      (value * MAX_INNER_BAR_HEIGHT /
      data.tests?.length) + WIDTH_INNER_BAR
    )
  )

  const renderStatisticsData = () => (
    (data?.tests || []).map((item, _) => (
      <StatisticCard key={generateKey()} data={item}/>
    ))
  )

  return (
    <SafeAreaView
      style={[SAFE_AREA_VIEW.container, ]}
      edges={["right", "left", "top"]}
    >
      {isLoading ? (
        <RasLoading text="Chargement des données... " />
      ) : (
        <ScrollView
          style={STATISTICS_STYLE.container}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={STATISTICS_STYLE.header}>
            <Text style={STATISTICS_STYLE.title}>{data.name}</Text>
          </View>
          <View style={STATISTICS_STYLE.recap}>
            {renderRecapStatistic(
              "rgba(246, 124, 35, 0.3)",
              APP_COLORS.PRIMARY_COLOR.color,
              data.tests?.length,
              "Tests",
              MAX_INNER_BAR_HEIGHT
            )}
            {renderRecapStatistic(
              "rgba(16, 161, 157, 0.3)",
              APP_COLORS.SECONDARY_COLOR.color,
              statusCount[EApplicationStatus.success],
              "Réussis",
              statusCount[EApplicationStatus.success] === data.tests?.length ? MAX_INNER_BAR_HEIGHT : getBarHeight(statusCount[EApplicationStatus.success])
            )}
            {renderRecapStatistic(
              "rgba(244, 71, 36, 0.3)",
              APP_COLORS.RED_COLOR.color,
              renderStatusFailed(),
              "Echoués",
              renderStatusFailed() === data.tests?.length ? MAX_INNER_BAR_HEIGHT : getBarHeight(renderStatusFailed())
            )}
            
            {/* <View style={[STATISTICS_STYLE.float_icon, {
              right: 10,
              top: 18,
              bottom: 0
            }]}>
              <AntDesign name="dashboard" size={24} color="rgba(255,255,255, 0.1)" />
            </View>
            <View style={[STATISTICS_STYLE.float_icon, {
              left: 10,
              bottom: 18
            }]}>
              <AntDesign name="dashboard" size={24} color="rgba(255,255,255, 0.1)" />
            </View>
            
            <View style={[STATISTICS_STYLE.float_icon, {
              left: 10,
              top: 18,
            }]}>
              <Ionicons name="stats-chart-outline" size={24} color="rgba(255,255,255, 0.1)" />
            </View>
            <View style={[STATISTICS_STYLE.float_icon, {
              right: 10,
              bottom: 18,
            }]}>
              <Ionicons name="stats-chart-outline" size={24} color="rgba(255,255,255, 0.1)" />
            </View> */}
          </View>
          
          <View style={STATISTICS_STYLE.tests}>
            {renderStatisticsData()}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
