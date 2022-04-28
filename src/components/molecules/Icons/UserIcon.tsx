import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {MediumText, RegularText} from "../Text/MainText";
import {useReduxSelector} from "../../../redux";
import {getSelectedUser} from "../../../redux/state/UserState";
import Colors from "../../../Constant/Color";
import {useNavigation} from "@react-navigation/native";
import {
    MainRoutes,
    NavigationScreenProps,
} from "../../../util/type/NavigationType";

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

export const NotFoundUserIcon = (): React.ReactElement => {
    return (
        <View style={{alignItems: "center"}}>
            <Image
                source={require("../../../../assets/images/usernotfound.png")}
                style={{width: 160, height: 160, borderRadius: 100}}
            />
            <View style={{marginTop: 30}}>
                <RegularText style={{color: Colors.inactiveUser, fontSize: 18}}>
                    Select a user to show the profile
                </RegularText>
            </View>
        </View>
    );
};

export const FoundUserIcon = (): React.ReactElement => {
    const selectedUser = useReduxSelector(getSelectedUser);
    const navigation = useNavigation<NavigationScreenProps>();
    return (
        <View style={{alignItems: "center"}}>
            <Image
                source={{uri: selectedUser?.avatar}}
                style={{width: 160, height: 160, borderRadius: 100}}
            />
            <View style={{marginTop: 30, alignItems: "center"}}>
                <MediumText style={{color: Colors.semiBoldUser, fontSize: 24}}>
                    {selectedUser?.fullName}
                </MediumText>
                <MediumText
                    style={{
                        color: Colors.semiBoldUser,
                        fontSize: 18,
                        marginTop: 10,
                    }}>
                    {selectedUser?.email}
                </MediumText>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(MainRoutes.WebViewScreen, {
                            url: selectedUser?.website,
                        });
                    }}>
                    <MediumText
                        style={{
                            color: Colors.mainBG,
                            fontSize: 18,
                            marginTop: 10,
                            textDecorationLine: "underline",
                        }}>
                        website
                    </MediumText>
                </TouchableOpacity>
            </View>
        </View>
    );
};
