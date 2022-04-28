import React from "react";
import AppNavigation from "./src/navigation";
import {Provider} from "react-redux";
import store from "./src/redux";
import {enableLatestRenderer} from "react-native-maps";

export default function App(): React.ReactElement {
    enableLatestRenderer();
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
