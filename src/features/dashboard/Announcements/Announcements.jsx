import { Card, Row, Col, Typography, Divider } from "antd";
const { Text } = Typography;

import Widget from "components/Widget";
import { CalendarOutlined } from "@ant-design/icons";
import { dt } from "@mb";
import { useAnnouncements } from "./hook";
const Announcements = () => {
  const { data } = useAnnouncements();
  
  const announcements = data || [];

  return (
    <Widget
      title={"Announcements"}
      styles={{
        body: {
          maxHeight: "300px",
          // maxWidth:"45%",
          overflow: "auto",
        },
      }}
    >
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        {announcements.length > 0 ? (
          announcements.map((item, index) => (
            <Card
              key={index}
              style={{
                marginBottom: 10,
                backgroundColor: "#008b8b",
                color: "#fff",
                borderRadius: 8,
                padding: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row align="middle" style={{ marginBottom: "10px" }}>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <CalendarOutlined
                    style={{
                      fontSize: "18px",
                      color: "#fff",
                      marginRight: "8px",
                    }}
                  />
                  <Text
                    strong
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      backgroundColor: "#ff4d4f",
                      padding: "5px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {dt.toShortDateString(item.ann_date, dt.formats.YearMonthDateDashed)}
                    {/* {dt.toMonthYearString(item.ann_date, dt.formats.MonthDateYear4)} */}

                  </Text>
                </Col>
              </Row>
              <Divider
                style={{
                  backgroundColor: "#fff",
                  opacity: 0.5,
                  margin: "10px 0",
                }}
              />
              <Row>
                <Col>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.announcement}
                  </Text>
                </Col>
              </Row>
            </Card>
          ))
        ) : (
          <Text>No announcements available.</Text>
        )}
      </div>
    </Widget>
  );
};

export default Announcements;
