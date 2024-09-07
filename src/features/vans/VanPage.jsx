import { Card, Flex } from "antd";
import VanList from "./VanListing";

const VanPage = () => {
  return (
    <Flex vertical gap="1rem">
      <VanList />
      <Card title="Van Management">
        <Card.Meta title="Vans" description="Manage your van fleet" />
      </Card>
    </Flex>
  );
};

export default VanPage;