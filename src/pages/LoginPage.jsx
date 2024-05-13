import {
	Anchor,
	Button,
	Container,
	Group,
	Loader,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "hooks/auth/useLogin";
import { Check, Xmark } from "iconoir-react";
import { tokenAtom, userAuthenticatedAtom } from "atoms/auth";
import { useAtom } from "jotai";
import { useNotifications } from "hooks/notifications/useNotifications";
import { useState } from "react";
import { userAtom } from "atoms/user";
import { useGoogleLogin } from "hooks/auth/useGoogleLogin";
import GoogleIcon from "components/GoogleIcon";

const LoginPage = () => {
	const navigate = useNavigate();
	const notification = useNotifications();
	const login = useLogin();
	const googleLogin = useGoogleLogin();

	const [, setToken] = useAtom(tokenAtom);
	const [, setUserAuthenticated] = useAtom(userAuthenticatedAtom);
	const [, setUser] = useAtom(userAtom);

	const [loading, setLoading] = useState(false);

	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},
	});

	const handleLogin = form.onSubmit((values) => {
		setLoading(true);
		login(values)
			.then((response) => {
				console.log(response);
				setToken(response.token);
				setUserAuthenticated(true);
				setUser(response.record);
				notification({
					type: "success",
					message: `Welcome back ${response.record.username}`,
					icon: <Check />,
				});
				navigate("/");
				setLoading(false);
			})
			.catch((error) => {
				notification({
					type: "error",
					message: error.message,
					icon: <Xmark />,
				});
				navigate("/");
				setLoading(false);
			});
	});

	const handleSocialLogin = () => {
		googleLogin()
			.then((response) => {
				setToken(response.token);
				setUserAuthenticated(true);
				setUser(response.record);
				notification({
					type: "success",
					message: `Welcome back ${response.record.username}`,
					icon: <Check />,
				});
				navigate("/");
				setLoading(false);
			})
			.catch((error) => {
				notification({
					type: "error",
					message: error.message,
					icon: <Xmark />,
				});
				navigate("/");
				setLoading(false);
			});
	};

	return (
		<Container size={420} my={40}>
			<Title ta="center">Welcome back!</Title>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<form onSubmit={handleLogin}>
					<TextInput
						label="Email"
						placeholder="you@gmail.com"
						required
						{...form.getInputProps("email")}
					/>
					<PasswordInput
						label="Password"
						placeholder="Your password"
						required
						mt="md"
						{...form.getInputProps("password")}
					/>
					<Group justify="center" gap={10}>
						<Button fullWidth mt="xl" type="submit" disabled={loading ?? true}>
							{loading ? <Loader color="blue" size={"sm"} /> : "Login"}
						</Button>
						<Button
							fullWidth
							variant="outline"
							disabled={loading ?? true}
							onClick={handleSocialLogin}
						>
							{loading ? (
								<Loader color="blue" size={"sm"} />
							) : (
								<>
									Login with &nbsp; <GoogleIcon />
								</>
							)}
						</Button>
						<Text c="dimmed" size="sm" ta="center">
							Do not have an account yet?&nbsp;
							<Anchor
								size="sm"
								component="button"
								onClick={() => navigate("/register")}
							>
								Register
							</Anchor>
						</Text>
					</Group>
				</form>
			</Paper>
		</Container>
	);
};

export default LoginPage;
