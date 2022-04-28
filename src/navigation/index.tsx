import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {MainRoutes, RootStackParamList} from "../util/type/NavigationType";
import {NavigationContainer} from "@react-navigation/native";
import SignScreen from "../screen/auth/SignScreen";
import HomeScreen from "../screen/main/HomeScreen";
import ListAllUsersScreen from "../screen/main/ListUsers";
import WebViewScreen from "../screen/main/WebviewScreen";
import Mapscreen from "../screen/main/Mapscreen";

const MainNavigation = createStackNavigator<RootStackParamList>();
export default function AppNavigation(): React.ReactElement {
    return (
        <NavigationContainer>
            <MainNavigation.Navigator>
                <MainNavigation.Screen
                    name={MainRoutes.LoginScreen}
                    component={SignScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainNavigation.Screen
                    name={MainRoutes.HomeScreen}
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainNavigation.Screen
                    name={MainRoutes.UsersListScreen}
                    component={ListAllUsersScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainNavigation.Screen
                    name={MainRoutes.WebViewScreen}
                    component={WebViewScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainNavigation.Screen
                    name={MainRoutes.UsersMapScreen}
                    component={Mapscreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </MainNavigation.Navigator>
        </NavigationContainer>
    );
}
