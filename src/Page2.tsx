import React from 'react';
import { TextField, Flex, TextAreaField, SliderField, SelectField, SwitchField, Fieldset, CheckboxField, Input} from '@aws-amplify/ui-react';

const Page2: React.FC = () => (
    
    <Flex direction="column" width={400}>
    <TextField
    descriptiveText="Enter a valid nickname"
    placeholder="Soup"
    label="Nickname"
    errorMessage="There is an error"
    />
    <TextAreaField
    descriptiveText="Tell me about your hobbies"
    label="Hobbies"
    name="hobbies"
    placeholder="Valorant, league, etc."
    rows={3}/>
    <SliderField
    label="What's your age?"
    max={100000}
    />
    <SelectField
    label="Fruit"
    descriptiveText="What's your favorite fruit?"
    >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange" disabled>Orange</option>
        <option value="pineapple">Pineapple</option>
        <option value="kiwi">Kiwi</option>
        <option value="tangerine">Tangerine</option>
    </SelectField>

    <SwitchField
    isDisabled={false}
    label="Are you switched on?"
    labelPosition="start"
    />

<Fieldset
  legend="Favorite people"
  variation="plain"
  direction="column">
  <CheckboxField
    label="Anson"
    name="anson"
  />
  <CheckboxField
    label="Bob"
    name="bob"
  />
</Fieldset>
<Input
  placeholder="List extra people"
/>
    </Flex>

    
);

export default Page2;