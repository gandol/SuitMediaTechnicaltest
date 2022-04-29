import React from "react";
import {TextInput, View} from "react-native";

type DefaultProps = {
    placeholder: string;
    onChangeText: React.ComponentProps<typeof TextInput>["onChangeText"];
    value: string;
};
export const DefaultTextInput = ({
    placeholder,
    onChangeText,
    value,
}: DefaultProps): React.ReactElement => {
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 10,
            }}>
            <TextInput
                style={{
                    padding: 0,
                    width: "100%",
                    fontFamily: "Poppins-Regular",
                }}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};
