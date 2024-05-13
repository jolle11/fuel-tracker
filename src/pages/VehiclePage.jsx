import { Container, Flex, Loader } from "@mantine/core";
import { useAtom } from "jotai";
import { vehicleAtom } from "atoms/vehicle";
import BrandLogo from "components/BrandLogo";
import { useEffect, useState } from "react";
import { useDeleteVehicle, useListKms } from "hooks/vehicles/useVehicleActions";
import useDateFormat from "hooks/utils/useDateFormat";
import { kmAtom } from "atoms/km";
import KmTable from "components/KmTable";
import KmLineChart from "components/KmLineChart";
import NameplateBadge from "components/NameplateBadge";
import { Check } from "iconoir-react";
import { useNotifications } from "hooks/notifications/useNotifications";
import { userAtom, userVehiclesAtom } from "atoms/user";
import DeleteVehicleModal from "components/Modals/DeleteVehicleModal";
import { useNavigate } from "react-router-dom";
import VehiclePageMenu from "components/Menus/VehiclePageMenu";

const VehiclePage = () => {
	const [vehicle, setVehicle] = useAtom(vehicleAtom);
	const [kms, setKms] = useAtom(kmAtom);
	const [userVehicles, setUserVehicles] = useAtom(userVehiclesAtom);
	const [user] = useAtom(userAtom);

	const dateFormat = useDateFormat();
	const listKm = useListKms();
	const deleteVehicle = useDeleteVehicle();
	const notification = useNotifications();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState("");

	const selectedVehicle = JSON.parse(localStorage.getItem("selectedVehicle"));

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
				navigate("/");
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (!!vehicle && selectedVehicle !== undefined) {
			setVehicle(selectedVehicle);
		}
	}, []);

	useEffect(() => {
		if (selectedVehicle) {
			listKm(selectedVehicle.id).then((response) => {
				const formattedKms = response.items.map((item) => ({
					...item,
					created: dateFormat(item.created),
				}));
				setKms(formattedKms);
				setLoading(false);
			});
		}
	}, [vehicle]);

	return (
		<Container size={"lg"} my={"xl"}>
			<Flex justify="center" align={"center"} direction={"column"} gap={"lg"}>
				<Container size={"md"}>
					<BrandLogo brand={vehicle.brand} page={true} />
				</Container>
				<Flex align={"center"} gap={5}>
					<NameplateBadge nameplate={vehicle.nameplate} />
					<VehiclePageMenu setOpen={setOpen} />
				</Flex>
			</Flex>
			<Container size={"sm"} my={"xl"}>
				{loading ? (
					<Flex justify="center" align={"center"} direction={"column"}>
						<Loader size={"xl"} mt={"xl"} color={"yellow.9"} />
					</Flex>
				) : (
					<KmLineChart kms={kms} media_paid={vehicle.media_paid} user={user} />
				)}
			</Container>
			<Container size={"sm"} my={"xl"}>
				{loading ? (
					<Flex justify="center" align={"center"} direction={"column"}>
						<Loader size={"xl"} mt={"xl"} />
					</Flex>
				) : (
					<KmTable kms={kms} user={user} />
				)}
			</Container>
			<DeleteVehicleModal
				open={open}
				setOpen={setOpen}
				handleDeleteVehicle={handleDeleteVehicle}
				loading={loading}
			/>
		</Container>
	);
};

export default VehiclePage;
