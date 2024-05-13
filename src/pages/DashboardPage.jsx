import { useAtom } from "jotai";
import { userAtom, userVehiclesAtom } from "atoms/user";
import { Container, Title, Flex, Loader, Group } from "@mantine/core";
import { userAuthenticatedAtom } from "atoms/auth";
import { useEffect, useState } from "react";
import {
	useCreateVehicle,
	useDeleteVehicle,
	useListVehicles,
	useRegisterKms,
} from "hooks/vehicles/useVehicleActions";
import VehicleCard from "components/Cards/VehicleCard";
import NewVehicleCard from "components/Cards/NewVehicleCard";
import { useForm } from "@mantine/form";
import { vehicleAtom } from "atoms/vehicle";
import NewVehicleModal from "components/Modals/NewVehicleModal";
import AddFuelModal from "components/Modals/AddFuelModal";
import DeleteVehicleModal from "components/Modals/DeleteVehicleModal";
import { useNotifications } from "hooks/notifications/useNotifications";
import { Check } from "iconoir-react";

const DashboardPage = () => {
	const [user] = useAtom(userAtom);
	const [vehicle] = useAtom(vehicleAtom);
	const [userAuthenticated] = useAtom(userAuthenticatedAtom);
	const [userVehicles, setUserVehicles] = useAtom(userVehiclesAtom);

	const listVehicles = useListVehicles();
	const createVehicle = useCreateVehicle();
	const registerKm = useRegisterKms();
	const deleteVehicle = useDeleteVehicle();
	const notification = useNotifications();

	const [loading, setLoading] = useState(true);
	const [list, setList] = useState(false);

	const [open, setOpen] = useState("");

	const createVehicleForm = useForm({
		initialValues: {
			user_id: "",
			brand: "",
			nameplate: "",
			color: "",
			current_kms: 0,
		},
	});

	// TODO: control km input can't be less than last km??

	const addFuelForm = useForm({
		initialValues: {
			vehicle_id: vehicle.id,
			km: vehicle.last_km,
			paid: "",
			price: "",
		},
	});

	const handleNewVehicle = createVehicleForm.onSubmit((values) => {
		values.user_id = user.id;
		setLoading(true);
		setOpen("");
		createVehicle(values)
			.then((response) => {
				registerKm({ vehicle_id: response.id, km: values.current_kms });
				setTimeout(() => {
					setList(true);
				}, 1000);
				createVehicleForm.reset();
				notification({
					type: "success",
					message: "Vehicle created successfully!",
					icon: <Check />,
				});
			})
			.catch((error) => console.error(error));
	});

	const handleAddFuel = addFuelForm.onSubmit((values) => {
		values.vehicle_id = vehicle.id;
		setLoading(true);
		setOpen("");
		registerKm(values)
			.then(() => {
				setTimeout(() => {
					setList(true);
				}, 1000);
				addFuelForm.reset();
				notification({
					type: "success",
					message: "Km added successfully!",
					icon: <Check />,
				});
			})
			.catch((error) => console.error(error));
	});

	const handleDeleteVehicle = () => {
		setLoading(true);
		setOpen("");
		deleteVehicle(vehicle.id)
			.then(() => {
				notification({
					type: "success",
					message: "Vehicle deleted successfully!",
					icon: <Check />,
				});
				setUserVehicles(userVehicles.filter((item) => item.id !== vehicle.id));
				setLoading(false);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		setLoading(true);
		const localVehicles = JSON.parse(localStorage.getItem("vehicles"));
		if (userAuthenticated && userVehicles.length !== localVehicles.length) {
			listVehicles(user.id)
				.then((response) => {
					localStorage.setItem("vehicles", JSON.stringify(response.items));
					setUserVehicles(response.items);
					setLoading(false);
				})
				.catch((error) => console.error(error));
		} else {
			setLoading(false);
		}
	}, [user, list]);

	// TODO: add ability to change username from this screen

	return userAuthenticated ? (
		<Container size={"lg"} my={"xl"}>
			<Flex my={"xl"} align={"center"} direction={"column"} wrap={"wrap"}>
				<Title>Hello {user.username}!</Title>
				<Flex gap={"md"} my={"xs"} justify={"center"} wrap={"wrap"}>
					{loading && <Loader size={"xl"} mt={"xl"} />}
					{!(loading || userVehicles.length) && (
						<NewVehicleCard openModal={setOpen} />
					)}
					{!loading && !!userVehicles.length && (
						<Flex direction={"column"} justify={"center"} align={"center"}>
							<NewVehicleCard openModal={setOpen} />
							<Group justify="center">
								{userVehicles.map((vehicle) => (
									<VehicleCard
										key={vehicle.id}
										vehicle={vehicle}
										openModal={setOpen}
										user={user}
									/>
								))}
							</Group>
						</Flex>
					)}
				</Flex>
			</Flex>
			<AddFuelModal
				open={open}
				setOpen={setOpen}
				addFuelForm={addFuelForm}
				handleAddFuel={handleAddFuel}
				loading={loading}
				last_km={vehicle.last_km}
				user={user}
			/>
			<NewVehicleModal
				open={open}
				setOpen={setOpen}
				createVehicleForm={createVehicleForm}
				handleNewVehicle={handleNewVehicle}
				loading={loading}
			/>
			<DeleteVehicleModal
				open={open}
				setOpen={setOpen}
				handleDeleteVehicle={handleDeleteVehicle}
				loading={loading}
			/>
		</Container>
	) : (
		<Container size={"lg"} my={"xl"}>
			<Flex my={"xl"} align={"center"} direction={"column"} wrap={"wrap"}>
				<Title>Take control of your vehicle/s</Title>
			</Flex>
		</Container>
	);
};

export default DashboardPage;
