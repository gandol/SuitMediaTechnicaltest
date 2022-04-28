import React from "react";
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StatusBar,
    View,
} from "react-native";
import {UserLoginIcon} from "../../components/molecules/Icons/UserIcon";
import {Gap} from "../../components/molecules/Gap/Gap";
import {DefaultTextInput} from "../../components/molecules/TextInput/SignInput";
import {ButtonMain} from "../../components/molecules/Button/Button";
import {checkPalindrome} from "../../util/function/PalindromeCheck";
import {MainRoutes, RootStackScreenProps} from "../../util/type/NavigationType";
import {useReduxDispatch} from "../../redux";
import {setUserName} from "../../redux/state/UserState";

const {width} = Dimensions.get("window");
type Props = {
    navigation: RootStackScreenProps<MainRoutes.LoginScreen>;
};
export default function SignScreen({navigation}: Props): React.ReactElement {
    const [name, setName] = React.useState("");
    const [palinddrome, setPalinddrome] = React.useState("");
    const dispatch = useReduxDispatch();

    const handleCheck = () => {
        const result = checkPalindrome(palinddrome);
        console.log(result);
    };
    return (
        <View style={{flex: 1}}>
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <ImageBackground
                source={require("../../../assets/images/bg.png")}
                style={{flex: 1, alignItems: "center"}}>
                <ScrollView>
                    <View
                        style={{
                            width: width,
                            alignItems: "center",
                            paddingHorizontal: 15,
                        }}>
                        <Gap height={180} />
                        <UserLoginIcon />
                        <View style={{width: "90%", marginTop: 50}}>
                            <DefaultTextInput
                                placeholder={"Name"}
                                onChangeText={text => {
                                    setName(text);
                                }}
                                value={name}
                            />
                            <DefaultTextInput
                                placeholder={"Palindrome"}
                                onChangeText={text => {
                                    setPalinddrome(text);
                                }}
                                value={palinddrome}
                            />
                            <Gap height={45} />
                            <ButtonMain title={"CHECK"} onPress={handleCheck} />
                            <ButtonMain
                                title={"NEXT"}
                                onPress={() => {
                                    if (name.length > 0) {
                                        dispatch(setUserName(name));
                                        navigation.navigate(
                                            MainRoutes.HomeScreen,
                                        );
                                    }
                                    // dispatch(setUserName(name));
                                    // navigation.navigate(MainRoutes.HomeScreen);
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
