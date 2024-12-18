import { Col, Divider, Row } from "antd";
import Announcements from "./Announcements/Announcements";
import EmployeeCounter from "./EmployeeCounter/EmployeeCounter";
import ExitStudentTracking from "./ExitStudentTracking/ExitStudentTracking";
import Glance from "./Glance/Glance";
import CampusKeepUp from "./CampusKeepUp/CampusKeepUp";

const Component = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Glance />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Announcements />
        </Col>
      </Row>

      <Divider />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <EmployeeCounter />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <CampusKeepUp />
        </Col>
      </Row>

      <Divider />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <ExitStudentTracking />
        </Col>
      </Row>
    </>
  );
};

export default Component;
