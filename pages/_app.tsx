import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import useDarkMode from "use-dark-mode";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/components.css";

const lightTheme = createTheme({
	type: "light",
	theme: {
		//   colors: {...}, // optional
	},
});

const darkTheme = createTheme({
	type: "dark",
	theme: {
		//   colors: {...}, // optional
	},
});

function MyApp({ Component, pageProps }) {
	const darkMode = useDarkMode(true);

	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
				<Header />
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
