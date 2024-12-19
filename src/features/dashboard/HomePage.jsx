import { Col, Divider, Row } from "antd";
import Announcements from "./Announcements/Announcements";
import EmployeeCounter from "./EmployeeCounter/EmployeeCounter";
import ExitStudentTracking from "./ExitStudentTracking/ExitStudentTracking";
import Glance from "./Glance/Glance";
import CampusKeepUp from "./CampusKeepUp/CampusKeepUp";
import TempEmployeeList from "./TempEmployeeList/TempEmployeeList";

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
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <EmployeeCounter />
        </Col>
      </Row>

      <Divider />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
         
          <TempEmployeeList />
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
