import { BarChart } from "@tremor/react";
import { PopulationData } from "./PopulationChart";

function valueFormatter(Number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "decimal",
  });

  return formatter.format(Number);
}

export default function BarChartCard({
  chartdata,
  nation,
}: {
  chartdata: PopulationData[];
  nation: string;
}) {
  return (
    <>
      <h3 className="ml-4 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {`Population of ${nation}`}
      </h3>
      <div>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="Year"
          categories={["Population"]}
          colors={["green"]}
          valueFormatter={valueFormatter}
          yAxisWidth={48}
          showTooltip={true}
          showLegend={true}
          showGridLines={true}
          showAnimation={true}
        />
        <h3 className="text-center ml-4 text-base font-normal text-ash-secondary">
          Years
        </h3>
      </div>
    </>
  );
}
