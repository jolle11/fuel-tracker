import { Modal, Paper, Button, Loader, Text } from "@mantine/core";

const DeleteVehicleModal = ({
	open,
	setOpen,
	handleDeleteVehicle,
	loading,
}) => {
	return (
		<Modal
			opened={open === "delete-vehicle"}
			title="Delete vehicle"
			centered
			onClose={() => {
				setOpen("");
			}}
		>
			<Paper px={20} pb={20} radius="md">
				<Text>Are you sure you want to delete this car?</Text>
				<Button
					fullWidth
					variant="outline"
					color="red.9"
					mt="lg"
					disabled={loading ?? true}
					onClick={handleDeleteVehicle}
				>
					{loading ? <Loader color="blue" size={"sm"} /> : "Trash it!"}
				</Button>
			</Paper>
		</Modal>
	);
};

export default DeleteVehicleModal;
