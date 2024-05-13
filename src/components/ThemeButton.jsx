import {
	Button,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core";
import { HalfMoon, SunLight } from "iconoir-react";

export const ThemeButton = () => {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<Button
			onClick={() =>
				setColorScheme(computedColorScheme === "light" ? "dark" : "light")
			}
			variant="light"
			color="yellow"
			p={6}
			aria-label="Toggle color scheme"
		>
			{computedColorScheme === "light" ? (
				<SunLight fontSize={14} />
			) : (
				<HalfMoon fontSize={14} />
			)}
		</Button>
	);
};

export default ThemeButton;
