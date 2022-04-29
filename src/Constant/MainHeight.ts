import {Dimensions, Platform, StatusBar} from "react-native";

const heihth = Dimensions.get("window").height;
const statusBarHeight = StatusBar.currentHeight;
const androidMinus = 65 + (statusBarHeight ? statusBarHeight : 0);
export const MainHeight = heihth - (Platform.OS === "ios" ? 120 : androidMinus);
