import { DeleteTwoTone, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Tooltip } from "antd";
import SimpleGrid from "components/SimpleGrid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSampleDelete, useSamplesPaginated } from "./hooks";

const getColumns = ({ onHandleEditItem, handleDelete, deleting }) => [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  {
    title: "Actions",
    align: "right",
    render: (record) => {
      return (
        <>
          <Tooltip placement="bottom" title="View/Edit">
            <Button
              className="gx-mr-2 gx-btn-sm gx-mb-0"
              type="primary"
              onClick={() => onHandleEditItem(record.id)}
            >
              <EditOutlined />
            </Button>
          </Tooltip>
          <Popconfirm
            title="Confirm Delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button
              className="gx-mr-2 gx-btn-sm gx-mb-0"
              type="ghost"
              loading={deleting}
            >
              <DeleteTwoTone />
            </Button>
          </Popconfirm>
        </>
      );
    },
  },
];

const List = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isFetching } = useSamplesPaginated({
    page,
  });
  //   const { mutate: updateSample, isLoading: updating } = useSampleUpdate();
  const { mutate: deleteSample, isLoading: deleting } = useSampleDelete();

  const dataList = data?.data ?? [];

  const pageInfo = data?.pageInfo ?? {};

  const pagination = {
    ...pageInfo,
    current: pageInfo.current,
    total: pageInfo.total,
    pageSize: pageInfo.pageSize,
    showSizeChanger: false,
    showTotal: (total) => `Total ${total} Samples`,
    position: ["bottomRight"],
  };

  const handleDelete = (id) => {
    deleteSample(id);
  };

  const onHandleEditItem = (id) => {
    navigate(`edit/${id}`);
  };

  const onChange = (page) => {
    setPage(page.current);
  };

  const columns = getColumns({ onHandleEditItem, handleDelete, deleting });

  return (
    <SimpleGrid
      dataSource={dataList}
      columns={columns}
      cardTitle="Sample Listing"
      pagination={pagination}
      onChange={onChange}
      loading={isFetching}
    />
  );
};

export default List;
