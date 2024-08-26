import { useSampleDetail, useSampleUpdate } from "./hooks";
import { useNavigate, useParams } from "react-router-dom";
import SampleForm from "./SampleForm";
import { Card, notification } from "antd";

const SampleDetailPage = () => {
  const navigate = useNavigate();
  let { sampleId } = useParams();
  const { mutate: updateSample, isPending } = useSampleUpdate();
  const onFinish = (values) => {
    updateSample(values, {
      onSuccess: () => {
        notification.success({ message: "Saved" });
        navigate("/sample");
      },
    });
  };
  const { data, isFetching } = useSampleDetail({ id: sampleId });

  if (isFetching || isPending) return "Loading...";
  return (
    <Card title="Edit Sample" style={{ width: "50%" }}>
      <SampleForm initialValues={data} onFinish={onFinish} />
    </Card>
  );
};

export default SampleDetailPage;
