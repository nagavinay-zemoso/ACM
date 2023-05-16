import * as React from 'react';
import Button, { ButtonProps } from './Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    variant: 'contained',
    label: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: 'contained',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};

export const StyledButton = Template.bind({});
StyledButton.args = {
  style: { width: '80px', height: '50px' },
};
