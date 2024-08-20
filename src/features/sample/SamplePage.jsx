import { Card, Flex } from "antd";
import List from "./SampleListing";

const Component = () => {
  return (
    <Flex vertical gap="1rem">
      <Card title="Sample Page">
        <Card.Meta title="Subcard" description="description" />
      </Card>
      <List />
    </Flex>
  );
};

export default Component;
