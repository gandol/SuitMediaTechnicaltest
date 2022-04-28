import {StackNavigationProp} from "@react-navigation/stack";
import {CompositeNavigationProp} from "@react-navigation/native";

declare global {
    namespace Reactnavigation {
        interface RooParamList extends RootStackParamList {}
    }
}

export enum MainRoutes {
    LoginScreen = "LoginScreen",
    HomeScreen = "HomeScreen",
    WebViewScreen = "WebViewScreen",
    UsersListScreen = "UsersListScreen",
    UsersMapScreen = "UsersMapScreen",
}

export type RootStackParamList = {
    [MainRoutes.LoginScreen]: undefined;
    [MainRoutes.HomeScreen]: undefined;
    [MainRoutes.WebViewScreen]: {url: string | undefined};
    [MainRoutes.UsersListScreen]: undefined;
    [MainRoutes.UsersMapScreen]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    StackNavigationProp<RootStackParamList, Screen>;

export type NavigationScreenProps = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    any
>;
