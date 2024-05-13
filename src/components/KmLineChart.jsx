import { LineChart } from "@mantine/charts";
import CustomChartTooltip from "./CustomChartTooltip";

const KmLineChart = ({ kms, media_paid, user }) => {
	const media_line = Number.parseFloat(media_paid);
	return (
		<LineChart
			h={200}
			data={[...kms].reverse()}
			dataKey="created"
			series={[{ name: "paid", label: "Paid", color: "yellow.9" }]}
			referenceLines={[
				{
					y: media_line,
					label: `Media paid ${media_paid}${user.currency}`,
					color: "indigo.6",
				},
			]}
			tooltipProps={{
				content: ({ label, payload }) => (
					<CustomChartTooltip
						label={label}
						payload={payload}
						currency={user.currency}
						measure={user.measure_unit}
					/>
				),
			}}
			activeDotProps={{ r: 7, strokeWidth: 2, fill: "#fff" }}
			strokeWidth={1.5}
			unit={user.currency}
			curveType="bump"
			xAxisProps={{ padding: { left: 10, right: 10 } }}
			yAxisProps={{ domain: [0, Math.ceil(media_line / 10) * 10] }}
		/>
	);
};

export default KmLineChart;
