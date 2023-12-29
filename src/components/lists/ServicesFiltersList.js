import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";

import FullLoadingContainer from "../loaders/FullLoadingContainer";
import { APP_COLORS } from "../../styling/colors";

import { RefreshControl } from "react-native";
import FilterServiceCard from "../cards/services/filter";

const DATA = [
  {
    code: 1,
    label: "Corporate",
  },
  {
    code: 2,
    label: "Customer care",
  },
];

export default function ServicesFiltersList({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(DATA);
  const [isRetreivingData, setIsRetreivingData] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [selectedServices, setSelectedServices] = useState([]);

  const renderItems = useCallback(
    ({ item, index }) => (
      <FilterServiceCard
        item={item}
        key={item.code}
        onClick={onClickService}
        isSelected={getSelectedService(item)}
        //   onClick={onOpenPlace}
        //   limitedDescription
        // onShowProfile={onShowProfile}
        // onShowPublicationImages={onShowPublicationImages}
      />
    ),
    [selectedServices]
  );

  const keyExtractor = useCallback((item) => item.code, []);

  const onEndReached = () => {};

  const onRefreshData = () => {};

  const onClickService = (service) => {
    const data = [...selectedServices];
    const index = data?.findIndex((cat) => cat.code === service.code);
    if (index !== -1) {
      data.splice(index, 1);
    } else {
      data.push(service);
    }
    setSelectedServices(data);
  };

  const getSelectedService = useCallback(
    (service) =>
      selectedServices.findIndex((cat) => cat.code === service.code) !== -1,
    [selectedServices]
  );

  return (
    <>
      {isLoading ? (
        <FullLoadingContainer />
      ) : (
        <FlatList
          style={{ backgroundColor: APP_COLORS.WHITE_COLOR.color, flex: 1 }}
          disableIntervalMomentum
          data={data || []}
          renderItem={renderItems}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={6}
          onEndReachedThreshold={0.5}
          updateCellsBatchingPeriod={100}
          initialNumToRender={6}
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
            isRetreivingData && (
              <ActivityIndicator
                size="small"
                color={APP_COLORS.YELLOW_COLOR.color}
              />
            )
          }
        />
      )}
    </>
  );
}
