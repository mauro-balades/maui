import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chip, ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Example Chip',
};

