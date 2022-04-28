import React from "react";
import {View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export const UserLoginIcon = (): React.ReactElement => {
    return (
        <View
            style={{
                width: 110,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(218,218,218,0.71)",
                borderRadius: 100,
            }}>
            <Feather name={"user-plus"} size={30} color={"white"} />
        </View>
    );
};
