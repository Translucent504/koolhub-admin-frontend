import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message } from "antd";
import { useNavigate } from "react-router-dom";
import vanService from "./service";

const VanForm = ({ initialValues }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: vanService.createOrUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries(["vans"]);
      message.success("Van saved successfully");
      navigate("/vans");
    },
    onError: () => {
      message.error("Failed to save van");
    },
  });

  const onFinish = (values) => {
    mutation.mutate(values);
  };

  return (
    <Form
      name="vanForm"
      initialValues={initialValues}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the van name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="model"
        label="Model"
        rules={[{ required: true, message: "Please input the van model!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="year"
        label="Year"
        rules={[{ required: true, message: "Please input the van year!" }]}
      >
        <InputNumber min={1900} max={2100} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VanForm;