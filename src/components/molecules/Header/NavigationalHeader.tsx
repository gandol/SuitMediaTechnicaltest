import React from "react";
import {TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Shadow} from "../../../Constant/Shadow";
import {MediumText} from "../Text/MainText";
import Colors from "../../../Constant/Color";
import {useNavigation} from "@react-navigation/native";
import {
    MainRoutes,
    NavigationScreenProps,
} from "../../../util/type/NavigationType";

type NavigationHeaderProps = {
    iconName?: string;
    onPressIcon?: React.ComponentProps<typeof TouchableOpacity>["onPress"];
    title?: string;
    canGoBack?: boolean;
    reset?: boolean;
};
export const NavigationalHeader = ({
    iconName,
    onPressIcon,
    title,
    canGoBack,
    reset,
}: NavigationHeaderProps): React.ReactElement => {
    const navigation = useNavigation<NavigationScreenProps>();
    return (
        <View
            style={{
                overflow: "hidden",
                paddingBottom: 5,
            }}>
            <View
                style={[
                    {
                        width: "100%",
                        height: 60,
                        backgroundColor: "white",
                        justifyContent: "center",
                        paddingHorizontal: 10,
                    },
                    Shadow,
                ]}>
                <View
                    style={{
                        width: "100%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <MediumText style={{color: Colors.mainBG, fontSize: 18}}>
                        {title}
                    </MediumText>
                </View>
                <TouchableOpacity
                    style={{
                        width: 70,
                        position: "absolute",
                        left: 10,
                    }}
                    onPress={() => {
                        if (reset) {
                            navigation.reset({
                                index: 0,
                                routes: [{name: MainRoutes.HomeScreen}],
                            });
                            return;
                        }
                        if (canGoBack) {
                            navigation.goBack();
                        }
                    }}>
                    <Feather
                        name={"chevron-left"}
                        size={30}
                        color={Colors.mainBG}
                    />
                </TouchableOpacity>
                {iconName ? (
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 15,
                        }}
                        onPress={onPressIcon}>
                        <FontAwesome5
                            name={iconName}
                            size={26}
                            color={Colors.mainBG}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
};
