import { Card, Spin, Table } from "antd";

/**
 * Simple Grid
 *
 * @type {React.FC<import("antd").TableProps>}
 *
 */
const SimpleGrid = ({ cardTitle, cardExtra, loading, rowKey, ...props }) => {
  return (
    <Card
      extra={cardExtra}
      title={cardTitle}
      style={{
        background: "linear-gradient(90deg,#872776,#352883)",
        border: "none",
      }}
      styles={{
        header: {
          border: "none",
        },
        title: {
          color: "white",
          fontSize: "large",
        },
        body: {
          paddingBlockStart: cardTitle ? 0 : null,
        },
      }}
    >
      <Card>
        <Spin spinning={loading} tip="loading...">
          <Table rowKey={rowKey ?? "id"} {...props} />
        </Spin>
      </Card>
    </Card>
  );
};

export default SimpleGrid;
