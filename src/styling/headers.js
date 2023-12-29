import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";
import { Dimensions } from "react-native";

export const DASHBOARD_HEADER_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  left: {
    // flex: 1,
    flexDirection: "row"
  },
  right: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  app_name_container: {
    flexDirection: "row",
    padding: 5,
    // backgroundColor: APP_COLORS.WHITE_COLOR.color,
    // borderWidth: 1,
    // borderColor: APP_COLORS.GRAY_COLOR.color,
    // borderRadius: 5,
  },
  item: {
    padding: 7,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  item_label: {
    color: APP_COLORS.BLACK_COLOR.color,
    fontFamily: FONTS.regular
  }
});

export const ALARMS_DASHBOARD_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flex: 1,
    marginLeft: 5
  },
  item: {
    margin: 2,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    minWidth: Math.ceil(Dimensions.get("window").height / 20),
    backgroundColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    shadowColor: "#B3B3B3",
  },
  right: {
    flexDirection: "row"
  },
  title: {
    color: APP_COLORS.BLACK_COLOR.color,
    fontFamily: FONTS.bold,
    // fontSize: 20,
  }
})