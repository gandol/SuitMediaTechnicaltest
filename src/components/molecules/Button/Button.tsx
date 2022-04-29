import React from "react";
import {TouchableOpacity} from "react-native";
import Colors from "../../../Constant/Color";
import {MediumText} from "../Text/MainText";

type ButtonMainProps = {
    title: string;
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"];
};
export const ButtonMain = ({
    title,
    onPress,
}: ButtonMainProps): React.ReactElement => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: "100%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.mainBG,
                borderRadius: 8,
                marginBottom: 15,
            }}>
            <MediumText style={{color: "white"}}>{title}</MediumText>
        </TouchableOpacity>
    );
};
