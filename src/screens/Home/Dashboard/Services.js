import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import RasLoading from "../../../components/loaders/RasLoading";
import ServiceCard from "../../../components/cards/services";

export default function Services({
  onSelectService,
  selectedService,
  data = [],
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderServices = useCallback(
    ({ item }) => (
      <ServiceCard
        data={item}
        key={`${item.id}`}
        onClick={onSelectService}
        isSelected={selectedService?.id === item.id}
      />
    ),
    [data, selectedService]
  );

  const onEndReached = () => {};

  return (
    <View style={{}}>
      {isLoading ? (
        <RasLoading text="Recherche... " />
      ) : (
        <FlatList
          style={{
            marginBottom: 15,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#F8F8F8",
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data || []}
          renderItem={renderServices}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={6}
          onEndReachedThreshold={0.5}
          updateCellsBatchingPeriod={100}
          initialNumToRender={6}
          onEndReached={() => onEndReached()}
          onMomentumScrollBegin={() => {
            setOnEndReachedCalledDuringMomentum(false);
          }}
        />
      )}
    </View>
  );
}
