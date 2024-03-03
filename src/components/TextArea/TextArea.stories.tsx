import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Type Something!',
};

