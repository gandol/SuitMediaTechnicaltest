import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {MediumText, RegularText} from "../Text/MainText";

type UsersListCardProps = {
    name: string;
    email: string;
    image: string;
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"];
};
export const UsersListCard = ({
    name,
    email,
    image,
    onPress,
}: UsersListCardProps): React.ReactElement => {
    return (
        <View style={{width: "100%", paddingHorizontal: 10, marginBottom: 10}}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    width: "100%",
                    flexDirection: "row",
                    borderBottomWidth: 0.3,
                    paddingVertical: 10,
                    alignItems: "center",
                }}>
                <View style={{width: "20%"}}>
                    <Image
                        source={{uri: image}}
                        style={{width: 50, height: 50, borderRadius: 50}}
                    />
                </View>
                <View style={{width: "80%"}}>
                    <MediumText style={{color: "black", fontSize: 16}}>
                        {name}
                    </MediumText>
                    <RegularText style={{fontSize: 10}}>{email}</RegularText>
                </View>
            </TouchableOpacity>
        </View>
    );
};
