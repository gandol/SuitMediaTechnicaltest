import React from "react";
import {View} from "react-native";

type GapProps = {
    height: number;
};
export const Gap = ({height}: GapProps): React.ReactElement => {
    return <View style={{height: height}} />;
};
