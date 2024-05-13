import { Table } from "@mantine/core";

const KmTable = ({ kms, user }) => {
	return (
		<Table striped highlightOnHover>
			<Table.Thead>
				<Table.Tr>
					<Table.Th style={{ textAlign: "center" }}>
						{user.measure_unit}
					</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>Price</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>
						Paid ({user.currency})
					</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>Created</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{kms?.map((km) => (
					<Table.Tr key={km.id}>
						<Table.Td style={{ textAlign: "center" }}>{km.km}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{km.price}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{km.paid}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{km.created}</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>
	);
};

export default KmTable;
