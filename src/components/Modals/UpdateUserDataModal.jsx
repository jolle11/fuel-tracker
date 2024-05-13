import { useState } from "react";
import { Modal, Paper, Button, Loader, TextInput, Select } from "@mantine/core";
import { useSetUserData } from "hooks/auth/useSetUserData";
import { useAtom } from "jotai";
import { userAtom } from "atoms/user";

export const UpdateUserDataModal = ({ open, setOpen, loading, setLoading }) => {
	const [user, setUser] = useAtom(userAtom);
	const [updatedUser, setUpdatedUser] = useState(user);
	const setUserData = useSetUserData();

	const handleUpdateUserData = async () => {
		setLoading(true);
		await setUserData(updatedUser);
		setUser(updatedUser);
		setOpen("");
	};

	const handleChange = (property, value) => {
		setUpdatedUser({
			...updatedUser,
			[property]: value,
		});
	};

	return (
		<Modal
			opened={open === "update-userdata"}
			title="Update userdata"
			centered
			onClose={() => {
				setOpen("");
			}}
		>
			<Paper px={20} pb={20} radius="md">
				<TextInput
					label="Username"
					placeholder="johnnyDoe"
					required
					data-autofocus
					value={updatedUser.username}
					onChange={(event) =>
						handleChange("username", event.currentTarget.value)
					}
				/>
				<TextInput
					label="Name"
					placeholder="John"
					required
					value={updatedUser.name}
					onChange={(event) => handleChange("name", event.currentTarget.value)}
				/>
				<TextInput
					label="Surname"
					placeholder="Doe"
					required
					value={updatedUser.surname}
					onChange={(event) =>
						handleChange("surname", event.currentTarget.value)
					}
				/>
				<Select
					required
					label="Currency"
					placeholder="Pick currency"
					data={["€", "$", "£", "¥"]}
					value={updatedUser.currency}
					onChange={(value) => handleChange("currency", value)}
				/>
				<Select
					required
					label="Measure unit"
					placeholder="Pick measure unit"
					data={["km", "mi"]}
					value={updatedUser.measure_unit}
					onChange={(value) => handleChange("measure_unit", value)}
				/>
				<Button
					fullWidth
					variant="outline"
					color="blue"
					mt="lg"
					disabled={loading ?? true}
					onClick={handleUpdateUserData}
				>
					{loading ? <Loader color="blue" size={"sm"} /> : "Update"}
				</Button>
			</Paper>
		</Modal>
	);
};
