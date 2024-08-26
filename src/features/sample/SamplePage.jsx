import { Card, Flex } from "antd";
import SampleList from "./SampleListing";

const Component = () => {
  return (
    <Flex vertical gap="1rem">
      <SampleList />
      <Card title="Sample Page">
        <Card.Meta title="Subcard" description="description" />
      </Card>
    </Flex>
  );
};

export default Component;
