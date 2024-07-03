import React from 'react';
import { Heading, Text, Flex, Accordion, Card, Image, Badge, useTheme, View, Button } from '@aws-amplify/ui-react';

const Page4: React.FC = () => {
  const { tokens } = useTheme();

  return (
    <Flex direction="column" width={400}>
      <Heading>Common Q&A</Heading>
      <Accordion
        items={[
          {
            trigger: 'Is it accessible?',
            value: 'accessible',
            content: 'Yes, of course!'
          },
          {
            trigger: 'Will I get better?',
            value: 'styling',
            content: '100% you will!'
          },
          {
            trigger: 'Is it free?',
            value: 'content',
            content: 'Paid subscription, but worth it!'
          }
        ]}
      />

      <View backgroundColor={tokens.colors.background.secondary} padding={tokens.space.medium}>
        <Card>
          <Flex direction="row" alignItems="flex-start">
            <Image
              alt="Road to Milford Sound"
              src="/vite.svg"
              width="33%"
            />
            <Flex direction="column" alignItems="flex-start" gap={tokens.space.xs}>
              <Flex>
                <Badge size="small" variation="info">Plus</Badge>
                <Badge size="small" variation="success">Verified</Badge>
              </Flex>

              <Heading level={5}>Anson's All-Emcompassing Yearly Subscription</Heading>

              <Text as="span">
                Join me on this beautiful adventure through the cool and mysterious world.
              </Text>
              <Button variation="primary">Buy Now!</Button>
            </Flex>
          </Flex>
        </Card>
      </View>
    </Flex>
  );
};

export default Page4;
