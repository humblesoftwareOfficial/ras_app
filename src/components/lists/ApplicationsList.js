import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";

import FullLoadingContainer from "../loaders/FullLoadingContainer";
import { APP_COLORS } from "../../styling/colors";
import FilterServiceCard from "../cards/services";
import { RefreshControl } from "react-native";
import ItemApplication from "../cards/applications/ItemApplication";
import { EApplicationStatus } from "../../utils/system";
import { View } from "react-native";

const DATA = [
  {
    code: 1,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus.success
  },
  {
    code: 2,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus.success
  },
  {
    code: 3,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus["service-failure"]
  },
  {
    code: 4,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus["internal-failure"]
  },
  {
    code: 5,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus.success
  },
  {
    code: 6,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus.success
  },
  {
    code: 7,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus.success
  },
  {
    code: 8,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus.success
  },
  {
    code: 9,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus["service-failure"]
  },
  {
    code: 10,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus["internal-failure"]
  },
  {
    code: 11,
    service: "Corporate",
    label: "Oracle",
    status: EApplicationStatus.success
  },
  {
    code: 12,
    service: "Customer care",
    label: "Sugu",
    status: EApplicationStatus.success
  },
];

export default function ApplicationsList({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(DATA);
  const [isRetreivingData, setIsRetreivingData] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const renderItems = useCallback(
    ({ item, index }) => (
      <ItemApplication
        item={item}
        key={item.code}
        // onClick={onClickService}
        // isSelected={getSelectedService(item)}
        //   onClick={onOpenPlace}
        //   limitedDescription
        // onShowProfile={onShowProfile}
        // onShowPublicationImages={onShowPublicationImages}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.code, []);

  const onEndReached = () => {};

  const onRefreshData = () => {};

//   const onClickService = (service) => {
//     const data = [...selectedServices];
//     const index = data?.findIndex((cat) => cat.code === service.code);
//     if (index !== -1) {
//       data.splice(index, 1);
//     } else {
//       data.push(service);
//     }
//     setSelectedServices(data);
//   };

//   const getSelectedService = useCallback(
//     (service) =>
//       selectedServices.findIndex((cat) => cat.code === service.code) !== -1,
//     [selectedServices]
//   );

  return (
    <>
      {isLoading ? (
        <FullLoadingContainer />
      ) : (
        <FlatList
          style={{ backgroundColor: APP_COLORS.LIGHT_COLOR.color, flex: 1, marginTop: 1, }}
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
          ListHeaderComponent={<View style={{ marginTop: 10}}>

          </View>}
        />
      )}
    </>
  );
}
