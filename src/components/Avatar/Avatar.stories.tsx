import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarImage, AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args}>
    <AvatarImage src="https://www.w3schools.com/howto/img_avatar.png" />
</Avatar>;

export const Example = Template.bind({});
Example.args = {
};

