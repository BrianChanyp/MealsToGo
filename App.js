import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/features/restaurants/screens/restarantsScreen";

export default function App() {
	const [oswaldLoaded] = useFonts({
		Oswald_400Regular,
	});
	const [latoLoaded] = useFonts({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantScreen />
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
