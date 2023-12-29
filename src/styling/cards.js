import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";
import { Dimensions } from "react-native";

const ITEM_HEIGHT = Math.ceil(Dimensions.get("screen").width / 8);

export const SERVICE_CARD_HEIGHT = Math.ceil(Dimensions.get("window").width / 6);

export const ITEM_APPLICATION_CARD_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    shadowColor: "#ECECEC",
    borderWidth: 1,
    borderColor: "#ECECEC"
  },

  top: {
    flexDirection: "row",
  },
  status_text: {
    fontFamily: FONTS.bold,
    fontSize: 7
  },

  duration_text: {
    fontFamily: FONTS.bold,
    fontSize: 7
  },

  left: {
    flex: 1,
  },
  right: {
    flex: 5,
  },
  service: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    // borderRightWidth: 2,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
  },
  application_name: {
    marginLeft: 5,
    color: APP_COLORS.BLACK_COLOR.color,
  },
  status: {
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    // width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  bottom: {
    flexDirection: "row",
    margin: 5,
  },
  preview_status_time: {
    flex: 1,
    padding: 2,
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
    margin: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }

});

export const SERVICE_CARD = StyleSheet.create({
  main: {
    alignItems: "center",
    margin: 5
  },
  over_container: {
    borderRadius: SERVICE_CARD_HEIGHT,
    borderWidth: 1,
    margin: 2,
  },
  container: {
    padding: 5,
    margin: 5,
    borderRadius: SERVICE_CARD_HEIGHT,
    width: SERVICE_CARD_HEIGHT,
    height: SERVICE_CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    shadowColor: "#000",
  },
  pseudo: {
    fontFamily: FONTS.bold,
    fontSize: 14
  },
  service_name: {
    marginTop: 3,
    fontSize: 9,
  }
})