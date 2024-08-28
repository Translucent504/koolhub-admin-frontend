import { Button, Col, Form, Input, Row } from "antd";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    lg: {
      span: 12,
    },
  },
};

/**
 * Simple Grid
 *
 * @type {React.FC<import("antd").FormProps>}
 *
 */
const SampleForm = ({ ...props }) => {
  return (
    <Form {...formItemLayout} requiredMark={false} layout="vertical" {...props}>
      <Row gutter={[16]}>
        <Col span={24}>
          <Form.Item name={["id"]} label="ID">
            <Input disabled />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name={["name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        wrapperCol={{
          span: 6,
          offset: 6,
        }}
      >
        <Button block type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SampleForm;
