import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../lib/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      description:
        "The color of the component. It supports those theme colors that make sense for this design system.",
    },
    kind: { description: "Specify the kind of Button you want to create." },
    fullWidth: {
      description:
        "If true, the button will take up the full width of its container.",
    },
    size: {
      description: "The size of the component.",
    },
    renderIcon: {
      description: "Optional prop to allow overriding the icon rendering.",
    },
    hasIconOnly: {
      description: "Specify if the button is an icon-only button",
    },
    disabled: { description: "If true, the component is disabled." },
    children: { description: "The content of the component." },
    onClick: {
      description:
        "Provide an optional function to be called when the button element is clicked.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  kind: "normal",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  kind: "normal",
  children: "Secondary Button",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  kind: "normal",
  children: "Warning Button",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  kind: "normal",
  children: "Danger Button",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  kind: "normal",
  children: "Success Button",
};
