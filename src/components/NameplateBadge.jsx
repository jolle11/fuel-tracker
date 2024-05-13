import { Badge, Title } from "@mantine/core";

const NameplateBadge = ({ nameplate }) => {
	return (
		<Badge
			variant="light"
			color="dark"
			radius={"sm"}
			size="xl"
			py={"lg"}
			style={{ borderColor: "gray" }}
		>
			<Title>{nameplate}</Title>
		</Badge>
	);
};

export default NameplateBadge;
