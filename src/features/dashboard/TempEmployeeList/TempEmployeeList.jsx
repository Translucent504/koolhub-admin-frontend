import { Table, Typography } from "antd";
import Widget from "components/Widget";
import dayjs from "dayjs";
import { AuthContext } from "features/auth/context";
import { useContext } from "react";
import { useFetchTempEmpList } from "./hook";

const { Text } = Typography;

const TempEmployeeList = () => {
  const { user } = useContext(AuthContext);

  const { data } = useFetchTempEmpList({ userCode: user.userCode });

  // Columns Definition
  const columns = [
    {
      title: "ID",
      dataIndex: "empId",
      key: "empId",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "DOJ",
      dataIndex: "joiningDate",
      key: "joiningDate",
      render: (date) => dayjs(date).format("DD-MM-YYYY"),
    },
    {
      title: "Section",
      dataIndex: "empId",
      key: "empId",
    },
  ];

  return (
    <Widget
      title={"Employee To Permenant"}
      styles={{
        body: {
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
    >
      <Table
      style={{
        padding:"0px"
      }}
      size="small"
        dataSource={data}
        columns={columns}
        rowKey="grNumber"
        pagination={{ pageSize: 10 }}
      />
    </Widget>
  );
};

export default TempEmployeeList;
