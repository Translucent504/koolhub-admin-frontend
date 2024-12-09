import { Col, Row } from "antd";
import Announcements from "./Announcements/Announcements";
import EmployeeCounter from "./EmployeeCounter/EmployeeCounter";
import ExitStudentTracking from "./ExitStudentTracking/ExitStudentTracking";
import Glance from "./Glance/Glance";


const Component = () => {
  return (
<Row gutter={[24, 24]}>
  <Col span={12}>
    <Glance />
  </Col>
  <Col span={12}>
    <Announcements />
  </Col>
  <Col span={12}>
    <EmployeeCounter />
  </Col>
  <Col span={12}>
    <ExitStudentTracking />
  </Col>
</Row>
  );
};

export default Component;
