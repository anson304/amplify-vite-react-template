import React from 'react';
import { Heading, Alert, Flex } from '@aws-amplify/ui-react';

const Page1: React.FC = () => (
    <Flex direction="column" width={400}>
    <Heading level={1}>Gimme your details</Heading>
    <Alert
      isDismissible={false}
      hasIcon={true}
      heading="BTW"
      >
      You HAVE to fill this out.
    </Alert>
    <Alert variation="warning">Warning: if you dont..</Alert>
    <Alert variation="error">I will give you an error</Alert>
    <Alert variation="success">But if you do you get a success!</Alert>
    </Flex>
);
export default Page1;