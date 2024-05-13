import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Provider } from "jotai";

const theme = createTheme({
	fontFamily: "DM Sans, sans-serif",
	fontFamilyMonospace: "DM Sans, sans-serif",
	headings: { fontFamily: "DM Sans, sans-serif" },
	defaultRadius: "md",
	primaryColor: "indigo",
	primaryShade: 7,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<MantineProvider theme={theme}>
				<App />
			</MantineProvider>
		</Provider>
	</React.StrictMode>,
);
