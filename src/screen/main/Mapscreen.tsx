import React from "react";
import {Dimensions, Image, SafeAreaView, View} from "react-native";
import {NavigationalHeader} from "../../components/molecules/Header/NavigationalHeader";
import {MainHeight} from "../../Constant/MainHeight";
import MapView from "react-native-maps";
import {Mapsmaprker} from "../../components/molecules/Marker/MapMarker";
import {moreShadow} from "../../Constant/Shadow";
import {useReduxDispatch, useReduxSelector} from "../../redux";
import {getUserList} from "../../redux/state/UserListState";
import {UserDataType} from "../../util/type/UserReponseType";
import {MediumText} from "../../components/molecules/Text/MainText";
import {ButtonMain} from "../../components/molecules/Button/Button";
import {setSelectedUser} from "../../redux/state/UserState";
import {MainRoutes, RootStackScreenProps} from "../../util/type/NavigationType";

const {width} = Dimensions.get("window");

type Props = {
    navigation: RootStackScreenProps<MainRoutes.WebViewScreen>;
};
export default function Mapscreen({navigation}: Props): React.ReactElement {
    const users = useReduxSelector(getUserList);
    const dispatch = useReduxDispatch();
    const [selected, setSelected] = React.useState<UserDataType>();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <NavigationalHeader
                title={"Users"}
                canGoBack={true}
                iconName={"list-ul"}
                reset={true}
                onPressIcon={() =>
                    navigation.navigate(MainRoutes.UsersListScreen)
                }
            />
            <View style={{width: width, height: MainHeight}}>
                <MapView
                    style={{width: width, height: MainHeight}}
                    initialRegion={{
                        latitude: -6.910477,
                        longitude: 107.619092,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00921,
                    }}>
                    {users.map((item, index) => {
                        if (item.latitude && item.longitude) {
                            return (
                                <Mapsmaprker
                                    key={index}
                                    lat={item.latitude}
                                    lng={item.longitude}
                                    onPress={() => {
                                        setSelected(item);
                                    }}
                                />
                            );
                        }
                    })}
                </MapView>
                {selected ? (
                    <View
                        style={[
                            {
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: 250,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                                backgroundColor: "white",
                                paddingVertical: 20,
                                paddingHorizontal: 15,
                                alignItems: "center",
                            },
                            moreShadow,
                        ]}>
                        <Image
                            source={{uri: selected?.avatar}}
                            style={{
                                width: 84,
                                height: 84,
                                borderRadius: 80,
                                marginBottom: 15,
                            }}
                        />
                        <MediumText
                            style={{
                                color: "black",
                                fontSize: 16,
                            }}>{`${selected?.first_name} ${selected?.last_name}`}</MediumText>
                        <View
                            style={{
                                position: "absolute",
                                bottom: 20,
                                width: "100%",
                                alignItems: "center",
                            }}>
                            <View style={{width: "90%"}}>
                                <ButtonMain
                                    title={"Select"}
                                    onPress={() => {
                                        dispatch(
                                            setSelectedUser({
                                                fullName: `${selected.first_name} ${selected.last_name}`,
                                                email: selected.email,
                                                website:
                                                    "https://suitmedia.com/",
                                                avatar: selected.avatar,
                                            }),
                                        );
                                        navigation.reset({
                                            index: 0,
                                            routes: [
                                                {name: MainRoutes.HomeScreen},
                                            ],
                                        });
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                ) : null}
            </View>
        </SafeAreaView>
    );
}
