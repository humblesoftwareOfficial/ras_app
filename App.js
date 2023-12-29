import { Image, StyleSheet, Text, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Asset } from "expo-asset";
import { loadAsync, useFonts } from "expo-font";
import Navigation from "./src/navigation";
import WelcomPage from "./src/screens/Shared/WelcomePage";
import { useEffect, useState } from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#72065b",
    accent: "#f1c40f",
    background: "red",
  },
  dark: true,
};

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    avenirBold: require("./src/assets/fonts/AvenirNextLTPro-Bold.otf"),
    avenir: require("./src/assets/fonts/AvenirNextLTPro-Regular.otf"),
    alexBrush: require("./src/assets/fonts/AlexBrush-Regular.ttf"),
    grapeNuts: require("./src/assets/fonts/GrapeNuts-Regular.ttf"),
    belleAurore: require("./src/assets/fonts/LaBelleAurore-Regular.ttf"),
    sacramento: require("./src/assets/fonts/Sacramento-Regular.ttf"),
    yesteryear: require("./src/assets/fonts/Yesteryear-Regular.ttf"),
    snigletRegular: require("./src/assets/fonts/Sniglet-Regular.ttf"),
    snigletBold: require("./src/assets/fonts/Sniglet-ExtraBold.ttf"),
    pacificoRegular: require("./src/assets/fonts/Pacifico-Regular.ttf"),
    righteousRegular: require("./src/assets/fonts/Righteous-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await _loadAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require("./src/assets/images/orange.png"),
    ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
      AntDesign.font,
      Entypo.font,
      EvilIcons.font,
      Feather.font,
      Fontisto.font,
      Ionicons.font,
      MaterialCommunityIcons.font,
      MaterialIcons.font,
      SimpleLineIcons.font,
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <PaperProvider theme={theme}>
      <RootSiblingParent>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {/* <Navigation /> */}
          {fontsLoaded && appIsReady ? <Navigation /> : <WelcomPage />}
        </SafeAreaProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
}
