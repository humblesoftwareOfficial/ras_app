import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";
import { Dimensions } from "react-native";

const ITEM_HEIGHT = Math.ceil(Dimensions.get("screen").width / 8);

export const ITEM_APPLICATION_CARD_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "yellow"
  },
  top_right: {
    flexDirection: "row",
  },
  top_left: {
    flexDirection: "row",
    flex: 1,
  },
  service_container: {
    padding: 5,
    backgroundColor: 'rgba(84, 3, 117, 0.8)',//APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 5
  },
  center: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  application_name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  status: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  status_text: {
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
    borderRightWidth: 2,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  service_name: {
    marginLeft: 5,
    fontFamily: FONTS.bold,
    color: APP_COLORS.BLACK_COLOR.color,
    fontSize: 16
  },
  status: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

});
