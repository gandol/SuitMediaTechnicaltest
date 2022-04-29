import React from "react";
import {Marker} from "react-native-maps";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

type MapMarkerProps = {
    lat: number;
    lng: number;
    onPress: React.ComponentProps<typeof Marker>["onPress"];
};
export const Mapsmaprker = ({
    lat,
    lng,
    onPress,
}: MapMarkerProps): React.ReactElement => {
    return (
        <Marker coordinate={{latitude: lat, longitude: lng}} onPress={onPress}>
            <FontAwesome5 name={"map-marker-alt"} size={40} color={"red"} />
        </Marker>
    );
};
