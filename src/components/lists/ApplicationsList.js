import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native";

import FullLoadingContainer from "../loaders/FullLoadingContainer";
import { APP_COLORS } from "../../styling/colors";

import { RefreshControl } from "react-native";
import ItemApplication from "../cards/applications/ItemApplication";
import { EApplicationStatus } from "../../utils/system";
import { View } from "react-native";
import Services from "../../screens/Home/Dashboard/Services";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { GetInstances } from "../../api";
import { generateKey } from "../../utils";


export default function ApplicationsList({ navigation, services = [] }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isRetrievingData, setIsRetrievingData] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [instances, setInstances] = useState(null);

  useEffect(() => {
    if (selectedService) {
      getInstances();
    }
  }, [selectedService]);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const renderItems = useCallback(
    ({ item, index }) => <ItemApplication item={item} key={generateKey()} />,
    []
  );

  const keyExtractor = useCallback((item) => generateKey(), []);

  const onEndReached = () => {};

  const onRefreshData = () => {
    if (selectedService) {
      getInstances();
    }
  };

  const onSelectService = (value) => {
    setSelectedService(value);
  };

  const getInstances = async () => {
    try {
      setIsLoading(true);
      const response = await GetInstances(selectedService.id);
      const { success, data } = response.data;
      if (success) {
        setData(data);
      }
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  };

  return (
    <>
      <FlatList
        style={{ backgroundColor: "transparent", flex: 1 }}
        disableIntervalMomentum
        data={selectedService && !isLoading && data?.length ? data : []}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={0.5}
        updateCellsBatchingPeriod={100}
        initialNumToRender={10}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefreshData}
            tintColor={APP_COLORS.PRIMARY_COLOR.color}
            progressBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
            colors={[APP_COLORS.PRIMARY_COLOR.color]}
          />
        }
        onRefresh={onRefreshData}
        onEndReached={() => onEndReached()}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          isRetrievingData && (
            <ActivityIndicator
              size="small"
              color={APP_COLORS.YELLOW_COLOR.color}
            />
          )
        }
        ListHeaderComponent={
          <Services
            onSelectService={onSelectService}
            selectedService={selectedService}
            data={services}
          />
        }
      />
      {selectedService === null && (
        <View
          style={{
            flex: 1.5,
            alignItems: "center",
          }}
        >
          <Text style={{}}>
            <MaterialCommunityIcons
              name="gauge-empty"
              size={75}
              color={APP_COLORS.SECONDARY_COLOR.color}
            />
          </Text>
          <Text style={{}}>Séléctionner un service.</Text>
        </View>
      )}
      {!isLoading && selectedService !== null && !data?.length && (
        <View
          style={{
            flex: 1.5,
            alignItems: "center",
          }}
        >
          <Text style={{}}>
            <AntDesign name="exclamation"  size={75}
              color={APP_COLORS.PRIMARY_COLOR.color} />
          </Text>
          <Text style={{}}>Aucune donnée remontée sur cette période.</Text>
        </View>
      )}
      {isLoading && <FullLoadingContainer />}
    </>
  );
}
