import { View, Text } from "react-native";
import React, { useState } from "react";
import { SAFE_AREA_VIEW } from "../../../styling/screnn";
import { SafeAreaView } from "react-native";
import HeaderDashboard from "../../../components/headers/HeaderDashboard";
import TabBarCategorisation from "../../../components/tabbar/TabBarCategorisation";
import BottomModal from "../../../components/modals/BottomModal";
import { APP_COLORS } from "../../../styling/colors";
import ServicesFilters from "../../../components/filters/ServicesFilters";
import { TABS } from "../../../utils/system";
import Monitoring from "./Monitoring";
import DefaultInput from "../../../components/DefaultInput";
import HeaderAlarms from "../../../components/headers/HeaderAlarms";
import Statistiques from "./Statistiques";
import { BUTTON_STYLE } from "../../../styling/button";
import { TouchableOpacity } from "react-native";
import RasLoading from "../../../components/loaders/RasLoading";

export default function Dashboard({ navigation, route }) {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterServices, setShowFilterServices] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onShowFilterService = () => {
    setShowFilterServices(true);
  };

  const onChangeTab = ({ position }) => {
    setActiveTab(position);
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

  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <HeaderAlarms onSearch={() => !isLoading && setShowFilterServices(true)} />
      {isLoading ? (
        <RasLoading text="Recherche... "/>
      ): (
        <Monitoring />
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
        onClose={() => setShowFilterServices(false)}
        content={<ServicesFilters onClose={() => setShowFilterServices(false)}/>}
        showModal={showFilterServices}
        backgroundColor={APP_COLORS.WHITE_COLOR.color} //"rgba(255,255,255,0.95)"
        sliderBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        borderWidth={2}
        borderColor={APP_COLORS.LIGHT_COLOR.color}
      />
    </SafeAreaView>
  );
}

{
  /* <DefaultInput
        placeholder="Search app.."
        customTextAlign="left"
        borderColor="transparent"
      /> */
}
{
  /* <HeaderDashboard onShowFilterService={onShowFilterService}/> */
}
{
  /* <TabBarCategorisation
        sections={TABS || []}
        navigation={navigation}
        onChangeTab={onChangeTab}
        filterCategories={[]}
      />
      <BottomModal
        onClose={() => setShowFilterServices(false)}
        content={<ServicesFilters onClose={() => setShowFilterServices(false)}/>}
        showModal={showFilterServices}
        backgroundColor={APP_COLORS.WHITE_COLOR.color} //"rgba(255,255,255,0.95)"
        sliderBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        borderWidth={2}
        borderColor={APP_COLORS.LIGHT_COLOR.color}
      /> */
}
