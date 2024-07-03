import React from 'react';
import { Text, Flex, Placeholder, Menu, MenuItem, Divider, Tabs, RadioGroupField, Radio, SearchField } from '@aws-amplify/ui-react';

const Page3: React.FC = () => (
    
    <Flex direction="column" width={400}>
    <Menu
    menuAlign="start"
    >
    <MenuItem onClick={() => alert('Download')}>
        Download
    </MenuItem>
    <MenuItem onClick={() => alert('Create a Copy')}>
        Create a Copy
    </MenuItem>
    <MenuItem onClick={() => alert('Mark as Draft')}>
        Mark as Draft
    </MenuItem>
    <Divider />
    <MenuItem isDisabled onClick={() => alert('Delete')}>
        Delete
    </MenuItem>
    <MenuItem onClick={() => alert('Attend a workshop')}>
        Attend a workshop
    </MenuItem>
    </Menu>
    

    <RadioGroupField
  legend="Language"
  name="language"
>
  <Radio value="HTML">HTML</Radio>
  <Radio value="CSS">CSS</Radio>
  <Radio value="JavaScript">JavaScript</Radio>
</RadioGroupField>
<Text> Stuff is loading, please wait..</Text>
      <Placeholder size="small" />
      <Placeholder />
      <Placeholder size="large" />
      <Text> Meanwhile check out these tabs..</Text>
      <Tabs
  justifyContent="flex-start"
  defaultValue='Tab 1'
  items={[
    { label: 'Tab 1', value: 'Tab 1', content: 'HEHE' },
    { label: 'Tab 2', value: 'Tab 2', content: 'HAHA' },
    { label: 'Disabled tab', value: 'Tab 3', content: 'Tab content #3', isDisabled: true },
  ]}
/>
<SearchField
  label="Search"
  placeholder="Search here for nothing..."
/>
    </Flex>
);

export default Page3;