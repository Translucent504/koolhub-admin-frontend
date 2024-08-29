import { Col, Row } from "antd";
import Glance from "./Glance";

const Component = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col>
        <Glance />
      </Col>
    </Row>
  );
};

export default Component;
