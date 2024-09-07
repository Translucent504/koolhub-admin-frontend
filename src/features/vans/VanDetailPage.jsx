import { useQuery } from "@tanstack/react-query";
import { Card, Descriptions, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import vanService from "./service";

const VanDetailPage = () => {
  const { vanId } = useParams();
  const { data: van, isLoading } = useQuery({
    queryKey: ["van", vanId],
    queryFn: () => vanService.getById(vanId),
  });

  if (isLoading) return <Skeleton active />;

  return (
    <Card title={`Van Details: ${van.name}`}>
      <Descriptions>
        <Descriptions.Item label="Name">{van.name}</Descriptions.Item>
        <Descriptions.Item label="Model">{van.model}</Descriptions.Item>
        <Descriptions.Item label="Year">{van.year}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default VanDetailPage;