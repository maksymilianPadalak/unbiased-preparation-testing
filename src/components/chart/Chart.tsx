import { FC } from "react";
import { ResponsiveLine } from "@nivo/line";
import chartData from "./chartData.json";

export const Chart: FC = () => {
  return (
    <div className="w-full h-96 p-4">
      <div className="mb-4"></div>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        xScale={{ type: "point" }}
        axisBottom={{
          tickSize: 0,
          tickPadding: 15,
          tickRotation: 0,
          legend: "TRANSPORTATION",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 15,
          tickRotation: 0,
          legend: "COUNT",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        colors={["#000000", "#ef4444", "#eab308", "#22c55e", "#3b82f6"]}
        lineWidth={3}
        pointSize={8}
        pointColor={"#ffffff"}
        pointBorderWidth={3}
        pointBorderColor={{ from: "seriesColor" }}
        enableTouchCrosshair={true}
        useMesh={true}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fontWeight: "bold",
                fill: "#000000",
              },
            },
            legend: {
              text: {
                fontSize: 14,
                fontWeight: "900",
                fill: "#000000",
              },
            },
          },
          grid: {
            line: {
              stroke: "#e5e5e5",
              strokeWidth: 1,
            },
          },
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "square",
            itemTextColor: "#000000",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, 0.03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
