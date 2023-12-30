import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "./polices";
import { APP_COLORS } from "./colors";

export const HEIGHT_BAR = Math.ceil(Dimensions.get('window').height / 3);
export const WIDTH_INNER_BAR = Math.ceil(Dimensions.get('window').width / 8);
export const MAX_INNER_BAR_HEIGHT = Math.ceil(Dimensions.get('window').height / 4.2);
export const ITEM_STATUS_HEIGHT = Math.ceil(Dimensions.get("screen").width / 8);
export const CHECK_DURATION_BADGE =  Math.ceil(Dimensions.get("screen").width / 12);

export const STATISTICS_STYLE = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 5,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    // color: "#FFF"
  },
  recap_container: {
    backgroundColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    shadowColor: APP_COLORS.PRIMARY_COLOR.color,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    // borderWidth: 1,
    borderColor: "#DADADA"
  },
  recap: {
    flexDirection: "row", 
   
    // padding: 10,
    // margin: 10,
    
  },
  stats_recap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  recap_bar: {
    height: HEIGHT_BAR,
    padding: 5,
    borderRadius: 20,
    // alignItems: "center",
    // justifyContent: "center"
  },
  recap_inner_bar: {
    width: WIDTH_INNER_BAR,
    borderRadius: 20,
    shadowColor: '#9E4607',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  legend: {
    transform: [{ rotate: '270deg' }],
    // fontSize: 20,
    color: "#FFF"
  },
  tests: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 10
  },
  float_icon: {
    position: "absolute",

  }
});

export const CARD_STATISTICS_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#CFCFCF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    // borderWidth: 1,
    borderColor: "#CFCFCF",
    flexDirection: "row"
  },
  status: {
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    // width: ITEM_STATUS_HEIGHT,
    borderRadius: 10,
    height: ITEM_STATUS_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  status_text: {
    fontFamily: FONTS.bold,
    fontSize: 7
  },
  check_duration: {
    // width: CHECK_DURATION_BADGE,
    // height: CHECK_DURATION_BADGE,
    backgroundColor: "#E6E6E6",
    borderRadius:10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
})
