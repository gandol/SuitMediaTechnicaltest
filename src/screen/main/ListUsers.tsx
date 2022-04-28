import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    SafeAreaView,
    View,
} from "react-native";
import {NavigationalHeader} from "../../components/molecules/Header/NavigationalHeader";
import React, {useEffect} from "react";
import {UserDataType, UserReponseType} from "../../util/type/UserReponseType";
import ApiCall from "../../util/function/ApiCall";
import Endpoints from "../../Constant/Endpoints";
import {UsersListCard} from "../../components/molecules/Cards/UsersListCard";
import Colors from "../../Constant/Color";
import {useReduxDispatch, useReduxSelector} from "../../redux";
import {setSelectedUser} from "../../redux/state/UserState";
import {MainRoutes, RootStackScreenProps} from "../../util/type/NavigationType";
import {MainHeight} from "../../Constant/MainHeight";
import {
    getUserList,
    resetUserList,
    setUserList,
} from "../../redux/state/UserListState";
import {markerList} from "../../Constant/Markerlist";

type Props = {
    navigation: RootStackScreenProps<MainRoutes.UsersListScreen>;
};
export default function ListAllUsersScreen({navigation}: Props) {
    // const [users, setUsers] = React.useState<UserDataType[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const users = useReduxSelector(getUserList);
    const dispatch = useReduxDispatch();

    const getUsersData = async (
        pageNumber: number,
        refresh: boolean = false,
    ) => {
        try {
            const {data} = await ApiCall.get(
                `${Endpoints.users}?page=${pageNumber}&per_page=10`,
            );
            const responseData: UserReponseType = data;
            if (responseData.data.length > 0) {
                let tmpData: UserDataType[] = [];
                if (refresh) {
                    tmpData = responseData.data;
                    // dispatch(setUserList(responseData.data));
                } else {
                    const oldtusers = [...users];
                    const newUsers = responseData.data;
                    //check if the user is already in the list
                    newUsers.forEach(user => {
                        if (!oldtusers.some(u => u.id === user.id)) {
                            oldtusers.push(user);
                        }
                    });
                    tmpData = oldtusers;
                }
                tmpData.map((user, index) => {
                    if (markerList.length > index) {
                        user.latitude = markerList[index].lat;
                        user.longitude = markerList[index].long;
                    }
                });
                dispatch(setUserList(tmpData));
                setIsLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUsersData(1, true);
    }, []);

    if (isLoading) {
        return (
            <SafeAreaView>
                <ActivityIndicator size="small" color={Colors.mainBG} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <NavigationalHeader
                title={"Users"}
                canGoBack={true}
                iconName={"map-marker-alt"}
                onPressIcon={() =>
                    navigation.navigate(MainRoutes.UsersMapScreen)
                }
                // iconName={"list-ul"}
            />
            <View
                style={{
                    width: "100%",
                    height: MainHeight,
                }}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => {
                                dispatch(resetUserList());
                                setPage(1);
                                getUsersData(1, true);
                            }}
                        />
                    }
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        // console.log("onEndReached");
                        setPage(page + 1);
                        getUsersData(page + 1, false);
                    }}
                    data={users}
                    renderItem={({item}) => (
                        <UsersListCard
                            name={`${item.first_name} ${item.last_name}`}
                            email={item.email}
                            image={item.avatar}
                            onPress={() => {
                                dispatch(
                                    setSelectedUser({
                                        fullName: `${item.first_name} ${item.last_name}`,
                                        email: item.email,
                                        website: "https://suitmedia.com/",
                                        avatar: item.avatar,
                                    }),
                                );
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: MainRoutes.HomeScreen}],
                                });
                            }}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
