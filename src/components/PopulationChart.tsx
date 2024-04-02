import axios from "axios";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

interface PopulationData {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
}

function PopulationChart() {
  const [chart, setChart] = useState<any>([]);
  const chartRef = useRef<HTMLDivElement>(null);
  const data = [["Population", "Year", { role: "style" }]];

  const getChartData = async () => {
    const result = await axios.get(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const Population: PopulationData[] = result.data.data;

    const Xaxis: number[] = [];
    const Yaxis: string[] = [];

    Population.map((eachItem: any) => {
      Xaxis.push(eachItem.Year);
      Yaxis.push(eachItem.Population);
    });

    setChart(data);

    const myChart = echarts.init(chartRef.current);
    myChart.resize();

    const option: echarts.EChartOption = {
      legend:{
        orient: 'vertical',
        right: 10,
        top: 'center'
      },
      title: {
        text: "United States Population",
        textStyle:{
          color:"white"
        }
      },
      tooltip: {
        alwaysShowContent: true,
      },

      xAxis: {
        type: "category",
        data: Xaxis.reverse(),
        axisLabel: {
          color: "#ffffff",
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#ffffff",
          formatter: (value: number) => {
            return (value / 1000000).toFixed(1) + "M"; // Dividing by 1 million and adding 'M' suffix
          },
        },
      },
      series: [
        {
          data: Yaxis.reverse(),
          type: "line",
          itemStyle: {
            color: "#1FCB4F",
          },
        },
      ],
    };

    option && myChart.setOption(option);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div className="aspect-video  bg-dark-secondary rounded-lg   scale-50 p-5 drop-shadow sm:scale-100">
      <div ref={chartRef}  className="h-[400px] w-[600px] sm:h-[350px]"/>
    </div>
  );
}

export default PopulationChart;
