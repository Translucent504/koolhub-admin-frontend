import { useState } from "react";
import { dt } from "@mb";
import { useFetchRooms, useFetchStudentsCountCampusWise } from "./hook";
import { Card, Col, Row, Select } from "antd";
import { HomeOutlined, TeamOutlined } from "@ant-design/icons";

const { Option } = Select;

const campusOptions = [
  { id: 1, name: "Boys Campus" },
  { id: 2, name: "Girls Campus" },
  { id: 3, name: "Junior Section" },
  { id: 4, name: "Montessori" },
  { id: 5, name: "Featured Courses" },
  { id: 6, name: "Beginner Level" },
  { id: 7, name: "Mid Level" },
  { id: 8, name: "Higher Level" },
  { id: 9, name: "Highest Level" },
  { id: 10, name: "O/A Level Campus" },
];

const RoomOccupancyDetails = () => {
  const [selectedCampus, setSelectedCampus] = useState(1);

  const {
    data: rooms,
    isLoading: roomsLoading,
    error: roomsError,
  } = useFetchRooms({ CampusId: selectedCampus });

  const {
    data: StudentsCount,
    isLoading: studentsLoading,
    error: studentsError,
  } = useFetchStudentsCountCampusWise({
    CampusId: selectedCampus,
    to: dt.today().format(dt.formats.YearMonthDateDashed),
    from: dt.today().format(dt.formats.YearMonthDateDashed),
  });

  if (roomsLoading || studentsLoading) return <div>Loading...</div>;
  if (roomsError || studentsError) return <div>Error fetching data!</div>;

  const campusData = StudentsCount?.[0] || {};

  const getFloor = (value) => {
    const floor = [
      { key: 0, value: 0, displayText: "Ground Floor" },
      { key: 1, value: 1, displayText: "First Floor" },
      { key: 2, value: 2, displayText: "Second Floor" },
    ];
    const floorObj = floor.find((o) => o.value === value);
    return floorObj ? floorObj.displayText : "Unknown Floor";
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Campus Card */}
      <Card
        style={{ marginBottom: "20px" }}
        title={
          <>
            <span>
              <HomeOutlined style={{ fontSize: "24px", marginRight: "10px" }} />
              Campus Information
            </span>
            <div style={{ float: "right" }}>
              <label style={{ marginRight: "10px" }}>Select Campus:</label>
              <Select
                id="campusSelect"
                value={selectedCampus}
                onChange={(value) => setSelectedCampus(value)}
                style={{ width: "200px" }}
              >
                {campusOptions.map((campus) => (
                  <Option key={campus.id} value={campus.id}>
                    {campus.name}
                  </Option>
                ))}
              </Select>
            </div>
          </>
        }
      >
        <p>
          <strong>Campus Name:</strong> {campusData.campus || "Unknown"}
        </p>
        <p>
          <strong>Students Count:</strong> {campusData.count || 0}
        </p>
      </Card>

      {/* Room Cards */}
      <Row gutter={[16, 16]}>
        {rooms?.map((room) => (
          <Col key={room.roomId} xs={24} sm={12} md={8}>
            <Card
              title={
                <span>
                  <TeamOutlined
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  />
                  {room.name}
                </span>
              }
            >
              <p>
                <strong>Capacity:</strong> {room.capacity}
              </p>
              <p>
                <strong>Total Strength:</strong> {room.totalStrength}
              </p>
              <p>
                <strong>Floor:</strong> {getFloor(room.floor)}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomOccupancyDetails;
