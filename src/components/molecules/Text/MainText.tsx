import React from "react";
import {Text as DefaultText} from "react-native";

type DefaultTextProps = DefaultText["props"];

export const RegularText = (props: DefaultTextProps) => {
    return (
        <DefaultText
            {...props}
            style={[props.style, {fontFamily: "Poppins-Regular"}]}
        />
    );
};

export const BoldText = (props: DefaultTextProps) => {
    return (
        <DefaultText
            {...props}
            style={[props.style, {fontFamily: "Poppins-Bold"}]}
        />
    );
};

export const MediumText = (props: DefaultTextProps) => {
    return (
        <DefaultText
            {...props}
            style={[props.style, {fontFamily: "Poppins-Medium"}]}
        />
    );
};

export const ThinText = (props: DefaultTextProps) => {
    return (
        <DefaultText
            {...props}
            style={[props.style, {fontFamily: "Poppins-Thin"}]}
        />
    );
};
