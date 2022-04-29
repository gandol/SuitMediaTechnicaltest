import React from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import {NavigationalHeader} from "../../components/molecules/Header/NavigationalHeader";
import {ButtonMain} from "../../components/molecules/Button/Button";
import {
    MediumText,
    RegularText,
} from "../../components/molecules/Text/MainText";
import {
    FoundUserIcon,
    NotFoundUserIcon,
} from "../../components/molecules/Icons/UserIcon";
import {Gap} from "../../components/molecules/Gap/Gap";
import {MainRoutes, RootStackScreenProps} from "../../util/type/NavigationType";
import {useReduxSelector} from "../../redux";
import {getSelectedUser, getUserName} from "../../redux/state/UserState";

type HomeScreenProps = {
    navigation: RootStackScreenProps<MainRoutes.HomeScreen>;
};
export default function HomeScreen({
    navigation,
}: HomeScreenProps): React.ReactElement {
    const userName = useReduxSelector(getUserName);
    const selectedUser = useReduxSelector(getSelectedUser);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={"white"}
                translucent={false}
            />
            {selectedUser ? (
                <Gap height={70} />
            ) : (
                <NavigationalHeader title={"Home"} canGoBack={true} />
            )}

            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    paddingHorizontal: 10,
                }}>
                <View style={{width: "95%", marginTop: 10}}>
                    <RegularText style={{fontSize: 12}}>Welcome</RegularText>
                    <MediumText style={{fontSize: 18}}>{userName}</MediumText>
                </View>
                <Gap height={90} />
                {selectedUser ? <FoundUserIcon /> : <NotFoundUserIcon />}
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 25,
                    left: 0,
                    width: "100%",
                    alignItems: "center",
                }}>
                <View style={{width: "90%"}}>
                    <ButtonMain
                        title={"Choose a User"}
                        onPress={() => {
                            navigation.navigate(MainRoutes.UsersListScreen);
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
