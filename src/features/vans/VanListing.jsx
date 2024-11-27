import { useQuery } from "@tanstack/react-query";
import { Button, Card, Table } from "antd";
import { Link } from "react-router-dom";
import vanService from "./service";
import { useState } from "react";

const VanList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["vans", page],
    queryFn: async () => {
      return vanService.getPagedList({
        pageNumber: page,
        pageSize: 10,
      });
    },
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "vanName",
      key: "vanName",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Driver",
      dataIndex: "personName",
      key: "personName",
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
  const handleChange = ({ current }) => {
    setPage(current);
  };
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
        onChange={handleChange}
      />
    </Card>
  );
};

export default VanList;
