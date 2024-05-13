import { Container, Title, Text, Flex, Button } from "@mantine/core";
import { userAtom } from "atoms/user";
import { UpdateUserDataModal } from "components/Modals/UpdateUserDataModal";
import { useAtom } from "jotai";
import { useState } from "react";

const UserPage = () => {
	const [user] = useAtom(userAtom);
	const [open, setOpen] = useState("");
	const [loading, setLoading] = useState(false);

	return (
		<Container size={"lg"} my={"xl"}>
			<Flex justify="center" align={"center"} direction={"column"} gap={10}>
				<Title>
					{user.name} {user.surname}
				</Title>
				<Text>Username: {user.username}</Text>
				<Text>Name: {user.name}</Text>
				<Text>Surname: {user.surname}</Text>
				<Text>Currency: {user.currency}</Text>
				<Text>Measure unit: {user.measure_unit}</Text>
				<Text>Email: {user.email}</Text>
				<Text>
					Registered at:&nbsp;
					{new Date(user.created)
						.toISOString()
						.replace(/T/, " ")
						.replace(/\..+/, "")
						.replace(/-/g, "/")}
				</Text>
				<Button onClick={() => setOpen("update-userdata")}>Edit data</Button>
			</Flex>
			<UpdateUserDataModal
				open={open}
				setOpen={setOpen}
				loading={loading}
				setLoading={setLoading}
			/>
		</Container>
	);
};

export default UserPage;
