import { useQuery } from "@tanstack/react-query";
import { Button, Card, Table } from "antd";
import { Link } from "react-router-dom";
import vanService from "./service";

const VanList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["vans"],
    queryFn: () => vanService.getPagedList({ pageNumber: 1, pageSize: 10 }),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Link to={`/vans/${record.id}`}>
          <Button type="primary">View Details</Button>
        </Link>
      ),
    },
  ];

  return (
    <Card
      title="Van List"
      extra={
        <Link to="/vans/new">
          <Button type="primary">Add New Van</Button>
        </Link>
      }
    >
      <Table
        dataSource={data?.data}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        pagination={{
          total: data?.pageInfo.total,
          pageSize: data?.pageInfo.pageSize,
          current: data?.pageInfo.current,
        }}
      />
    </Card>
  );
};

export default VanList;