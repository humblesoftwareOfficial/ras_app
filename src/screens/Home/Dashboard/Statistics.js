import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
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
import {
  generateKey,
  getInstancesIntervalTimeTranslation,
  getStatusCount,
} from "../../../utils";
import { EApplicationStatus } from "../../../utils/system";
import StatisticCard from "../../../components/cards/applications/statistics";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BackButton from "../../../components/buttons/BackButton";
import { ALARMS_DASHBOARD_STYLE } from "../../../styling/headers";
import BottomModal from "../../../components/modals/BottomModal";
import InstanceTimeIntervalFilter from "../../../components/filters/InstanceTimeIntervalFilter";
import { useDidMountEffect } from "../../../utils/useDidMountEffect";
import { GetInstances } from "../../../api";

const MODAL_HEIGHT = Math.ceil(Dimensions.get("window").height / 2);

export default function Statistics({ navigation, route }) {
  const [scenario, setScenario] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(route.params?.interval);
  const [selectedService, setSelectedService] = useState(route.params?.service);
  const [isLoading, setIsLoading] = useState(true);
  const [statusCount, setStatusCount] = useState(
    getStatusCount(route.params?.data?.tests || [])
  );
  const [showIntervalFilter, setShowIntervalFilter] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (!route.params?.data) {
      navigation.goBack();
    } else {
      setScenario(route.params.data);
    }
  }, []);

  useEffect(() => {
    if (scenario) {
      setIsLoading(false);
    }
  }, [scenario]);

  useDidMountEffect(() => {
    getInstances();
  }, [selectedInterval])

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
          <Text style={{ color: "#FFF" }}>{value}</Text>
        </View>
      </View>
      <View
        style={[
          STATISTICS_STYLE.float_icon,
          {
            bottom: 15,
            // left: 0
          },
        ]}
      >
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

  const getBarHeight = (value = 0) =>
    !value
      ? WIDTH_INNER_BAR
      : (value * MAX_INNER_BAR_HEIGHT) / scenario.tests?.length + WIDTH_INNER_BAR;

  const renderStatisticsData = () =>
    (scenario?.tests || []).map((item, _) => (
      <StatisticCard key={generateKey()} data={item} />
    ));

    const getInstances = async () => {
      try {
        setIsLoading(true);
        const payload = {
          serviceID: selectedService.id,
          interval: selectedInterval,
          scenario: scenario.name
        }
        const response = await GetInstances(payload);
        const { success, data } = response.data;
        if (success) {
          if (data?.length) {
            setScenario(data[0]);
          } else {
            setScenario({
              name: data.name,
              tests: [],
            })
          }
        }
      } catch (error) {
        console.log({ error });
        setIsLoading(false);
      }
    };

  return (
    <SafeAreaView
      style={[SAFE_AREA_VIEW.container]}
      edges={["right", "left", "top"]}
    >
      {isLoading ? (
        <RasLoading text="Chargement des données... " />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BackButton onClick={() => navigation.goBack()} />
            <View
              style={{ flex: 1, flexDirection: "row-reverse", marginLeft: 10 }}
            >
              <TouchableOpacity
                style={[
                  ALARMS_DASHBOARD_STYLE.item,
                  {
                    backgroundColor: APP_COLORS.WHITE_COLOR.color,
                    marginTop: 0,
                    marginBottom: 7,
                  },
                ]}
                onPress={() => setShowIntervalFilter(true)}
              >
                <Text
                  style={{
                    color: APP_COLORS.BLACK_COLOR.color,
                    fontSize: 10,
                  }}
                >{`${getInstancesIntervalTimeTranslation(
                  selectedInterval
                )} `}</Text>
                <Ionicons
                  name="md-timer-outline"
                  size={24}
                  color={APP_COLORS.BLACK_COLOR.color}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={STATISTICS_STYLE.container}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={STATISTICS_STYLE.recap_container}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                • MONITORING
              </Text>
              <View style={STATISTICS_STYLE.recap}>
                {renderRecapStatistic(
                  "rgba(246, 124, 35, 0.3)",
                  APP_COLORS.PRIMARY_COLOR.color,
                  scenario.tests?.length,
                  "Tests",
                  MAX_INNER_BAR_HEIGHT
                )}
                {renderRecapStatistic(
                  "rgba(16, 161, 157, 0.3)",
                  APP_COLORS.SECONDARY_COLOR.color,
                  statusCount[EApplicationStatus.success],
                  "Réussis",
                  statusCount[EApplicationStatus.success] === scenario.tests?.length
                    ? MAX_INNER_BAR_HEIGHT
                    : getBarHeight(statusCount[EApplicationStatus.success])
                )}
                {renderRecapStatistic(
                  "rgba(244, 71, 36, 0.3)",
                  APP_COLORS.RED_COLOR.color,
                  renderStatusFailed(),
                  "Echoués",
                  renderStatusFailed() === scenario.tests?.length
                    ? MAX_INNER_BAR_HEIGHT
                    : getBarHeight(renderStatusFailed())
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
            </View>
            <View style={STATISTICS_STYLE.header}>
              <Text style={STATISTICS_STYLE.title}>•{scenario.name}</Text>
            </View>
            <View style={STATISTICS_STYLE.tests}>{renderStatisticsData()}</View>
          </ScrollView>
        </>
      )}
      <BottomModal
        onClose={() => setShowIntervalFilter(false)}
        content={
          <InstanceTimeIntervalFilter
            onClose={() => setShowIntervalFilter(false)}
            currentSelected={selectedInterval}
            onSelectInterval={(value) => {
              setShowIntervalFilter(false);
              setSelectedInterval(value);
            }}
          />
        }
        showModal={showIntervalFilter}
        backgroundColor="transparent"
        sliderBackgroundColor="transparent"
        borderColor={APP_COLORS.LIGHT_COLOR.color}
        minHeight={MODAL_HEIGHT}
        overlay="rgba(0, 0, 0, 0.7)"
      />
    </SafeAreaView>
  );
}
