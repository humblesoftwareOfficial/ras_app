import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Platform,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import DefaultInput from "../components/DefaultInput";
// import mysmc_logo from "../assets/images/Mysmc.png";
import RasLoading from "../components/loaders/RasLoading";
//import { loginUser } from "../api/mysql";

const WIDTH = Dimensions.get("screen").width;

export default function Login({ navigation, route }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  /*
    const authentication = async() => {
      if (login.length && password.length) {
        setIsLoading(true);
        try {
            //await loginUser();
        } catch (error) {
            
        }
        setIsLoading(false);
      } else {
        setHasError(true);
      }
    };
  */
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={styles.image}>
          {/* <ImageBackground
              ImageBackground
              source={mysmc_logo}
              style={styles.image_background}
              imageStyle={{ borderRadius: 2, resizeMode: "contain", height: 100 }}
               
            /> */}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          padding: 5,
          backgroundColor: "#FFF",
          marginTop: 35,
        }}
      >
        {isLoading ? (
          <RasLoading />
        ) : (
          <>
            <View style={{ marginTop: 100, marginBottom: 5 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Bienvenue sur la plateforme Mobile MySMC. Connectez-vous pour
                continuer
              </Text>
            </View>
            <DefaultInput
              placeholder="Login"
              value={login}
              onValueChange={(value) => setLogin(value)}
              hasError={hasError && !login.length}
            />
            <DefaultInput
              placeholder="Password"
              isPassword
              value={password}
              onValueChange={(value) => setPassword(value)}
              hasError={hasError && !password.length}
            />
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: isLoading ? "gray" : "#F67C23",
                },
              ]}
              //onPress={()=> authentication()}
            >
              <Text style={{ color: "#FFF" }}>Se conneter</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    marginTop: 15,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: Math.ceil(Dimensions.get("screen").width / 5),
    height: Math.ceil(Dimensions.get("screen").width / 5),
    margin: 5,
  },

  app: {
    width: Math.ceil(Dimensions.get("screen").width / 5),
    height: Math.ceil(Dimensions.get("screen").width / 5),
    backgroundColor: "#400E32",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
