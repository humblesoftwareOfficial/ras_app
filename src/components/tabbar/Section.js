import { View } from "react-native";
import React, { useCallback } from "react";
import { ETABSLabel } from "../../utils/system";
// import Statistiques from "../../screens/Home/Dashboard/Statistiques";
import Monitoring from "../../screens/Home/Dashboard/Monitoring";
// import VerticalListSection from "../lists/VerticalListSection";

export default function Section({
  section,
  navigation,
  filterCategories = [],
}) {
  console.log({ section });

  const renderScreen = useCallback(() => {
    switch (section?.label) {
      case ETABSLabel.Statistiques:
        // return <Statistiques />;
        return null;

      case ETABSLabel.Monotoring:
        return <Monitoring />;

      default:
        break;
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}
