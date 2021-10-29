import { Button, Divider, Stack } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
      defaultValue: 'contained',
    },
    color: {
      options: [
        'inherit',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const All = () => (
  <Stack spacing={1} divider={<Divider orientation="horizontal" flexItem />}>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="error">
      Error
    </Button>
    <Button variant="contained" color="warning">
      Warning
    </Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="contained" color="info">
      Info
    </Button>

    <Button variant="outlined" color="primary">
      Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
    <Button variant="outlined" color="warning">
      Warning
    </Button>
    <Button variant="outlined" color="success">
      Success
    </Button>
    <Button variant="outlined" color="info">
      Info
    </Button>

    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="outlined" disabled>
      Disabled
    </Button>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  // sx: {
  //   width: undefined,
  // },
};
