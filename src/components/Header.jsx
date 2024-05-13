import {
	Box,
	Burger,
	Button,
	Center,
	Container,
	Drawer,
	Group,
	ScrollArea,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Garage, ProfileCircle } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import { userAuthenticatedAtom } from "atoms/auth";
import { useAtom } from "jotai";
import { useLogout } from "hooks/auth/useLogout";
import { userAtom } from "atoms/user";
import ThemeButton from "./ThemeButton";

export function Header() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);

	const [user] = useAtom(userAtom);

	const navigate = useNavigate();

	const logout = useLogout();

	const [userAuthenticated] = useAtom(userAuthenticatedAtom);

	return (
		<Box style={{ boxShadow: "0px 0px 5px gray" }}>
			<header>
				<Container size={"lg"}>
					<Group justify="space-between" h="100%" py={12}>
						<Group>
							<Button onClick={() => navigate("/")}>
								<Garage /> &nbsp; My garage
							</Button>
						</Group>
						<Button.Group visibleFrom="sm">
							<ThemeButton />
							{userAuthenticated ? (
								<>
									<Button
										variant="light"
										onClick={() => navigate(`/${user.username}`)}
									>
										<ProfileCircle />
									</Button>
									<Button color="red.9" variant="light" onClick={logout}>
										Logout
									</Button>
								</>
							) : (
								<>
									<Button variant="light" onClick={() => navigate("/login")}>
										Log in
									</Button>
									<Button onClick={() => navigate("/register")}>
										Register
									</Button>
								</>
							)}
						</Button.Group>
						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							hiddenFrom="sm"
						/>
					</Group>
				</Container>
			</header>
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" px={15}>
					<Center pb={20}>
						<Button.Group>
							<ThemeButton />
							{userAuthenticated && (
								<Button
									variant="light"
									onClick={() => navigate(`/${user.username}`)}
								>
									<ProfileCircle />
								</Button>
							)}
						</Button.Group>
					</Center>
					<Center pb={20}>
						<Button
							variant="transparent"
							onClick={() => {
								closeDrawer();
								navigate("/");
							}}
						>
							Home
						</Button>
					</Center>
					<Group justify="center" grow pb="xl" px="md">
						{userAuthenticated ? (
							<Button color="red.9" variant="light" onClick={logout}>
								Logout
							</Button>
						) : (
							<>
								<Button
									variant="light"
									onClick={() => {
										navigate("/login");
										closeDrawer();
									}}
								>
									Log in
								</Button>
								<Button
									onClick={() => {
										navigate("/register");
										closeDrawer();
									}}
								>
									Register
								</Button>
							</>
						)}
					</Group>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}
