import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

import { SAFE_AREA_VIEW } from "../../../styling/screnn";
import BottomModal from "../../../components/modals/BottomModal";
import { APP_COLORS } from "../../../styling/colors";
import DefaultInput from "../../../components/DefaultInput";
import HeaderAlarms from "../../../components/headers/HeaderAlarms";
import { BUTTON_STYLE } from "../../../styling/button";
import RasLoading from "../../../components/loaders/RasLoading";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationsList from "../../../components/lists/ApplicationsList";
import { GetServices } from "../../../api";
import { EInstanceIntervalTime } from "../../../utils";
import InstanceTimeIntervalFilter from "../../../components/filters/InstanceTimeIntervalFilter";

const MODAL_HEIGHT = Math.ceil(Dimensions.get("window").height / 2);

export default function Dashboard({ navigation, route }) {
  const [showIntervalFilter, setShowIntervalFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(
    EInstanceIntervalTime.Last_Hour
  );

  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    if (services?.length) {
      setIsLoading(false);
    }
  }, [services]);

  const onShowFilterService = () => {
    setShowIntervalFilter(true);
  };

  const onSearchService = () => {
    setShowSearch(false);
    setIsLoading(true);
    console.log("search ....");
    setIsLoading(false);
  };

  const renderInputSearch = () => (
    <View>
      <DefaultInput
        placeholder="Rechercher..."
        customTextAlign="left"
        borderColor="transparent"
        backgroundColor="#F3F3F3"
        autoFocus
      />
      <TouchableOpacity
        style={[
          BUTTON_STYLE.button,
          {
            backgroundColor: false ? "gray" : APP_COLORS.SECONDARY_COLOR.color,
          },
        ]}
        onPress={() => onSearchService()}
      >
        <Text style={{ color: "#FFF" }}>Rechercher</Text>
      </TouchableOpacity>
    </View>
  );

  const getServices = async () => {
    try {
      const response = await GetServices();
      const { success, data } = response.data;
      if (success) {
        setServices(data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <SafeAreaView
      style={[SAFE_AREA_VIEW.container]}
      edges={["right", "left", "top"]}
    >
      <HeaderAlarms
        onSearch={() => !isLoading && setShowIntervalFilter(true)}
        interval={selectedInterval}
      />
      {isLoading ? (
        <RasLoading text="Chargement des services... " />
      ) : (
        <ApplicationsList
          navigation={navigation}
          services={services}
          interval={selectedInterval}
        />
      )}
      <BottomModal
        onClose={() => setShowSearch(false)}
        content={renderInputSearch()}
        showModal={showSearch}
        backgroundColor={APP_COLORS.WHITE_COLOR.color}
        sliderBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        borderWidth={2}
        borderColor={APP_COLORS.LIGHT_COLOR.color}
      />
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
