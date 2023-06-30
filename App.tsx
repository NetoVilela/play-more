import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider} from "native-base";

// Pages
import { HomePage } from "./src/pages/Home";

export default function App() {
	return (
		<NativeBaseProvider>
			<HomePage />
			<StatusBar style="auto" />
		</NativeBaseProvider>
	);
}