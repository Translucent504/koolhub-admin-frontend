import { Badge, Card, Col, Row, Timeline } from "antd";
import Widget from "components/Widget";
import { useGlanceMeetings } from "./hook";
const { Meta } = Card;

const DefaultTimeLineItem = ({ timeLine }) => {
  const { campus, category, meeting_with, description } = timeLine;

  return (
    <Badge.Ribbon text={campus} color="#108ee9">
      <Card
        hoverable
        title={meeting_with}
        style={{
          background: "lightpink",
        }}
        styles={{
          title: {
            color: "black",
            fontWeight: "lighter",
            fontFamily: "monospace",
          },
          body: { paddingTop: 0 },
          header: {
            borderBottom: "none",
            paddingBlock: 0,
          },
        }}
      >
        <div
          style={{
            border: "solid",
            position: "absolute",
            top: 10,
            left: -16,
            borderColor: "#0000 lightpink",
            borderWidth: "10px 16px 10px 0",
          }}
        />
        <Meta title={category} description={description} />
      </Card>
    </Badge.Ribbon>
  );
};

// const glanceMeetings = [
//   {
//     campus: "Campus 1",
//     category: "Meeting",
//     timing: "9:00 AM",
//     meeting_with: "Meeting with John Doe",
//     description: "Meeting with John Doe to discuss the new project.",
//   },
//   {
//     campus: "Campus 2",
//     category: "Meeting",
//     timing: "9:00 AM",
//     meeting_with: "Meeting with Jane Doe",
//     description: "Meeting with Jane Doe to discuss the new project.",
//   },
//   {
//     campus: "Campus 3",
//     category: "Meeting",
//     timing: "9:00 AM",
//     meeting_with: "Meeting with John Doe",
//     description: "Meeting with John Doe to discuss the new project.",
//   },
//   {
//     campus: "Campus 4",
//     category: "Meeting",
//     timing: "9:00 AM",
//     meeting_with: "Meeting with Jane Doe",
//     description: "Meeting with Jane Doe to discuss the new project.",
//   },
// ];
const Glance = () => {
  const { data: glanceMeetings } = useGlanceMeetings({
    date: "2018-02-10",
    // date: dt.toShortDateString(
    //   dt.toLocal(),
    //   dt.formats.YearMonthDateDashed
    // ),
  });
  return (
    <Widget
      title={"Meetings"}
      styles={{
        body: {
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
    >
      <Row>
        <Col span={24}>
          {glanceMeetings?.length ? (
            <Timeline
              style={{
                "--ant-margin": "36px",
              }}
              items={glanceMeetings?.map((timeLine, index) => ({
                children: (
                  <DefaultTimeLineItem key={index} timeLine={timeLine} />
                ),
                dot: timeLine.timing,
              }))}
            />
          ) : (
            <>No Meetings Available</>
          )}
        </Col>
      </Row>
    </Widget>
  );
};

export default Glance;
