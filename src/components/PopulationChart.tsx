import axios from "axios";
import { useEffect, useState } from "react";
import BarChartCard from "./BarChartCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";

export interface PopulationData {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
}

function PopulationChart() {
  const [chart, setChart] = useState<PopulationData[]>([]);
  const getChartData = async () => {
    const result = await axios.get(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const Population: PopulationData[] = result.data.data;
    setChart(Population.reverse());
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div className="w-full border border-ash-primary/10 bg-dark-secondary rounded-xl p-2 sm:p-5">
      <TabGroup className="mt-6">
        <TabList>
          <Tab>India</Tab>
          <Tab>USA</Tab>
          <Tab>Russia</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BarChartCard chartdata={chart} nation={"India"} />
          </TabPanel>
          <TabPanel>
            <BarChartCard chartdata={chart} nation={"United States"} />
          </TabPanel>
          <TabPanel>
            <BarChartCard chartdata={chart} nation={"Russia"} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default PopulationChart;
