import { Card, Row, Col, Typography, Badge, Space } from "antd";
import {
  UserOutlined,
  FileAddOutlined,
  TeamOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Widget from "components/Widget";
import { useContext } from "react";
import { AuthContext } from "features/auth/context";
import { dt } from "@mb";
import { useEmployeeCount } from "./hook";

const { Text } = Typography;

const EmployeeCounter = () => {
  const { user } = useContext(AuthContext);

  const { data } = useEmployeeCount({
    campusId: user.campusId,
    date: dt.today().format(dt.formats.DateMonthYear1),
  });

  // Dynamic Employee Data
  const employeeData = [
    {
      count: data?.total || 0,
      label: "Total",
      color: "#1890ff",
      icon: <UserOutlined />,
    },
    {
      count: data?.new || 0,
      label: "New",
      color: "#52c41a",
      icon: <FileAddOutlined />,
    },
    {
      count: data?.temporary || 0,
      label: "Temporary",
      color: "#faad14",
      icon: <TeamOutlined />,
    },
    {
      count: data?.exit || 0,
      label: "Exit",
      color: "#f5222d",
      icon: <PoweroffOutlined />,
    },
  ];

  return (
    <Widget
      title={"Employees"}
      styles={{
        body: {
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
    >
      <Row gutter={[24, 24]} >
        {employeeData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={8}
            md={12}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              bordered={false}
              style={{
                backgroundColor: item.color,
                borderRadius: 10,
                textAlign: "center",
                color: "#fff",
                width: "100%", // Ensure it adjusts within the column
                maxWidth: "120px", // Limit maximum width
              }}
            >
              <Space direction="vertical" size="middle" align="center">
                <Badge
                  count={item.icon}
                  style={{
                    backgroundColor: "#fff",
                    color: item.color,
                    fontSize: "20px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    lineHeight: "40px",
                  }}
                />
                <Text
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                  }}
                >
                  {item.count}
                </Text>
                <Text style={{ fontSize: "14px", opacity: 0.9 }}>
                  {item.label}
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Widget>
  );
};

export default EmployeeCounter;
