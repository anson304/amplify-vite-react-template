import React, { useState } from 'react';
import { Heading, Flex, Text, Divider, Icon, View, useTheme, Button, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const HomePage: React.FC = () => {
  const { tokens } = useTheme();

  return (
    <Flex direction="column" width={400}>
      <Heading width="30vw" level={1}>
        Welcome to Anson's App
      </Heading>

      <View
        backgroundColor={tokens.colors.green[20]}
        borderRadius={tokens.radii.large}
        fontSize={tokens.fontSizes.xxxxl}
        textAlign="center"
      >
        🌲🌲🌲 🏕 🌲🌲🌲
      </View>

      <Divider label="ERI" />
      <Icon
        ariaLabel="Thumbs up"
        pathData="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17
        1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
      />

      <>
        <Text variation="primary">Primary</Text>
        <Text variation="secondary">Secondary</Text>
        <Text variation="tertiary">Tertiary</Text>
        <Text variation="error">Error</Text>
        <Text variation="warning">Warning</Text>
        <Text variation="info">Info</Text>
        <Text variation="success">Success</Text>
        <Text>Default</Text>
      </>
    </Flex>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages = [
    { component: <HomePage /> },
    { component: <Page1 /> },
    { component: <Page2 /> },
    { component: <Page3 /> },
    { component: <Page4 /> },
    { component: <Page5 /> },
  ];

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  return (
    <Authenticator>
        {({ signOut }) => (
    <main>
      <Flex direction="column">
      {pages[currentPage].component}
      <Button onClick={nextPage}>Next</Button>
      <button onClick={signOut}>Sign out</button>
      </Flex>
    </main>
    )}
      </Authenticator>
  );
};

export default App;
