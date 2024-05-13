import {
	Anchor,
	Button,
	Container,
	Loader,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useRegister } from "hooks/auth/useRegister";
import { Check, Xmark } from "iconoir-react";
import { useNotifications } from "hooks/notifications/useNotifications";
import { useState } from "react";
import { useLogin } from "hooks/auth/useLogin";
import { useAtom } from "jotai";
import { userAuthenticatedAtom } from "atoms/auth";

const RegisterPage = () => {
	const navigate = useNavigate();
	const notification = useNotifications();
	const register = useRegister();
	const login = useLogin();

	const [loading, setLoading] = useState(false);

	const [, setUserAuthenticated] = useAtom(userAuthenticatedAtom);

	const form = useForm({
		initialValues: {
			username: "",
			email: "",
			emailVisibility: true,
			password: "",
			passwordConfirm: "",
			name: "",
			surname: "",
		},
	});

	const handleRegister = form.onSubmit((values) => {
		setLoading(true);
		register(values)
			.then((response) => {
				login({ email: response.email, password: values.password });
				setUserAuthenticated(true);
				notification({
					type: "success",
					message: `Welcome ${response.username}`,
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
				setLoading(false);
				navigate("/");
			});
	});

	return (
		<Container size={420} my={40}>
			<Title ta="center">Let's start tracking</Title>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<form onSubmit={handleRegister}>
					<TextInput
						label="Alias"
						placeholder="Your alias"
						required
						{...form.getInputProps("username")}
					/>
					<TextInput
						label="Email"
						placeholder="you@gmail.com"
						required
						{...form.getInputProps("email")}
					/>
					<TextInput
						label="Name"
						placeholder="Your name"
						required
						mt="md"
						{...form.getInputProps("name")}
					/>
					<TextInput
						label="Surname"
						placeholder="Your surname"
						required
						{...form.getInputProps("surname")}
					/>
					<PasswordInput
						label="Password"
						placeholder="Your password"
						required
						mt="md"
						{...form.getInputProps("password")}
					/>
					<PasswordInput
						label="Password confirmation"
						placeholder="Confirm your password"
						required
						{...form.getInputProps("passwordConfirm")}
					/>
					<Button fullWidth mt="xl" type="submit" disabled={loading ?? true}>
						{loading ? <Loader color="blue" size={"sm"} /> : "Register"}
					</Button>
					<Text c="dimmed" size="sm" ta="center" mt={5}>
						Already have an account yet?&nbsp;
						<Anchor
							size="sm"
							component="button"
							onClick={() => navigate("/login")}
						>
							Login
						</Anchor>
					</Text>
				</form>
			</Paper>
		</Container>
	);
};

export default RegisterPage;
