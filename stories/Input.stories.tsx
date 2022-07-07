import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '../src/Input';
import { Form, Formik } from 'formik';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    children: {
      control: {
        type: 'text',
        name: 'testInput',
        label: 'Text Input',
        placeholder: '',
        variant: 'normal',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = (args, { globals: { theme } }) => {
  console.log(theme);
  return (
    <Formik
      initialValues={{ testInput: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Input {...args} variant={theme === 'nayya' ? 'contained' : 'normal'} />
        <button type="submit" className="light">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  name: 'testInput',
  label: 'Text Input',
  placeholder: 'First Name',
  variant: 'normal',
};
