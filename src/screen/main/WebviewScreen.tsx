import React from "react";
import {ActivityIndicator, SafeAreaView, View} from "react-native";
import {NavigationalHeader} from "../../components/molecules/Header/NavigationalHeader";
import {MainHeight} from "../../Constant/MainHeight";
import WebView from "react-native-webview";
import {MainRoutes, RootStackParamList} from "../../util/type/NavigationType";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import Colors from "../../Constant/Color";

type Props = NativeStackScreenProps<
    RootStackParamList,
    MainRoutes.WebViewScreen
>;
export default function WebViewScreen({route}: Props): React.ReactElement {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <NavigationalHeader title={""} canGoBack={true} />
            <View style={{width: "100%", height: MainHeight}}>
                <WebView
                    source={{uri: route.params.url as string}}
                    startInLoadingState={true}
                    renderLoading={() => (
                        <View style={{position: "absolute", width: "100%"}}>
                            <ActivityIndicator
                                size={"large"}
                                color={Colors.mainBG}
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
