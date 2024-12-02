import { Card, Row, Col, Typography, Badge, Space } from "antd";
import {
  UserOutlined,
  FileAddOutlined,
  TeamOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Widget from "components/Widget";
import { useEmployeeCount } from "./hooks";

const { Text } = Typography;

const EmployeeCounter = () => {
  const { data } = useEmployeeCount();

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
          maxWidth:"45%",
          overflow: "auto",
        },
      }}
    >
      <Row gutter={[16, 16]} justify="center">
        {employeeData.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={6}>
            <Card
              bordered={false}
              style={{
                backgroundColor: item.color,
                borderRadius: 10,
                textAlign: "center",
                color: "#fff",
                width: "120px",
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
