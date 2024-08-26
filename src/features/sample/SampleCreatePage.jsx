import { Card, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useSampleUpdate } from "./hooks";
import SampleForm from "./SampleForm";

const SampleCreatePage = () => {
  const navigate = useNavigate();
  const { mutate: updateSample, isPending } = useSampleUpdate();
  const onFinish = (values) => {
    updateSample(values, {
      onSuccess: ({ id }) => {
        notification.success({ message: "Saved" });
        navigate(`/sample/${id}`);
      },
    });
  };

  if (isPending) return "Loading...";

  return (
    <Card title="Edit Sample" style={{ width: "50%" }}>
      <SampleForm onFinish={onFinish} />
    </Card>
  );
};

export default SampleCreatePage;
