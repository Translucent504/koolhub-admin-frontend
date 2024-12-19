import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";
import { useCampusKeepUp } from "./hook";
import Widget from "components/Widget";
import { Badge, Card } from "antd";

const CampusKeepUp = () => {
  const { data } = useCampusKeepUp();

//   const data = [
//     {
//       id: 2572,
//       campusId: 3,
//       campus: "Junior Section",
//       dateRangeFrom: "2023-10-01T00:00:00",
//       user: "Imran Chapra",
//       content:
//         '[{"value":60,"title":"TOILETS","key":"toilets"},{"value":46.666666666666664,"title":"CLASSROOMS","key":"classrooms"},{"value":62.22222222222222,"title":"STAFF ROOMS","key":"staffrooms"},{"value":61.1764705882353,"title":"MAINTENANCE","key":"maintenance"},{"value":62.22222222222222,"title":"SECURITY & MAINTENANCE","key":"securityAndMaintenance"}]',
//     },
//     {
//       id: 2573,
//       campusId: 4,
//       campus: "Senior Section",
//       dateRangeFrom: "2023-10-02T00:00:00",
//       user: "Ahmed Khan",
//       content:
//         '[{"value":70,"title":"TOILETS","key":"toilets"},{"value":50,"title":"CLASSROOMS","key":"classrooms"},{"value":65,"title":"STAFF ROOMS","key":"staffrooms"},{"value":63.5,"title":"MAINTENANCE","key":"maintenance"},{"value":67.5,"title":"SECURITY & MAINTENANCE","key":"securityAndMaintenance"}]',
//     },
//     {
//       id: 2574,
//       campusId: 5,
//       campus: "Primary Section",
//       dateRangeFrom: "2023-10-03T00:00:00",
//       user: "Sana Ali",
//       content:
//         '[{"value":55,"title":"TOILETS","key":"toilets"},{"value":48.333333333333336,"title":"CLASSROOMS","key":"classrooms"},{"value":60,"title":"STAFF ROOMS","key":"staffrooms"},{"value":59,"title":"MAINTENANCE","key":"maintenance"},{"value":60,"title":"SECURITY & MAINTENANCE","key":"securityAndMaintenance"}]',
//     },
//     {
//       id: 2575,
//       campusId: 6,
//       campus: "High School",
//       dateRangeFrom: "2023-10-04T00:00:00",
//       user: "Ali Raza",
//       content:
//         '[{"value":65,"title":"TOILETS","key":"toilets"},{"value":55,"title":"CLASSROOMS","key":"classrooms"},{"value":68,"title":"STAFF ROOMS","key":"staffrooms"},{"value":64.5,"title":"MAINTENANCE","key":"maintenance"},{"value":66.5,"title":"SECURITY & MAINTENANCE","key":"securityAndMaintenance"}]',
//     },
//   ];

  // Check if data exists and is an array
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <Widget
      title={"Campus Keep Up"}
      styles={{
        body: {
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
    >
      {data.map((item, index) => {
        const chartData = JSON.parse(item.content); // Parse content for each item

        return (
          <Badge.Ribbon text={item.user} key={index}>
            <Card title={item.campus} style={{ marginBottom: "16px" }}>
              <ResponsiveContainer height={250}>
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="title"
                    tick={{
                      fill: "#333",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                    tickLine={false}
                    interval={0} // Ensures all labels are shown
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(200, 200, 200, 0.3)" }}
                    contentStyle={{
                      borderRadius: "8px",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#a855f7"
                    barSize={40}
                    radius={[4, 4, 0, 0]}
                  >
                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={(value) => value.toFixed(1)}
                      style={{
                        fill: "#333",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Badge.Ribbon>
        );
      })}
    </Widget>
  );
};

export default CampusKeepUp;
