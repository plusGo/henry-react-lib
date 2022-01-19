import React, { FC } from 'react';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const UmiLibHelloWorld: FC = () => {
  return (
    <Space direction="vertical">
      <Text>UMI lib boilerplate (default)</Text>
      <Text type="secondary">UMI lib boilerplate (secondary)</Text>
      <Text type="success">UMI lib boilerplate (success)</Text>
      <Text type="warning">UMI lib boilerplate (warning)</Text>
      <Text type="danger">UMI lib boilerplate (danger)</Text>
      <Text disabled>UMI lib boilerplate (disabled)</Text>
      <Text mark>UMI lib boilerplate (mark)</Text>
      <Text code>UMI lib boilerplate (code)</Text>
      <Text keyboard>UMI lib boilerplate (keyboard)</Text>
      <Text underline>UMI lib boilerplate (underline)</Text>
      <Text delete>UMI lib boilerplate (delete)</Text>
      <Text strong>UMI lib boilerplate (strong)</Text>
      <Text italic>UMI lib boilerplate (italic)</Text>
    </Space>
  );
};

export default UmiLibHelloWorld;
