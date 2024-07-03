import React from 'react';
import { Heading, Flex} from '@aws-amplify/ui-react';
import TodoList from './TodoList';

import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

const Page5: React.FC = () => {

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <Flex direction="column" width={400}>
      <Heading level={1}>The TODO list still works too!</Heading>
      <main>
      <button onClick={createTodo}>+ new</button>
      <TodoList client={client}/>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      </main>
    </Flex>
  );
};

export default Page5;
